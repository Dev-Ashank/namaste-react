import React from "react";
import ReactDom from "react-dom/client";

/*
React.createElement() gives as a react object
render is what convert this to html.
*/

/**
 * create siblings you can pass third element as an array
 * 
 * React.createElement("div",{id:"xyz"},[firstSibling,secondSibling])
 */
const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement("div", { id: "child1 " },
            [
                React.createElement("h1", {}, "I am from H1 tag"),
                React.createElement("h2", {}, "I am from H2 tag")
            ]
        ),
        React.createElement("div", { id: "child2 " },
            [
                React.createElement("h1", {}, "I am from H1 tag"),
                React.createElement("h2", {}, "I am from H2 tag")
            ]
        )
    ])
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(parent);