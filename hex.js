const hexcolors = [0,1,2,3,4,5,6,7,8,9,
     "A", "B", "C", "D", "E", "F"];

const color = document.querySelector(".color");
const btn = document.getElementById("btn");

// event listener to change colors randomly
btn.addEventListener("click", function () {
   
    let hexc = "#";
  for(let i = 0;i < 6;i++){
    hexc += hexcolors[randomnumber()];
  }
    document.body.style.backgroundColor = hexc;
    color.textContent = hexc;

});

function randomnumber() {
    return Math.floor(Math.random() * hexcolors.length);
}
