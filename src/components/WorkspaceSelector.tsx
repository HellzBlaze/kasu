
"use client";

import { useState } from "react";

export default function WorkspaceSelector() {
  const [activeAccount, setActiveAccount] = useState("My Personal Account");
  const [accountType, setAccountType] = useState("PERSONAL");

  return (
    <div style={{ padding: "1rem", border: "1px solid #2a2a2a", borderRadius: "8px", backgroundColor: "#1e1e1e", maxWidth: "300px" }}>
      <label style={{ fontSize: "0.8rem", color: "#888", display: "block", marginBottom: "0.5rem" }}>
        Active Workspace ({accountType})
      </label>
      <select 
        value={activeAccount} 
        onChange={(e) => {
          setActiveAccount(e.target.value);
          // Simple conditional simulation for account types
          if(e.target.value === "Math Club Fund") setAccountType("SCHOOL");
          else if(e.target.value === "Weekend Stall") setAccountType("COMMERCIAL");
          else setAccountType("PERSONAL");
        }}
        style={{ width: "100%", padding: "0.5rem", borderRadius: "4px", backgroundColor: "#121212", color: "#fff", border: "1px solid #444" }}
      >
        <option value="My Personal Account">👤 My Personal Account</option>
        <option value="Weekend Stall">🏪 Weekend Stall</option>
        <option value="Math Club Fund">🏫 Math Club Fund</option>
      </select>
    </div>
  );
}
