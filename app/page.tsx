export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
          borderBottom: "1px solid #1e293b",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
          NexoraSMM 🚀
        </h1>

        <div style={{ display: "flex", gap: "20px" }}>
          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Services
          </a>

          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Pricing
          </a>

          <a href="#" style={{ color: "white", textDecoration: "none" }}>
            Login
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          padding: "80px 40px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "56px",
            fontWeight: "bold",
            maxWidth: "900px",
            margin: "auto",
          }}
        >
          Fastest & Cheapest SMM Panel in the Market ⚡
        </h2>

        <p
          style={{
            marginTop: "20px",
            color: "#94a3b8",
            fontSize: "20px",
          }}
        >
          Buy Instagram, YouTube, Telegram & TikTok services instantly.
        </p>

        <button
          style={{
            marginTop: "35px",
            background: "#2563eb",
            border: "none",
            color: "white",
            padding: "16px 34px",
            borderRadius: "14px",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Get Started
        </button>
      </section>

      {/* Stats */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          padding: "20px 40px 80px",
        }}
      >
        {[
          ["1M+", "Orders Completed"],
          ["24/7", "Customer Support"],
          ["500+", "Services Available"],
          ["99.9%", "Uptime Guarantee"],
        ].map(([title, desc]) => (
          <div
            key={title}
            style={{
              background: "#111827",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid #1e293b",
            }}
          >
            <h3 style={{ fontSize: "36