const refs = {
    input: document.querySelector('input[type="number"]'),
    createBtn: document.querySelector('button[data-create]'),
    destroyBtn: document.querySelector('button[data-destroy]'),
    boxes: document.querySelector('#boxes'),
};

refs.createBtn.addEventListener('click', () => {
    const amount = refs.input.value;

    if (amount < 1 || amount > 100) {
        alert('Number must be between 1 and 100');
        return;
    }

    createBoxes(amount);
    refs.input.value = '';
});

refs.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    const basicSize = 30;
    const boxes = [];

    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        div.style.width = `${basicSize + i * 10}px`;
        div.style.height = `${basicSize + i * 10}px`;
        div.style.backgroundColor = getRandomHexColor();
        boxes.push(div);
    }
    refs.boxes.append(...boxes);
}

function destroyBoxes() {
    refs.boxes.innerHTML = '';
}

function getRandomHexColor() {}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
