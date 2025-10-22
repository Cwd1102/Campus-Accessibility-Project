export default function ManageObstruction() {
  return <span>Implement manage obstructions page </span >;
}
// import { useEffect, useMemo, useState } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "../firebase";
// import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

// type Report = {
//   _id: string;
//   building: string;
//   floor: string;
//   locationType: string;
//   notes: string;
//   timestamp: string; // ISO
// };

// export default function ManageObstructions() {
//   const [userReady, setUserReady] = useState(false);
//   const [token, setToken] = useState<string | null>(null);
//   const [reports, setReports] = useState<Report[]>([]);
//   const [selected, setSelected] = useState<Record<string, boolean>>({});
//   const [loading, setLoading] = useState(true);
//   const [deleting, setDeleting] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   // Wait for Firebase user and fetch ID token
//   useEffect(() => {
//     return onAuthStateChanged(auth, async (u) => {
//       if (!u) {
//         setUserReady(true);
//         setToken(null);
//         setReports([]);
//         setSelected({});
//         return;
//       }
//       const t = await u.getIdToken(/* forceRefresh? false */);
//       setToken(t);
//       setUserReady(true);
//     });
//   }, []);

//   // Fetch reports when token available
//   useEffect(() => {
//     (async () => {
//       if (!token) return;
//       setLoading(true);
//       setError(null);
//       try {
//         const res = await fetch("http://localhost:8080/api/reports", {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         if (!res.ok) throw new Error(`HTTP ${res.status}`);
//         const data: Report[] = await res.json();
//         setReports(data);
//       } catch (e: any) {
//         setError(e?.message || "Failed to load reports");
//       } finally {
//         setLoading(false);
//       }
//     })();
//   }, [token]);

//   const allSelected = useMemo(
//     () => reports.length > 0 && reports.every(r => selected[r._id]),
//     [reports, selected]
//   );

//   const toggleAll = () => {
//     if (allSelected) {
//       setSelected({});
//     } else {
//       const next: Record<string, boolean> = {};
//       for (const r of reports) next[r._id] = true;
//       setSelected(next);
//     }
//   };

//   const toggleOne = (id: string) => {
//     setSelected(s => ({ ...s, [id]: !s[id] }));
//   };

//   const selectedIds = useMemo(
//     () => Object.entries(selected).filter(([, v]) => v).map(([k]) => k),
//     [selected]
//   );

//   const onDeleteSelected = async () => {
//     if (!token || selectedIds.length === 0) return;
//     setDeleting(true);
//     setError(null);

//     // Optimistic UI: remove locally first
//     const prev = reports;
//     const next = prev.filter(r => !selectedIds.includes(r._id));
//     setReports(next);
//     setSelected({});

//     try {
//       const res = await fetch("http://localhost:8080/api/reports/delete", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ ids: selectedIds }),
//       });
//       if (!res.ok) throw new Error(`HTTP ${res.status}`);
//       const { deletedCount } = await res.json();
//       // Optionally verify deletedCount === selectedIds.length
//       // If mismatch, you could refetch:
//       // if (deletedCount !== selectedIds.length) refetch();
//     } catch (e: any) {
//       // Revert optimistic update on failure
//       setReports(prev);
//       setError(e?.message || "Delete failed");
//     } finally {
//       setDeleting(false);
//     }
//   };

//   // Simple chart: count by locationType
//   const dataByLocation = useMemo(() => {
//     const map = new Map<string, number>();
//     for (const r of reports) {
//       map.set(r.locationType, (map.get(r.locationType) || 0) + 1);
//     }
//     return Array.from(map.entries()).map(([locationType, count]) => ({ locationType, count }));
//   }, [reports]);

//   if (!userReady) return <div className="p-6">Checking authentication…</div>;
//   if (!token) return <div className="p-6">Please sign in to manage obstructions.</div>;

//   return (
//     <div className="p-6 max-w-6xl mx-auto space-y-6">
//       <header className="flex items-center justify-between">
//         <h1 className="text-2xl font-semibold">Manage Obstructions</h1>
//         <button
//           onClick={onDeleteSelected}
//           disabled={selectedIds.length === 0 || deleting}
//           className="px-3 py-2 rounded-xl shadow disabled:opacity-50 bg-red-600 text-white"
//         >
//           {deleting ? "Deleting…" : `Delete Selected (${selectedIds.length})`}
//         </button>
//       </header>

//       {error && (
//         <div className="bg-red-50 text-red-700 p-3 rounded">Error: {error}</div>
//       )}

//       {/* Chart */}
//       <section className="w-full h-64 border rounded-2xl p-3">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={dataByLocation}>
//             <CartesianGrid strokeDasharray="3 3" />
//             <XAxis dataKey="locationType" />
//             <YAxis allowDecimals={false} />
//             <Tooltip />
//             <Bar dataKey="count" />
//           </BarChart>
//         </ResponsiveContainer>
//       </section>

//       {/* Table */}
//       <section className="overflow-x-auto border rounded-2xl">
//         {loading ? (
//           <div className="p-4">Loading…</div>
//         ) : reports.length === 0 ? (
//           <div className="p-4">No reports.</div>
//         ) : (
//           <table className="min-w-full text-sm">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="p-3">
//                   <input type="checkbox" checked={allSelected} onChange={toggleAll} />
//                 </th>
//                 <th className="p-3 text-left">Building</th>
//                 <th className="p-3 text-left">Floor</th>
//                 <th className="p-3 text-left">Type</th>
//                 <th className="p-3 text-left">Notes</th>
//                 <th className="p-3 text-left">Timestamp</th>
//               </tr>
//             </thead>
//             <tbody>
//               {reports.map((r) => (
//                 <tr key={r._id} className="border-t">
//                   <td className="p-3">
//                     <input
//                       type="checkbox"
//                       checked={!!selected[r._id]}
//                       onChange={() => toggleOne(r._id)}
//                     />
//                   </td>
//                   <td className="p-3">{r.building}</td>
//                   <td className="p-3">{r.floor}</td>
//                   <td className="p-3">{r.locationType}</td>
//                   <td className="p-3">{r.notes}</td>
//                   <td className="p-3">{new Date(r.timestamp).toLocaleString()}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </section>
//     </div>
//   );
// }
