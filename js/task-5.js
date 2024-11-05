function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('body');
const output = document.querySelector('.color');
const btn = document.querySelector('.change-color');

btn.addEventListener('click', event => {
  body.style.backgroundColor = getRandomHexColor();
  output.textContent = getRandomHexColor();
})
