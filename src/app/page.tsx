"use client"; // We need this because we are reading live global state

import WorkspaceSelector from "../components/WorkspaceSelector";
import { useStore } from "../store/useStore";

export default function HomePage() {
  // Read the active environment from our global brain
  const currentEnvironment = useStore((state) => state.currentEnvironment);

  // Eventually, this will be replaced by a real database call
  // For now, this proves the environments are completely isolated
  const environmentData = {
    main: { balance: "₹1,250.00", label: "Personal Net Worth" },
    stall: { balance: "₹450.00", label: "Stall Revenue" },
    school: { balance: "₹8,400.00", label: "Club Treasury" }
  };

  const activeData = environmentData[currentEnvironment as keyof typeof environmentData];

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", color: "#fff", backgroundColor: "#121212", minHeight: "100vh" }}>
      
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem", paddingBottom: "1rem", borderBottom: "1px solid #333", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <img src="/logo.png" alt="Kasu Logo" style={{ height: "50px", objectFit: "contain", borderRadius: "12px" }} />
          <h1 style={{ margin: 0, fontSize: "1.5rem", background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>KASU V20</h1>
        </div>
        <WorkspaceSelector />
      </header>

      <section>
        <h2 style={{ fontSize: "0.85rem", color: "#888", textTransform: "uppercase", letterSpacing: "1.5px" }}>
          {activeData.label}
        </h2>
        
        <div style={{ marginTop: "1rem", padding: "2rem", backgroundColor: "#1e1e1e", borderRadius: "24px", border: "1px solid #2a2a2a", maxWidth: "400px", boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.5)" }}>
          <p style={{ fontSize: "3.5rem", margin: "0", fontWeight: "800", letterSpacing: "-1.5px" }}>
            {activeData.balance}
          </p>
          <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid #333" }}>
            <p style={{ color: "#555", margin: 0, fontSize: "0.9rem" }}>Viewing isolated '{currentEnvironment}' data.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
