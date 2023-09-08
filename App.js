//const heading = React.createElement()


const ans = React.createElement("h1" , {id : "heading"} , "Hello world from react");
/*
<div id = "level-1">
  <div id = "level-2">
   <h1> this is a heading for understanding how nested tags are to be created using react <h1> 
  </div>
</div>
*/

const nested = React.createElement("div" ,{id : "heading"} ,
React.createElement( "div" ,{id : level-2} ,
React.createElement("h1" , {} , "This is heading.....")));

console.log(ans);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(ans);
