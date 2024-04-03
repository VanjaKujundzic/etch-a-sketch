const divBox= document.querySelector("#box");
const wrapper= document.querySelector(".wrapper")

//Defining the starting grid size
let gridSize=prompt("How many squares?");
while(gridSize>100){
    alert("it has to be less than 100");
    gridSize=prompt("How many squares?");
}


 //adding a reset btn
let resetBtn= document.createElement("button");
 resetBtn.textContent="Reset";
 wrapper.append(resetBtn);
 resetBtn.addEventListener("click", () => {
     gridSize=prompt("How many squares in the grid would you like?");
     if (gridSize>100){
        alert("It has to be less than 100")
        gridSize=prompt("how many squares?");
        while(gridSize>100){
            alert("it has to be less than 100");
            gridSize=prompt("How many squares?");
        }
    }
     resetGame();
     GridLayout();
     hoverEffect();
     
    console.log(gridSize);
    
 })

//adding the grid layout inside the box
function GridLayout(){
    for(let i=0; i<gridSize;i++) 
        {
            for (let j = 0; j < gridSize; j++) {

                let square= document.createElement("div");
                square.classList.add("square")
                // square.style.setProperty("flex","1 0 0")
                divBox.append(square);
                square.style.width= `calc(${100/gridSize-0.398}%)` //calculates the width of the square to make them fit inside the box  
            }
  
        }   
 }
 GridLayout();
 hoverEffect();
 
 


//creating the hover effect for the grid box that increases the opacity with each mouse hover
let currentOpacity=0.1;
function hoverEffect(){
let squares=document.querySelectorAll(".square")
squares.forEach(square => {
    square.dataset.opacity= 0.1; //adds a starting value for each square opacity

    square.addEventListener("mouseover", () => {
    currentOpacity= parseFloat(square.dataset.opacity)+0.3; //each square when the mouse moves adds 0.3 opacity to the current value
    console.log(currentOpacity);
    if(currentOpacity>1){  
        currentOpacity=1;
    }
    square.dataset.opacity=currentOpacity; //updates the value of current so it know for next time mouse passes by a square what was the last value
    square.style.backgroundColor= `rgba(0,0,0, ${currentOpacity})`;
    
    

})})
}

function resetGame(){
    
    currentOpacity= 0.0;
    let squares= document.querySelectorAll(".square")
    squares.forEach(square => {
    square.dataset.opacity=0.1;
    square.style.backgroundColor= `rgba(0,0,0, ${currentOpacity})`;
    })

    removeChildNodes(divBox);

}
function removeChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
    
}




