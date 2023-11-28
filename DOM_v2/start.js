let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
];

let totalBoxes = colors.length;
console.log(totalBoxes)

const boxesDiv = document.querySelector(".boxes");
let boxInitial = document.querySelector(".points");
const addBoxBtn = document.getElementById("btn");
boxInitial.textContent = totalBoxes;
console.log(boxInitial)

function createBox(color) {
    let box = document.createElement("div");
    box.classList.add("box");
    box.style.backgroundColor = color;

    box.addEventListener("click", function() {
        totalBoxes--;
        boxInitial.textContent = totalBoxes;
        this.remove();
    });

    return box;
}

// Tạo hộp ban đầu
colors.forEach(color => {
    let box = createBox(color);
    boxesDiv.appendChild(box);
});
addBoxBtn.addEventListener("click", createNewBoxes);

function createNewBoxes() {
    colors.forEach(color => {
        let newBox = createBox(color);
        boxesDiv.appendChild(newBox);
        totalBoxes+= 1;
        boxInitial.textContent = totalBoxes
        console.log(boxInitial)
        console.log(totalBoxes);

    })
}