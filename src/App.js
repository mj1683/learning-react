import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />{" "}
      {/* This Outlet will get replaced by Element according to the route */}
    </div>
  );
};

// this configuration telling what will get load on which path
// -> we will have to provide this configuration to render, RouterProvider is use for it.
const myRouts = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/about",
        element: <About />,
      },
      { path: "/contact", element: <Contact /> },
      {path: "/restaurants/:resId", element: <RestaurantMenu />}
    ],
    errorElement: <Error />,
  },
]);

const root = createRoot(document.getElementById("root"));

// RouterProvider is use to provide configuration to my render method
root.render(<RouterProvider router={myRouts} />);

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
