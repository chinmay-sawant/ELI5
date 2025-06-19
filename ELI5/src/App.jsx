import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  // Theme state: 'light' or 'dark'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="main-content">
      <div className="theme-toggle-fixed">
        <div
          className="theme-toggle-icon"
          onClick={toggleTheme}
          title="Toggle dark/light mode"
          tabIndex={0}
          role="button"
          aria-label="Toggle theme"
        >
          {theme === "light" ? (
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07-1.41-1.41M6.34 6.34 4.93 4.93m12.02 0-1.41 1.41M6.34 17.66l-1.41 1.41" />
            </svg>
          ) : (
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" />
            </svg>
          )}
        </div>
      </div>
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
