function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = input.value;
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
  }

  input.value = '';
})

destroyBtn.addEventListener('click', destroyBoxes);

  function createBoxes(amount) {
    const elements = [];

    let size = 30;

    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.width = `${size}px`;
      div.style.height = `${size}px`;
      div.style.backgroundColor = getRandomHexColor();
      elements.push(div);

      size += 10;
    }

    boxes.append(...elements);
  }

function destroyBoxes() {
  boxes.innerHTML = '';
  }