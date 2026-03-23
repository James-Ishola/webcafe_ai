function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "40px", textAlign: "center" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "60px" }}>
        <h2>Webcafe AI</h2>
        <button style={{ padding: "10px 18px", cursor: "pointer" }}>Get Started</button>
      </nav>

      <main style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Build smarter conversations with Webcafe AI
        </h1>

        <p style={{ fontSize: "18px", lineHeight: "1.6", marginBottom: "30px" }}>
          A simple AI-powered experience for creating better customer interactions,
          faster responses, and a more modern web presence.
        </p>

        <button style={{ padding: "14px 24px", fontSize: "16px", cursor: "pointer" }}>
          Try Webcafe AI
        </button>
      </main>
    </div>
  )
}

export default App