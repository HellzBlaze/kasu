import WorkspaceSelector from "../components/WorkspaceSelector";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif", color: "#fff", backgroundColor: "#121212", minHeight: "100vh" }}>
      
      {/* Header Section with Logo and Workspace Switcher */}
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem", paddingBottom: "1rem", borderBottom: "1px solid #333", flexWrap: "wrap", gap: "1rem" }}>
        
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Ensure the src name exactly matches the logo file you put in the public folder */}
          <img src="/logo.png" alt="Kasu Logo" style={{ height: "50px", objectFit: "contain" }} />
          <h1 style={{ margin: 0, fontSize: "1.5rem" }}>Kasu Next-Gen</h1>
        </div>

        {/* This imports your custom component from the components folder */}
        <WorkspaceSelector />
        
      </header>

      {/* Main Content Dashboard Area */}
      <section>
        <h2>Dashboard Overview</h2>
        <p style={{ color: "#aaa" }}>Your multi-account asset tracking pipeline is now fully operational.</p>
        
        <div style={{ marginTop: "2rem", padding: "1.5rem", backgroundColor: "#1e1e1e", borderRadius: "12px", border: "1px solid #2a2a2a", maxWidth: "400px" }}>
          <h3 style={{ margin: "0 0 0.5rem 0", color: "#888", fontSize: "1rem", fontWeight: "normal" }}>Total Balance</h3>
          <p style={{ fontSize: "3rem", margin: "0", fontWeight: "bold" }}>$0.00</p>
          <div style={{ marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid #333" }}>
            <p style={{ color: "#555", margin: 0, fontSize: "0.9rem" }}>No recent transactions to display.</p>
          </div>
        </div>
      </section>

    </main>
  );
}
