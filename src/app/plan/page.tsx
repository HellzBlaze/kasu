"use client";
export default function PlanPage() {
  return (
    <div style={{ paddingTop: "20px" }}>
      <h2 style={{ fontSize: "1.2rem", fontWeight: 600, marginBottom: "15px" }}>Planning Dashboard</h2>
      <div className="card"><h4>Recurring Commitments</h4><p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>No active rules verified.</p></div>
      <div className="card"><h4>Budgets & Limits</h4><p style={{ color: "var(--text-muted)", fontSize: "0.85rem" }}>No active tracking constraints.</p></div>
    </div>
  );
}
