export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
        fontFamily: "Arial"
      }}
    >
      <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
        Nexora SMM Panel 🚀
      </h1>

      <p
        style={{
          marginTop: "10px",
          fontSize: "18px",
          color: "#cbd5e1"
        }}
      >
        Cheapest & Fastest Social Media Marketing Services
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gap: "20px"
        }}
      >
        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "16px"
          }}
        >
          <h2>⚡ Instant Orders</h2>
          <p>Fast processing for all social media services.</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "16px"
          }}
        >
          <h2>💰 Cheapest Rates</h2>
          <p>Affordable pricing with high quality delivery.</p>
        </div>

        <div
          style={{
            background: "#1e293b",
            padding: "20px",
            borderRadius: "16px"
          }}
        >
          <h2>🔒 Secure Platform</h2>
          <p>Safe payments and reliable infrastructure.</p>
        </div>
      </div>

      <button
        style={{
          marginTop: "40px",
          background: "#3b82f6",
          border: "none",
          padding: "14px 28px",
          borderRadius: "12px",
          color: "white",
          fontSize: "18px",
          cursor: "pointer"
        }}
      >
        Get Started
      </button>
    </main>
  );
}