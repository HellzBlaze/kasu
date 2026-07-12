"use client";
import { useStore } from "../store/useStore";

export default function WorkspaceSelector() {
  const activeProfile = useStore((state) => state.activeProfile);
  const setProfile = useStore((state) => state.setProfile);

  return (
    <div style={{ padding: "0.5rem 1rem", border: "1px solid var(--border)", borderRadius: "20px", backgroundColor: "var(--surface)" }}>
      <select 
        value={activeProfile} 
        onChange={(e) => setProfile(e.target.value)}
        style={{ width: "100%", padding: "5px", background: "transparent", color: "var(--text)", border: "none", fontSize: "0.9rem", fontWeight: 600, outline: "none", margin: 0 }}
      >
        <option value="Main (Personal)">👤 Main (Personal)</option>
        <option value="Stall (Commercial)">🏪 Stall (Commercial)</option>
        <option value="School (Fund)">🏫 School (Fund)</option>
      </select>
    </div>
  );
}
