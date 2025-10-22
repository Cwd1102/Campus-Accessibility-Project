// src/pages/LoginPage.tsx
import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const navigate = useNavigate();

   useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (u) navigate("/ManageObstruction");
    });
    return unsub;
  }, [navigate]);

  const loginEmail = async (e: FormEvent) => {
    e.preventDefault();
    setBusy(true); setErr(null);
    try {
      await signInWithEmailAndPassword(auth, email.trim(), pw);
    } catch (e: any) {
      setErr(e.message ?? "Login failed");
    } finally {
      setBusy(false);
    }
  };

  const register = async () => {
    setBusy(true); setErr(null);
    try {
      await createUserWithEmailAndPassword(auth, email.trim(), pw);
    } catch (e: any) {
      setErr(e.message ?? "Signup failed");
    } finally {
      setBusy(false);
    }
  };

  const loginGoogle = async () => {
    setBusy(true); setErr(null);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (e: any) {
      setErr(e.message ?? "Google sign-in failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: "64px auto", padding: 24, borderRadius: 12, boxShadow: "0 6px 24px rgba(0,0,0,0.08)" }}>
      <h2 style={{ marginBottom: 24 }}>Login</h2>

      <form onSubmit={loginEmail}>
        <div style={{ marginBottom: 12 }}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            required
            style={{ width:"100%", padding:10, borderRadius:8, border:"1px solid #ccc" }}
          />
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Password</label>
          <input
            type="password"
            value={pw}
            onChange={e=>setPw(e.target.value)}
            required
            style={{ width:"100%", padding:10, borderRadius:8, border:"1px solid #ccc" }}
          />
        </div>

        {err && <div style={{ color:"crimson", marginBottom: 12 }}>{err}</div>}

        <button disabled={busy} type="submit" style={{ width:"100%", padding:10, borderRadius:8 }}>
          {busy ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <div style={{ display:"flex", gap:8, marginTop:12 }}>
        <button onClick={register} disabled={busy} style={{ flex:1, padding:10, borderRadius:8 }}>
          Create account
        </button>
        <button onClick={loginGoogle} disabled={busy} style={{ flex:1, padding:10, borderRadius:8 }}>
          Google
        </button>
      </div>
    </div>
  );
}
