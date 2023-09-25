function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divControls = document.querySelector('#controls');
// console.log(divControls)
const inputNumber = document.querySelector('[type="number"]');
// console.log(inputNumber)
const createBtn = document.querySelector('button[data-create]');
// console.log(createBtn)
const destroyBtn = document.querySelector('button[data-destroy]');
// console.log(destroyBtn)
const boxes = document.querySelector('#boxes')

inputNumber.addEventListener('input', inputFn);
createBtn.addEventListener('click', createFn);
destroyBtn.addEventListener('click', destroyFn);

// function inputFn(e){
//   const divCount = e.currentTarget.value;
//   console.log(divCount)
// }

// function destroyFn() {
//   inputNumber.value = '';
//   boxes.innerHTML = '';
// }

// function createBoxes(amount) {
//   let size = 30;
//   const boxesArr = [];
//   for (let i = 0; i < amount; i += 1) {
//     size += 10;
//     const div = `<div  background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px;"></div>`;
//     boxesArr.push(div);
//   }
//   div.insertAdjacentHTML('beforeend', boxesArr.join(''));
// }