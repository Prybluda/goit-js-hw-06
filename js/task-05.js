const userName = document.querySelector('#name-input');
const userNameOutput = document.querySelector('#name-output');
userName.addEventListener('input', keyboardPrint);
function keyboardPrint(event){
    if(event.currentTarget.value === ''){
        userNameOutput.textContent = 'Anonymous';  
    } else {
        userNameOutput.textContent = event.currentTarget.value;
   
    }
}
