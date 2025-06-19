import React, { useState } from "react";

// Minimal, interactive circuit breaker visualization
export default function CircuitBreakerViz() {
  const [state, setState] = useState("closed"); // closed, open, half-open
  const [failures, setFailures] = useState(0);
  const [requests, setRequests] = useState([]);

  // Simulate a request: success if closed/half-open, fail if open
  function sendRequest() {
    if (state === "open") {
      setRequests((r) => [...r, { status: "blocked" }]);
      return;
    }
    // 30% chance of failure
    const success = Math.random() > 0.3;
    setRequests((r) => [...r, { status: success ? "success" : "fail" }]);
    if (!success) {
      setFailures((f) => {
        if (f + 1 >= 3) {
          setState("open");
          setTimeout(() => setState("half-open"), 2000); // auto half-open after 2s
        }
        return f + 1;
      });
    } else {
      setFailures(0);
      if (state === "half-open") setState("closed");
    }
  }

  function reset() {
    setState("closed");
    setFailures(0);
    setRequests([]);
  }

  // Color by state
  const stateColor = {
    closed: "#4caf50",
    open: "#e53935",
    "half-open": "#fbc02d",
  };

  // Detect dark mode (simple heuristic based on background color or prefers-color-scheme)
  const isDark =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  return (
    <div
      style={{
        border: `2px solid ${stateColor[state]}`,
        borderRadius: 12,
        padding: 24,
        margin: "2rem 0 1.5rem 0",
        background: isDark ? "#23272f" : "var(--cb-bg, #f9f9f9)",
        maxWidth: 420,
        boxShadow: "0 2px 12px #0001",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
        <span
          style={{
            display: "inline-block",
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: stateColor[state],
            marginRight: 10,
          }}
        />
        <b
          style={{
            fontFamily: "Fira Mono, monospace",
            fontSize: 18,
            color: isDark ? "#fff" : "#222",
            letterSpacing: 1,
          }}
        >
          Circuit: {state.toUpperCase()}
        </b>
      </div>
      <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
        <button onClick={sendRequest} style={{ padding: "6px 16px" }}>
          Send Request
        </button>
        <button onClick={reset} style={{ padding: "6px 16px" }}>
          Reset
        </button>
      </div>
      <div
        style={{
          fontSize: 14,
          marginBottom: 8,
          color: isDark ? "#fff" : "#222",
        }}
      >
        Failures before open:{" "}
        <b style={{ color: isDark ? "#ffe082" : "#e53935" }}>{3 - failures}</b>
      </div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", minHeight: 32 }}>
        {requests.slice(-10).map((req, i) => (
          <span
            key={i}
            style={{
              display: "inline-block",
              width: 22,
              height: 22,
              borderRadius: 6,
              background:
                req.status === "success"
                  ? "#4caf50"
                  : req.status === "fail"
                  ? "#e53935"
                  : "#bdbdbd",
              border: "1.5px solid #8882",
              marginRight: 2,
              transition: "background 0.3s",
            }}
            title={req.status}
          />
        ))}
      </div>
      <div style={{ fontSize: 13, color: "#555", marginTop: 8 }}>
        <span style={{ color: "#4caf50" }}>■</span> Success &nbsp;
        <span style={{ color: "#e53935" }}>■</span> Fail &nbsp;
        <span style={{ color: "#bdbdbd" }}>■</span> Blocked
      </div>
      <div style={{ fontSize: 13, color: "#888", marginTop: 10 }}>
        <b>How it works:</b> 3 failures trip the circuit (open). After 2s, it
        goes half-open. A success closes it, a failure reopens it.
      </div>
    </div>
  );
}
