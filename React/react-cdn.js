const parent=document.getElementById('root')
const element=React.createElement("h1",{},"This is new Heading:")
const root=ReactDom.createRoot(parent);
 root.render(element)
 const h1=React.createElement("li",{},"Shopping Cart")
  root.render([element,h1])
const item1=React.createElement("li",{},"item-1")
const item2=React.createElement("li",{},"item-2")

