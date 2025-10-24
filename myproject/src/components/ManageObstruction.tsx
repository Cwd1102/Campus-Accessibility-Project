import React, { useEffect, useMemo, useState } from "react";

interface Report {
  _id: string;
  building: string;
  floor: string;
  locationType: string;
  notes: string;
  timestamp: string;
}

const PAGE_SIZE = 10;
const API_BASE = "http://localhost:8080";

const isObjectId = (val: string) => /^[0-9a-fA-F]{24}$/.test(String(val).trim());
const cleanObjectId = (id: string) => String(id).trim().replace(/^"|"$/g, "");

const formatDateTime = (iso: string) => {
  try {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleString();
  } catch {
    return iso;
  }
};

export default function ManageObstruction() {
  const [reports, setReports] = useState<Report[]>([]);
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [reachedEnd, setReachedEnd] = useState<boolean>(false);

  const allChecked = useMemo(
    () => reports.length > 0 && reports.every((r) => selected.has(r._id)),
    [reports, selected]
  );

  const anyChecked = selected.size > 0;

  const fetchPage = async (p = page) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_BASE}/report/loadpage?page=${p}`);
      if (!res.ok) throw new Error(`Failed to load page ${p}: ${res.status}`);
      const data: Report[] = await res.json();
      setReports(data);
      setReachedEnd(data.length < PAGE_SIZE);
      setSelected(new Set());
    } catch (e: any) {
      setError(e?.message ?? "Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const toggleOne = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleAll = () => {
    if (allChecked) {
      setSelected(new Set());
    } else {
      setSelected(new Set(reports.map((r) => r._id)));
    }
  };

  // const deleteOne = async (id: string) => {
  //   const res = await fetch(`${API_BASE}/report/delete`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(id),
  //   });
  //   if (!res.ok) {
  //     const txt = await res.text().catch(() => "");
  //     throw new Error(`Delete failed (${res.status}): ${txt || id}`);
  //   }
  // };

//   const deleteOne = async (id: string) => {
//   const res = await fetch(`${API_BASE}/report/delete`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     // send the id as plain text (no quotes)
//     body: JSON.stringify(id.replace(/^\"|\"$/g, "")),
//   });
//   if (!res.ok) {
//     const txt = await res.text().catch(() => "");
//     throw new Error(`Delete failed (${res.status}): ${txt || id}`);
//   }
// };

// const deleteOne = async (id: string) => {
//   const res = await fetch(`${API_BASE}/report/delete`, {
//     method: "POST",
//     headers: { "Content-Type": "text/plain" },
//     body: id, // send raw text, not JSON
//   });
//   if (!res.ok) {
//     const txt = await res.text().catch(() => "");
//     throw new Error(`Delete failed (${res.status}): ${txt || id}`);
//   }
// };

const deleteOne = async (mongoId: string) => {
  const clean = cleanObjectId(mongoId);
  if (!isObjectId(clean)) {
    throw new Error(`Invalid Mongo ObjectId: ${clean}`);
  }

  const res = await fetch(`${API_BASE}/report/delete`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ id: clean }), // <-- matches your PowerShell example
  });

  // Try reading JSON (e.g., { acknowledged: true, deletedCount: 1 })
  let payload: any = null;
  try { payload = await res.json(); } catch { /* ignore */ }

  if (!res.ok) {
    const txt = typeof payload === "string" ? payload : JSON.stringify(payload);
    throw new Error(`Delete failed (${res.status}): ${txt || clean}`);
  }

  if (payload && typeof payload === "object" && "deletedCount" in payload) {
    if (payload.deletedCount !== 1) {
      throw new Error(`Backend did not delete _id=${clean} (deletedCount=${payload.deletedCount})`);
    }
  }
};

  const handleDeleteSelected = async () => {
    if (!anyChecked) return;
    const confirmMsg = selected.size === 1
      ? "Delete this report? This cannot be undone."
      : `Delete ${selected.size} reports? This cannot be undone.`;
    if (!window.confirm(confirmMsg)) return;

    const ids = Array.from(selected);
    const prevReports = reports;
    setReports((curr) => curr.filter((r) => !selected.has(r._id)));
    setSelected(new Set());

    try {
      for (const id of ids) {
        // eslint-disable-next-line no-await-in-loop
        await deleteOne(id);
      }
      if (prevReports.length === ids.length) {
        if (page > 1) setPage((p) => p - 1);
        else fetchPage(1);
      }
    } catch (e: any) {
      setReports(prevReports);
      setError(e?.message ?? "Failed to delete one or more items");
    }
  };

  const handleRefresh = () => fetchPage(page);

  return (
    <div className="p-4">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <h1 className="text-xl font-semibold">Manage Obstruction Reports</h1>
        <div className="ml-auto flex items-center gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={loading || page === 1}
            className="px-3 py-1 rounded border disabled:opacity-50"
          >
            ◀ Prev
          </button>
          <span className="px-2">Page {page}</span>
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={loading || reachedEnd}
            className="px-3 py-1 rounded border disabled:opacity-50"
          >
            Next ▶
          </button>
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="px-3 py-1 rounded border disabled:opacity-50"
          >
            Refresh
          </button>
          <button
            onClick={handleDeleteSelected}
            disabled={!anyChecked || loading}
            className="px-3 py-1 rounded border bg-red-600 text-white disabled:opacity-50"
          >
            Delete Selected ({selected.size || 0})
          </button>
        </div>
      </div>

      {error && (
        <div className="mb-3 rounded border border-red-500 bg-red-50 p-2 text-red-700">
          {error}
        </div>
      )}

      <div className="overflow-x-auto rounded border">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-2 text-left w-10">
                <input
                  type="checkbox"
                  checked={allChecked}
                  onChange={toggleAll}
                  aria-label="Select all"
                />
              </th>
              <th className="p-2 text-left">Building</th>
              <th className="p-2 text-left">Floor</th>
              <th className="p-2 text-left">Type</th>
              <th className="p-2 text-left">Notes</th>
              <th className="p-2 text-left">Timestamp</th>
              <th className="p-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td className="p-3" colSpan={7}>
                  Loading...
                </td>
              </tr>
            ) : reports.length === 0 ? (
              <tr>
                <td className="p-3" colSpan={7}>
                  No reports found.
                </td>
              </tr>
            ) : (
              reports.map((r) => (
                <tr key={r._id} className="border-t">
                  <td className="p-2 align-top">
                    <input
                      type="checkbox"
                      checked={selected.has(r._id)}
                      onChange={() => toggleOne(r._id)}
                      aria-label={`Select ${r.building}`}
                    />
                  </td>
                  <td className="p-2 align-top">{r.building}</td>
                  <td className="p-2 align-top">{r.floor}</td>
                  <td className="p-2 align-top">{r.locationType}</td>
                  <td className="p-2 align-top max-w-[24rem]">
                    <span title={r.notes}>{r.notes}</span>
                  </td>
                  <td className="p-2 align-top whitespace-nowrap">{formatDateTime(r.timestamp)}</td>
                  <td className="p-2 align-top">
                    <button
                      className="px-2 py-1 rounded border"
                      onClick={async () => {
                        try {
                          // await deleteOne(r._id);
                          // setReports((curr) => curr.filter((x) => x._id !== r._id));
                          // setSelected((curr) => {
                          //   const next = new Set(curr);
                          //   next.delete(r._id);
                          //   return next;
                          await deleteOne(r._id);          // send {_id} as { id: "<_id>" }
                          await fetchPage(page);           // refresh from backend to reflect truth
                          setSelected((curr) => {
                            const next = new Set(curr);
                            next.delete(r._id);
                            return next;
                          });
                        } catch (e: any) {
                          setError(e?.message ?? "Failed to delete item");
                        }
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-3 text-xs text-gray-600">
        Showing up to {PAGE_SIZE} items per page. Newest first.
      </div>
    </div>
  );
}

