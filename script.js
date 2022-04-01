const container = document.querySelector("#container");
const gridDiv = document.createElement("div");
gridDiv.classList.add("flex-grid");
gridDiv.textContent = "y";

let createDiv = () => {
    for (i = 0; i < 256; i++) {
        container.appendChild(gridDiv.cloneNode(true));
    }
}

createDiv();

let hover = document.querySelector("#container");
hover.addEventListener("mouseover", function(event){
    event.target.style.backgroundColor = "aqua";
})