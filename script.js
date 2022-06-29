const container = document.getElementById('container');

for (let i = 0; i < 10000; i++) {
    const box = document.createElement('div');
    box.className = 'box';
    container.appendChild(box);
    box.addEventListener('mouseover', draw);
}

function draw() {
    const color = 'blue';
    this.style.background = color;
}
  
function restart(){
    window.location.reload("Restart")
}
  
