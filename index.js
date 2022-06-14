// Array having names of colors
const colors = ["red","orange","yellow","grey"];

const color1 = document.querySelector(".color");
const btn = document.getElementById("btn");


// Event listener for button to change colors randomly
btn.addEventListener("click",function (){
    const randomnum = randomnumber();
    document.body.style.backgroundColor = colors[randomnum];
    color1.textContent = colors[randomnum];
});

// random number to generate this indexes of array randomly

function randomnumber(){
    return Math.floor(Math.random()*colors.length);
}


