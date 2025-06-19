import React, { useState, useEffect } from "react";

function ServiceNode({ name, status }) {
  // status: 'up', 'fail', 'pending', 'ok', 'blocked'
  const color =
    status === "fail"
      ? "#e53935"
      : status === "pending"
      ? "#fbc02d"
      : status === "ok"
      ? "#4caf50"
      : status === "blocked"
      ? "#bdbdbd"
      : "#2196f3";
  return (
    <div
      style={{
        width: 60,
        height: 60,
        borderRadius: 14,
        background: color,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 22,
        boxShadow: `0 0 0 2px ${color}55`,
        border: `2.5px solid ${color}`,
        margin: "0 20px",
        transition: "background 0.3s, border 0.3s",
      }}
      title={name + (status === "fail" ? " (Down)" : "")}
    >
      {name}
    </div>
  );
}

function RequestToken({ position, status }) {
  const color =
    status === "fail" ? "#bdbdbd" : status === "ok" ? "#4caf50" : "#2196f3";
  return (
    <div
      style={{
        position: "absolute",
        left: `${position}%`,
        top: "50%",
        transform: "translateY(-50%)",
        width: 20,
        height: 20,
        borderRadius: "50%",
        background: color,
        border: `2px solid ${color}`,
        transition: "left 0.6s ease-in-out",
        zIndex: 10,
      }}
    />
  );
}

function Arrow({ color = "#888", fail = false }) {
  return (
    <div
      style={{
        width: 80,
        height: 8,
        background: fail ? "#bdbdbd" : color,
        borderRadius: 4,
        margin: "0 4px",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span
        style={{
          position: "absolute",
          right: -10,
          top: -6,
          fontSize: 18,
          color: fail ? "#bdbdbd" : color,
        }}
      >
        &rarr;
      </span>
    </div>
  );
}

export default function CircuitBreakerViz() {
  const [state, setState] = useState("closed");
  const [serviceCUp, setServiceCUp] = useState(true);
  const [animating, setAnimating] = useState(false);
  const [requestToken, setRequestToken] = useState(null);

  // Randomly fail C every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.4) {
        setServiceCUp(false);
        setTimeout(() => setServiceCUp(true), 1000);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  function sendRequest() {
    if (animating) return;
    if (state === "open") {
      // Circuit is open, request blocked
      setRequestToken({ position: 10, status: "blocked" });
      setTimeout(() => setRequestToken(null), 1000);
      return;
    }

    setAnimating(true);

    // Start request at A (position 10%)
    setRequestToken({ position: 10, status: "pending" });

    // Move to B (position 35%)
    setTimeout(() => {
      setRequestToken({ position: 35, status: "pending" });

      // Move to C (position 60%)
      setTimeout(() => {
        setRequestToken({ position: 60, status: "pending" });

        // Check if C is up or down
        setTimeout(() => {
          if (!serviceCUp) {
            // C is down, send failure back
            setRequestToken({ position: 60, status: "fail" });

            // Move failure back to B
            setTimeout(() => {
              setRequestToken({ position: 35, status: "fail" });

              // Move failure back to A
              setTimeout(() => {
                setRequestToken({ position: 10, status: "fail" });

                // Clear token
                setTimeout(() => {
                  setRequestToken(null);
                  setAnimating(false);
                }, 600);
              }, 600);
            }, 600);
          } else {
            // C is up, success response back
            setRequestToken({ position: 60, status: "ok" });

            // Move success back to B
            setTimeout(() => {
              setRequestToken({ position: 35, status: "ok" });

              // Move success back to A
              setTimeout(() => {
                setRequestToken({ position: 10, status: "ok" });

                // Clear token
                setTimeout(() => {
                  setRequestToken(null);
                  setAnimating(false);
                }, 600);
              }, 600);
            }, 600);
          }
        }, 300);
      }, 600);
    }, 600);
  }

  function reset() {
    setState("closed");
    setServiceCUp(true);
    setAnimating(false);
    setRequestToken(null);
  }

  // Color by state
  const stateColor = {
    closed: "#4caf50",
    open: "#e53935",
    "half-open": "#fbc02d",
  };

  // Detect dark mode
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
        maxWidth: 700,
        minWidth: 520,
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

      <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
        <button
          onClick={sendRequest}
          style={{ padding: "6px 16px" }}
          disabled={animating}
        >
          Send Request
        </button>
        <button onClick={reset} style={{ padding: "6px 16px" }}>
          Reset
        </button>
      </div>

      {/* Static Services */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "32px 0 16px 0",
        }}
      >
        <ServiceNode name="A" status="ok" />
        <Arrow color="#2196f3" />
        <ServiceNode name="B" status="ok" />
        <Arrow color="#2196f3" />
        <ServiceNode name="C" status={serviceCUp ? "ok" : "fail"} />
      </div>

      {/* Request Flow Animation */}
      <div
        style={{
          position: "relative",
          height: 80,
          margin: "20px 0",
          background: isDark ? "#1a1d23" : "#f0f0f0",
          borderRadius: 8,
          border: "1px solid #ddd",
        }}
      >
        {requestToken && (
          <RequestToken
            position={requestToken.position}
            status={requestToken.status}
          />
        )}

        {/* Flow indicators */}
        <div
          style={{
            position: "absolute",
            top: 10,
            left: "8%",
            fontSize: 12,
            color: "#666",
          }}
        >
          A
        </div>
        <div
          style={{
            position: "absolute",
            top: 10,
            left: "33%",
            fontSize: 12,
            color: "#666",
          }}
        >
          B
        </div>
        <div
          style={{
            position: "absolute",
            top: 10,
            left: "58%",
            fontSize: 12,
            color: "#666",
          }}
        >
          C
        </div>
      </div>

      <div style={{ fontSize: 13, color: "#888", marginTop: 10 }}>
        <b>How it works:</b> Click Send Request to see the flow from A → B → C
        and back. C randomly fails (turns red) and sends gray failure tokens
        back.
      </div>
    </div>
  );
}
