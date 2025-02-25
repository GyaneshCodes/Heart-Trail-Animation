// Selecting element by querySelector
const body = document.querySelector("body");

// Adding Event Listener to listen the movement of the mouse cursor
body.addEventListener("mousemove", (event) =>{
    // Creating variable for storing the movement of mouse in X and Y axis 
    const xPos = event.offsetX;
    const yPos = event.offsetY;

    // Creating span element in JS
    const spanEl = document.createElement("span");

    // Seting the size of heart
    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";

    // Seting the size of heart randomly 
    const size = Math.random() * 150;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    // Appending/Inserting heart in body by span element because span element hold heart image
    body.appendChild(spanEl);

    // Seting after how many second the heart will disappear (in this case 3000 means -> 3 second)
    setTimeout(() => {
        spanEl.remove();
    }, 3000);
});
