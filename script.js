

var open = document.getElementById("btn");
var container =document.querySelector(".container")


let colors = ["red", "blue"," green", "yellow", "brown", "purple", "black"," #7d5fff", "#7158e2"]
let i=0;
function handleClick(){
    //////first method
// container.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]

// /////method second

 i=i< colors.length ? ++i:0;
 container.style.backgroundColor = colors[i];

////method third
//  for (let i = 0; i < colors.length; i++) {

//  container.style.backgroundColor = colors[i];
//    }

}

open.addEventListener('click', handleClick)