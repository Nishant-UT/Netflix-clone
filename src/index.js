import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

//Api Key 100321ffd00e2aefd133aa1f82f6470a
// Api request https://api.themoviedb.org/3/movie/550?api_key=100321ffd00e2aefd133aa1f82f6470a
// intall firebase npm install -g firebase-tools

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
  </div>
);
