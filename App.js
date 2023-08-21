import React from "react";
import ReactDom from "react-dom/client";

// JSX is not html in javascript. it's alike html or xml

const Title = () => <h1 className="head" tabIndex="1" >Heading from JSX 🚀</h1>;

/**
 * React Functional Component 
 */
const HeadingComponent = () => (
    <div id="container" >
        <Title />
        {
            [...Array(5)].map((_, i) => (
                <Title key={i} />
            ))
        }
        <h1 className="heading">This is functional HeadingComponent 🚀</h1>
    </div>)


const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
