const divBox= document.querySelector("#box");


//adding the grid layout inside the box
function GridLayout(){
    for(let i=0; i<10;i++) 
        {
            for (let j = 0; j < 10; j++) {

                let square= document.createElement("div");
                square.classList.add("square")
                // square.style.setProperty("flex","1 0 0")
                divBox.append(square);
                square.style.width= `calc(${100/10-0.398}%)` //calculates the width of the square to make them fit inside the box
                
                
            }

           
               
            
        }   
 }

let currentOpacity=0.1;
function hoverEffect(){
let squares=document.querySelectorAll(".square")
squares.forEach(square => {
    square.dataset.opacity= 0.2; //adds a starting value of each square

    square.addEventListener("mouseover", () => {
    currentOpacity= parseFloat(square.dataset.opacity)+0.3; //each square when the mouse moves adds 0.3 opacity to the current value

    if(currentOpacity>1){  
        currentOpacity=1;
    }
    square.dataset.opacity=currentOpacity; //updates the value of current so it know for next time mouse passes by a square what was the last value
    square.style.backgroundColor= `rgba(0,0,0, ${currentOpacity})`;
    
    

})})
}

GridLayout();
hoverEffect();

