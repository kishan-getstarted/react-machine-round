import React from "react";
import ReactDOM from "react-dom/client";
import Chapter1 from "./components/Chapter1";
import Chapter2 from "./components/Chapter2";
import ToDo from "./components/ToDo";
import Accordion from "./components/Accordian";

function App() {
    return (
        <>
          {/* <Chapter1 /> */}
          {/* <Chapter2 /> */}
          {/* <ToDo /> */}
          <Accordion />
        </>
      );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

