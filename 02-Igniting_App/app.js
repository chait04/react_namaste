import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement(
    "h1",
    {},
    "Welcome to React!!"
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);