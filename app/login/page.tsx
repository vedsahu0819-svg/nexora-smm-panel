export default function LoginPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(to bottom right, #020617, #0f172a, #111827)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(12px)",
          padding: "40px",
          borderRadius: "24px",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Welcome Back 👋
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "30px",
          }}
        >
          Login to NexoraSMM
        </p>

        <input
          placeholder="Email"
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "16px",
            borderRadius: "12px",
            border: "1px solid #334155",
            background: "#0f172a",
            color: "white",
            fontSize: "16px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
            borderRadius: "12px",
            border: "1px solid #334155",
            background: "#0f172a",
            color: "white",
            fontSize: "16px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "14px",
            background: "#2563eb",
            border: "none",
            borderRadius: "12px",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
            boxShadow: "0 0 20px rgba(37,99,235,0.5)",
          }}
        >
          Login
        </button>
      </div>
    </main>
  );
}