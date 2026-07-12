"use client";
import WorkspaceSelector from "../components/WorkspaceSelector";
import { useStore } from "../store/useStore";

export default function HomePage() {
  const currentEnvironment = useStore((state) => state.currentEnvironment);

  return (
    <main>
      {/* Header */}
      <header className="flex-between" style={{ marginBottom: "25px" }}>
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <img src="/logo.png" style={{ width: "45px", height: "45px", borderRadius: "12px", objectFit: "cover" }} alt="Logo" />
          <div>
            <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 500 }}>Good Morning</div>
            <div style={{ fontSize: "1.6rem", fontWeight: 800, background: "var(--primary-grad)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              KASU
            </div>
          </div>
        </div>
        <WorkspaceSelector />
      </header>

      {/* Hero Section */}
      <div style={{ textAlign: "center", padding: "10px 0", animation: "fadeIn 0.5s ease" }}>
        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1.5px" }}>
          Total Net Worth
        </div>
        <div style={{ fontSize: "3.2rem", fontWeight: 800, color: "var(--text)", letterSpacing: "-1.5px" }}>
          <span style={{ fontSize: "1.8rem", color: "var(--text-muted)", verticalAlign: "super" }}>₹</span>
          1,959.00
        </div>
      </div>

      {/* V19 Style Card Placeholder */}
      <div className="card" style={{ marginTop: "20px" }}>
        <div className="flex-between">
          <h3 style={{ margin: 0 }}>Analytics</h3>
          <span style={{ fontSize: "0.7rem", color: "var(--text-muted)" }}>All Time</span>
        </div>
        <div style={{ height: "150px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", marginTop: "20px", border: "1px dashed var(--border)", borderRadius: "12px" }}>
          [Chart Component Will Go Here]
        </div>
      </div>
      
      {/* Activity List Placeholder */}
      <div>
        <h3 style={{ marginBottom: "15px", paddingLeft: "5px" }}>Activity</h3>
        <p style={{ textAlign: "center", color: "var(--text-muted)" }}>Data loading...</p>
      </div>
    </main>
  );
}
