import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => (
  <h1 className="head" tabIndex="5">
    my name is samarth
  </h1>
);

// what is component composition
// Ans - to use a component inside a another component
const HeadingComponent = () => (
  <div id="container">
    <Title />
    <ThreeDivs />
    {ThreeDivs()}
    <ThreeDivs></ThreeDivs>
    <h1 className="heading12">Namaste REACT Functional Component</h1>
  </div>
);

// Extra Notes

// ✅ When this works:

// The component is a pure function and has no hooks.

// ⚠️ When this is NOT recommended:

// If the component uses Hooks like useState, useEffect, etc.

// React will not treat it as a component — it won't manage its lifecycle properly.

const ThreeDivs = () => {
  return (
    <>
      <div id="fillthem">
        <div>Hello 1</div>
        <br />
        <div>Hello 2</div>
        <br />
        <div>Hello 3</div>
        <br />
        <div>Hello 4</div>
        <br />
      </div>
    </>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <HeadingComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
