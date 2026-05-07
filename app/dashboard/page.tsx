export default function DashboardPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        fontFamily: "Arial",
        padding: "30px",
      }}
    >
      <h1
        style={{
          fontSize: "42px",
          marginBottom: "10px",
        }}
      >
        Dashboard 📊
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "40px",
        }}
      >
        Welcome to NexoraSMM admin dashboard.
      </p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {[
          ["₹12,450", "Total Revenue"],
          ["1,284", "Total Orders"],
          ["352", "Active Users"],
          ["99.9%", "Server Uptime"],
        ].map(([title, desc]) => (
          <div
            key={title}
            style={{
              background: "#111827",
              padding: "30px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h2
              style={{
                fontSize: "34px",
                color: "#60a5fa",
              }}
            >
              {title}
            </h2>

            <p
              style={{
                marginTop: "10px",
                color: "#cbd5e1",
              }}
            >
              {desc}
            </p>
          </div>
        ))}
      </section>

      <section
        style={{
          marginTop: "40px",
          background: "#111827",
          padding: "30px",
          borderRadius: "22px",
          border: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <h2
          style={{
            marginBottom: "20px",
            fontSize: "28px",
          }}
        >
          Recent Orders
        </h2>

        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
          }}
        >
          <thead>
            <tr>
              <th style={{ textAlign: "left", paddingBottom: "12px" }}>
                Service
              </th>

              <th style={{ textAlign: "left", paddingBottom: "12px" }}>
                Quantity
              </th>

              <th style={{ textAlign: "left", paddingBottom: "12px" }}>
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={{ padding: "12px 0" }}>
                Instagram Followers
              </td>

              <td>1000</td>

              <td style={{ color: "#22c55e" }}>
                Completed
              </td>
            </tr>

            <tr>
              <td style={{ padding: "12px 0" }}>
                YouTube Views
              </td>

              <td>5000</td>

              <td style={{ color: "#eab308" }}>
                Processing
              </td>
            </tr>

            <tr>
              <td style={{ padding: "12px 0" }}>
                Telegram Members
              </td>

              <td>2000</td>

              <td style={{ color: "#22c55e" }}>
                Completed
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </main>
  );
}