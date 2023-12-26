import React from "react";
import { createRoot } from "react-dom/client";

//  when we render React.createElement onto the DOM then it become the html element
// initially the react element is an object

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "i am react element"
);

//JSX - it is not html in JS, it is HTML or XML like syntax.
//Babel transpiled JSX into react.createElement and then render inside root
// heading and JSX_heading are same
const JSX_heading = <h1 id="heading">hey this is JSX</h1>;

// component -> everything inside react is a component
// there two types of components
// functional components (new)
// class based components (old)

// functional component -> returns a reactElement
// function which returning any JSX then it is functional component
const HeadingComponent = () => {
  return <h1> Hey i am a functional component</h1>;
};

const HeadingComponent2 = () => {
  // whenever you have to write multiplelines of JSX then use parenthesis like below.
  return (
    <div>
      <h1>Hey i am a functional component named HeadingComponent2</h1>
      <HeadingComponent />
    </div>
  );
};
const number = 1000;
const NormalFunction = function () {
  return (
    <div id="heading">
      {
        HeadingComponent2() /* Inside these curly braces we can write any piece of javascript code within JSX. This is the power of JSX*/
      }
      <HeadingComponent2 />
      <HeadingComponent></HeadingComponent>
      <h1> I am inside normal function component</h1>
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

// whenever we need to render any component then we use this syntax <component />
root.render(<NormalFunction />);
