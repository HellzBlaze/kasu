"use client";

import { useStore } from "../store/useStore";

export default function WorkspaceSelector() {
  // Pull the current state and the update function from our global store
  const currentEnvironment = useStore((state) => state.currentEnvironment);
  const setEnvironment = useStore((state) => state.setEnvironment);

  return (
    <div style={{ padding: "1rem", border: "1px solid #2a2a2a", borderRadius: "8px", backgroundColor: "#1e1e1e", minWidth: "250px" }}>
      <label style={{ fontSize: "0.8rem", color: "#888", display: "block", marginBottom: "0.5rem", textTransform: "uppercase", letterSpacing: "1px" }}>
        Isolated Environment
      </label>
      <select 
        value={currentEnvironment} 
        onChange={(e) => setEnvironment(e.target.value)}
        style={{ width: "100%", padding: "0.8rem", borderRadius: "8px", backgroundColor: "#121212", color: "#fff", border: "1px solid #444", fontSize: "1rem" }}
      >
        <option value="main">👤 Main (Personal)</option>
        <option value="stall">🏪 Stall (Commercial)</option>
        <option value="school">🏫 School (Fund)</option>
      </select>
    </div>
  );
}
