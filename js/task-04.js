let counterValue = 0;
const curentValue = document.querySelector('#value');
console.log(curentValue)
const clickMinus = document.querySelector('button[data-action="decrement"]');
console.log(clickMinus)
const clickPlus = document.querySelector('button[data-action="increment"]');
console.log(clickPlus)
clickMinus.addEventListener('click', pushMinus);
function pushMinus(event){
    counterValue -= 1;
    curentValue.textContent = counterValue;
};
clickPlus.addEventListener('click', pushPlus);
function pushPlus(event){
    counterValue += 1;
    curentValue.textContent = counterValue;
};
