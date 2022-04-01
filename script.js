const container = document.querySelector("#container");
const colDiv = document.createElement("div");
colDiv.classList.add("colDiv");
const btn = document.querySelector("#btn");


let createDiv = (num) => {
    for(x = 0; x < num; x++){
        container.appendChild(colDiv.cloneNode(true));
        
    }
}
createDiv(256);
changeColor(256);

function changeColor(input) {
    let hover = document.querySelectorAll(".colDiv");
    for(i = 0; i < input; i++){
        hover[i].addEventListener("mouseover", function(event){
            event.target.style.backgroundColor = "aqua";
        });
    }   
}

let useBtn = () => {
    document.querySelector("#container").innerHTML = "";
    let input = window.prompt("Enter the number of squares per side: ");
    if (input <= 100) {
        document.querySelector("#container").style.gridTemplateColumns = `repeat(${input}, auto)`;
        for(m = 0; m < (input * input); m++){
            container.appendChild(colDiv.cloneNode(true));
        }
    }
    else {
        alert('Too many boxes!')
    }
    changeColor(input * input);
}


btn.addEventListener("click", useBtn);














