const parent=document.getElementById("root");
const element=React.createElement("h1",{},"This is new Heading:");
const root=ReactDOM.createRoot(parent);
root.render(element);
const h1=React.createElement("li",{},"Shopping Cart")
// root.render([element,h1])
const item1=React.createElement("li",{},"item-1")
const item2=React.createElement("li",{},"item-2")
const list=React.createElement("ol",{},item1,item2)
root.render([element,h1,item1,item2])
// root.render([item1,h1])
// root.render([element,h1])
const App=()=>{
    return(
        <div>
            <h1>this is for the the react</h1>
        </div>
    )
}
root.render(<App/>)
