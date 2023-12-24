
{/* 
<div id="parent">
    <div id="child1">
        <h1>Hey i am an H1 tag</h1>
        <h2>Hey i am an H2 tag</h2>
    </div>
    <div id="child2">
        <h1>Hey i am an H1 tag</h1>
        <h2>Hey i am an H2 tag</h2>
    </div>
</div> 
If we want to create this html document then how can we create it through React.createElement
*/}


/// React.createElement returns me the javascript object 
const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "hello world from react");


// this how you can create the object using React.createElement(), which will render to above html
const parent = React.createElement("div", {id: "parent"}, 
                [React.createElement("div", {id: "child1"}, 
                    [React.createElement("h1", {}, "Hey i am an H1 tag"), 
                     React.createElement("h2", {}, "Hey i am an H2 tag")]), 

                React.createElement("div", {id: "child2"}, 
                    [React.createElement("h1", {}, "Hey i am an H1 tag"), 
                     React.createElement("h2", {}, "Hey i am an H2 tag")])
                ])

console.log(parent); // object 

// react needs a root where it renders all stuff
// root is just a html element
/// everything will render inside in this root in react
/// react is only getting applied to this root element 
/// apart from this root element in your body everything working without react. 
const root = ReactDOM.createRoot(document.getElementById("root")); 

/// this render method is taking heading object and convert this object into html
/// and put everything onto the DOM.
// anything already present inside root element will be replaced 
//              by the object passed inside root.render()
root.render(parent); 