function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8fafc", color: "#111827", minHeight: "100vh" }}>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 48px",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #e5e7eb",
          position: "sticky",
          top: 0
        }}
      >
        <h2 style={{ margin: 0, fontSize: "24px" }}>Webcafe New AI </h2>

        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <a href="#features" style={{ textDecoration: "none", color: "#374151" }}>Features</a>
          <a href="#about" style={{ textDecoration: "none", color: "#374151" }}>About</a>
          <button
            style={{
              padding: "10px 18px",
              border: "none",
              borderRadius: "8px",
              backgroundColor: "#111827",
              color: "#ffffff",
              cursor: "pointer"
            }}
          >
            Get Started
          </button>
        </div>
      </nav>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "80px 24px 60px",
          textAlign: "center"
        }}
      >
        <p
          style={{
            display: "inline-block",
            backgroundColor: "#e0f2fe",
            color: "#0369a1",
            padding: "8px 14px",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: "bold",
            marginBottom: "24px"
          }}
        >
          AI-powered customer conversations
        </p>

        <h1
          style={{
            fontSize: "56px",
            lineHeight: "1.1",
            marginBottom: "20px",
            maxWidth: "850px",
            marginLeft: "auto",
            marginRight: "auto"
          }}
        >
          Build smarter conversations for your business with Webcafe AI
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.7",
            color: "#4b5563",
            maxWidth: "760px",
            margin: "0 auto 36px"
          }}
        >
          Webcafe AI helps businesses create faster, more helpful, and more modern customer
          experiences through AI chat, simple workflows, and clean digital interactions.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
          <button
            style={{
              padding: "14px 24px",
              border: "none",
              borderRadius: "10px",
              backgroundColor: "#111827",
              color: "#ffffff",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            Start Free
          </button>

          <button
            style={{
              padding: "14px 24px",
              border: "1px solid #d1d5db",
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              color: "#111827",
              fontSize: "16px",
              cursor: "pointer"
            }}
          >
            See How It Works
          </button>
        </div>
      </section>

      <section
        id="features"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "30px 24px 80px"
        }}
      >
        <h2 style={{ fontSize: "36px", textAlign: "center", marginBottom: "14px" }}>Why Webcafe AI?</h2>
        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            maxWidth: "700px",
            margin: "0 auto 50px",
            fontSize: "18px",
            lineHeight: "1.6"
          }}
        >
          Designed for brands that want to look modern, respond faster, and offer better digital
          experiences.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "24px"
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "28px",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)"
            }}
          >
            <h3>Faster Responses</h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
              Reduce response time and keep users engaged with instant AI-powered assistance.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "28px",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)"
            }}
          >
            <h3>Cleaner Experience</h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
              Give your users a polished and modern interaction flow that feels simple and smart.
            </p>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "28px",
              borderRadius: "16px",
              boxShadow: "0 8px 24px rgba(0,0,0,0.06)"
            }}
          >
            <h3>Easy to Launch</h3>
            <p style={{ color: "#6b7280", lineHeight: "1.6" }}>
              Start quickly with a lightweight setup that can grow with your product over time.
            </p>
          </div>
        </div>
      </section>

      <section
        id="about"
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "0 24px 80px"
        }}
      >
        <div
          style={{
            backgroundColor: "#111827",
            color: "#ffffff",
            borderRadius: "20px",
            padding: "48px",
            textAlign: "center"
          }}
        >
          <h2 style={{ fontSize: "36px", marginBottom: "16px" }}>Ready to build with Webcafe AI?</h2>
          <p
            style={{
              maxWidth: "720px",
              margin: "0 auto 28px",
              color: "#d1d5db",
              fontSize: "18px",
              lineHeight: "1.7"
            }}
          >
            Launch a smarter customer experience with a landing page and AI workflow that feels
            modern, fast, and useful.
          </p>

          <button
            style={{
              padding: "14px 24px",
              border: "none",
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              color: "#111827",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Join the Waitlist
          </button>
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid #e5e7eb",
          padding: "24px",
          textAlign: "center",
          color: "#6b7280",
          backgroundColor: "#ffffff"
        }}
      >
        © 2026 Webcafe AI. Built with React and Firebase.
      </footer>
    </div>
  )
}

export default App