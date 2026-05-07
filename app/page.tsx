export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #020617, #0f172a, #111827)",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 40px",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#60a5fa",
          }}
        >
          NexoraSMM 🚀
        </h1>

        <div style={{ display: "flex", gap: "24px" }}>
          <a
            href="#"
            style={{
              color: "#cbd5e1",
              textDecoration: "none",
            }}
          >
            Services
          </a>

          <a
            href="#"
            style={{
              color: "#cbd5e1",
              textDecoration: "none",
            }}
          >
            Pricing
          </a>

          <a
            href="#"
            style={{
              color: "#cbd5e1",
              textDecoration: "none",
            }}
          >
            Login
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px 80px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "10px 20px",
            borderRadius: "999px",
            background: "rgba(59,130,246,0.15)",
            color: "#93c5fd",
            marginBottom: "24px",
            border: "1px solid rgba(96,165,250,0.3)",
          }}
        >
          ⚡ #1 Cheapest SMM Panel
        </div>

        <h2
          style={{
            fontSize: "64px",
            maxWidth: "950px",
            margin: "auto",
            lineHeight: "1.1",
            fontWeight: "bold",
          }}
        >
          Grow Your Social Media Presence Instantly 🚀
        </h2>

        <p
          style={{
            marginTop: "24px",
            color: "#94a3b8",
            fontSize: "22px",
            maxWidth: "700px",
            marginInline: "auto",
          }}
        >
          Buy Instagram, TikTok, Telegram & YouTube services with lightning-fast delivery.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              background: "#2563eb",
              color: "white",
              border: "none",
              padding: "16px 34px",
              borderRadius: "14px",
              fontSize: "18px",
              cursor: "pointer",
              boxShadow: "0 0 30px rgba(37,99,235,0.5)",
            }}
          >
            Get Started
          </button>

          <button
            style={{
              background: "transparent",
              color: "white",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "16px 34px",
              borderRadius: "14px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            View Services
          </button>
        </div>
      </section>

      {/* Stats */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          padding: "20px 40px 100px",
        }}
      >
        {[
          ["1M+", "Orders Completed"],
          ["500+", "Services"],
          ["24/7", "Support"],
          ["99.9%", "Uptime"],
        ].map(([title, desc]) => (
          <div
            key={title}
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              padding: "32px",
              borderRadius: "24px",
            }}
          >
            <h3
              style={{
                fontSize: "42px",
                color: "#60a5fa",
              }}
            >
              {title}
            </h3>

            <p
              style={{
                marginTop: "10px",
                color: "#cbd5e1",
                fontSize: "18px",
              }}
            >
              {desc}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}