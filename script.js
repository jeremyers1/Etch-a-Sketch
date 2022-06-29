const container = document.getElementById('container');
const colorPicker = document.getElementById('color_picker');
let colors = ["black", "white", "red", "blue", "green", "yellow"];

for (let i = 0; i < 2500; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);
    box.addEventListener('mouseover', draw);
}

for (let i = 0; i < 6; i++) {
    const colBox = document.createElement('div');
    colBox.className = 'color_box';
    colBox.style = `background-color: ${colors[i]}`;
    colorPicker.appendChild(colBox);
    colBox.addEventListener('click', pickColor);
}

let mouseDown = false;
document.onmousedown = function() {
    mouseDown = true;
}
document.onmouseup = () => mouseDown = false;

let color = 'white';
function pickColor() {
    color = this.style.backgroundColor;
}

function draw() {
    if (mouseDown) {
        this.style.background = color;
    }
}


  
function restart(){
    window.location.reload("Restart")
}
  
