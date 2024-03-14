import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";


const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));

root.render(<Applayout />);

// const reactElement = (
//   <h1> hey i am a react element</h1>
// )

// a function which returning any JSX or reactElement are called fucntional component.
// below all three are same thing
// const component1 = () => <h1> hey i am a component </h1>

// const component2 = () => {
//   return <h1> hey i am a component </h1>
// }

// const component3 = () => { // if you are using curly braces then you need to write a return statement
//   return (
//     <h1> hey i am an another component </h1> // this JSX which is equivalent to react.createElement
//   )
// }

// const component4 = () => ( if you are writting JSX in multiple line then you need parenthesis
//   <h1>
//     hey i am a component
//   </h1>
// )
