const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
fontSizeControl.addEventListener('input', scrollButton);
function scrollButton(){
    const fontSize = fontSizeControl.value;
    console.log(fontSize)
    text.style.fontSize = fontSizeControl.value + 'px';
};