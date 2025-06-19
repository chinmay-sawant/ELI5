import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="main-content">
      <main className="app-main">
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <span
            style={{
              fontSize: "2.2rem",
              display: "block",
              marginBottom: "1.2rem",
            }}
          >
            Hi 👋
          </span>
          <span
            style={{
              fontSize: "1.2rem",
              display: "block",
              marginBottom: "1.2rem",
            }}
          >
            I am Chinmay Sawant, I buy more books than I read
          </span>
          <span
            style={{
              fontSize: "1rem",
              color: "var(--primary)",
              display: "block",
              marginBottom: "2.5rem",
            }}
          >
            This website is inspired by{" "}
            <a
              href="https://samwho.dev/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--primary)" }}
            >
              samwho.dev
            </a>
          </span>
          <div
            style={{
              marginTop: "2.5rem",
              textAlign: "left",
              maxWidth: 400,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <div
              style={{
                fontWeight: 600,
                fontSize: "1.1rem",
                marginBottom: "0.7rem",
              }}
            >
              ELI5 (Explain Like I am 5)
            </div>
            <ul
              style={{
                paddingLeft: 24,
                margin: 0,
                fontSize: "1rem",
              }}
            >
              <li style={{ marginBottom: 8 }}>
                Want to Learn Go lang?{" "}
                <Link to="/golang" style={{ color: "var(--primary)" }}>
                  Go by Example
                </Link>
              </li>
              <li style={{ marginBottom: 8 }}>
                Want to learn Gin framework?{" "}
                <Link to="/gogin" style={{ color: "var(--primary)" }}>
                  Gin by Example
                </Link>
              </li>
              <li>
                Want to learn microservices?{" "}
                <Link to="/microservices" style={{ color: "var(--primary)" }}>
                  Microservices by Example
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
