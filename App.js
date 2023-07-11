import React from "react";
import ReactDom from "react-dom/client";

const main = React.createElement(
  "h3",
  { id: "headingMain" },
  "This is Heading tag"
);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(main);
