const divBox= document.querySelector("#box");


//adding the grid layout inside the box
function GridLayout(){
    for(let i=0; i<6;i++) 
        {
            for (let j = 0; j < 6; j++) {

                let square= document.createElement("div");
                square.classList.add("square")
                // square.style.setProperty("flex","1 0 0")
                divBox.append(square);
                square.style.width= `calc(${100/6-0.8}%)`
                
            }

           
                // for(let j=0;j<=i;j++){
                //     square=document.createElement("div");
                //     square.classList.add("squareColumn")
                //     divBox.append(square);
                // }
            
        }
 }

GridLayout();
