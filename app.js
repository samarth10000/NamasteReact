import React from "react";
import ReactDOM from "react-dom/client";

//React.createElement => at the end of the day it is a object but when we render this element on to the dom then it becomes a html element

//JSX- Babel transpiles it to React.createElement => ReactElement-js Object => HTMLElement(render)

// this is the way how you will create element in core react
// const heading = React.createElement("h1", { id: "heading" }, "Namaste React");
// console.log(heading);

//jsx - HTML like syntax it is not html
// this is the way how you can create element using jsx

const heading = (
  <h1 className="head" tabIndex="5">
    my name is samarth
  </h1>
);
// console.log(heading);

const HeadingComponent = () => (
  <div id="container">
    <h1 className="heading12">Namaste REACT Functional Component</h1>
  </div>
);

// the upper and lower code is totally same

// const HeadingComponent2 = () => <h1>Namaste to short syntax</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

// what do you if heading can be rendered like this , it will go same with the functional components no not at all functional components can not be rendered by render method like this

// root.render(HeadingComponent); // WRONG❌
root.render(<HeadingComponent />);
