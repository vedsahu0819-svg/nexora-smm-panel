export default function ServicesPage() {
  const services = [
    {
      name: "Instagram Followers",
      price: "₹80 / 1000",
      speed: "Instant",
    },
    {
      name: "YouTube Views",
      price: "₹50 / 1000",
      speed: "Fast",
    },
    {
      name: "Telegram Members",
      price: "₹120 / 1000",
      speed: "Instant",
    },
    {
      name: "TikTok Likes",
      price: "₹70 / 1000",
      speed: "Fast",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#020617",
        color: "white",
        fontFamily: "Arial",
        padding: "40px",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          marginBottom: "10px",
        }}
      >
        Services ⚡
      </h1>

      <p
        style={{
          color: "#94a3b8",
          marginBottom: "40px",
        }}
      >
        Choose from our high-quality social media services.
      </p>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "24px",
        }}
      >
        {services.map((service) => (
          <div
            key={service.name}
            style={{
              background: "#111827",
              padding: "28px",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <h2
              style={{
                fontSize: "26px",
                marginBottom: "14px",
              }}
            >
              {service.name}
            </h2>

            <p
              style={{
                color: "#60a5fa",
                fontSize: "22px",
                marginBottom: "10px",
              }}
            >
              {service.price}
            </p>

            <p
              style={{
                color: "#cbd5e1",
                marginBottom: "20px",
              }}
            >
              Delivery: {service.speed}
            </p>

            <button
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px