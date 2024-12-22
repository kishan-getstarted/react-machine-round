import React from "react";
import ReactDOM from "react-dom/client";
function App() {
    return (
        <>
          <header
            style={{
              height: "60px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // sticky: true
            }}
          >
            Header
          </header>
          <div
            style={{
              display: "flex",
              height: "100vh",
            }}
          >
            <nav
              style={{
                width: "100px",
              }}
            >
              Navigation
            </nav>
            <main
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100vw",
              }}
            >
              Main
            </main>
            <aside
              style={{
                width: "100px",
              }}
            >
              Sidebar
            </aside>
          </div>
          <footer
            style={{
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // sticky: true
            }}
          >
            Footer
          </footer>
        </>
      );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

