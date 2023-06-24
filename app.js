import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading = React.createElement("h1", { id: "heading" }, "This is 🦁BNS.");

//JSX => HTML-like or XML-like SYNTAX. jsx is different, react is different.
// React Element
const jsxHeading = <h1 id="headingJSX"> This is 🍵BNS. </h1>;

// React Functional Components

const Title = () => <h1 className="title">Learning React.</h1>;

// Component Composition
const HeadingComponent = () => (
    <>
    <div className="container">
        {Title() }
    <Title />
    {console.log('bns')}
    <h2>This is 0️⃣BNS.</h2>
  </div>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
