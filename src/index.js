import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import AppDeferred from "./AppDeferred";
import "./styles.css";

const root1 = createRoot(document.getElementById("root1"));
root1.render(<App />);

const root2 = createRoot(document.getElementById("root2"));
root2.render(<AppDeferred />);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
