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

function draw() {
    const color = 'blue';
    this.style.background = color;
}

function pickColor() {

}
  
function restart(){
    window.location.reload("Restart")
}
  
