import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App"
import CardA from "./components/card-class/CardA"

const app = document.getElementById("app")
const main = ReactDOM.createRoot(app)

// display page
main.render(
  <div>
    <h1>Hello XYZ</h1>
    <App/>
    <CardA/>
  </div>
  

)