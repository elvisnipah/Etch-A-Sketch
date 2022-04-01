const container = document.querySelector("#container");
const colDiv = document.createElement("div");
colDiv.classList.add("colDiv");
const btn = document.querySelector("#btn");

//create the initial grid
let createDiv = (num) => {
    for(x = 0; x < num; x++){
        container.appendChild(colDiv.cloneNode(true)); //create a new div to be added to the grid
    }
}
createDiv(256);
changeColor(256);

//this function allows the grid boxes to change to random RGB elements on mouse hover
function changeColor(input) {
    let hover = document.querySelectorAll(".colDiv");
    for(i = 0; i < input; i++){
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const rgb = `rgb(${r},${g},${b})`;
        hover[i].addEventListener("mouseover", function(event){
            event.target.style.backgroundColor = rgb;
        });
    }   
}

//this function changes the dimensions of the grid with the click of a button and a prompt
let useBtn = () => {
    document.querySelector("#container").innerHTML = ""; //clear the original grid
    let input = window.prompt("Enter the number of boxes per side (100 Max): ");
    if (input <= 100) {
        document.querySelector("#container").style.gridTemplateColumns = `repeat(${input}, auto)`; //change the dimensions of the grid to the number entered
        for(m = 0; m < (input * input); m++){
            container.appendChild(colDiv.cloneNode(true));
        }
    }
    else {
        alert('Too many boxes!')
    }
    changeColor(input * input); //input needs to be multiplied in order to get total number of divs to be colored.
}

//add an event listener to the button to call the useBtn() function
btn.addEventListener("click", useBtn);














