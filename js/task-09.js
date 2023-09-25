function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;

}
const color = document.querySelector('.color');
const body = document.querySelector('body');
console.log(body)
const changeColorBtn = document.querySelector('.change-color');
changeColorBtn.addEventListener('click', clickBtn);
function clickBtn(){
  body.style.backgroundColor = getRandomHexColor();
  color.textContent = getRandomHexColor();
}
