const fontSizeControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
fontSizeControl.addEventListener('input', scrollButton);
function scrollButton(e){  
    text.style.setProperty('fontSize', e.currentTarget.value + 'px')
      text.style.fontSize = e.currentTarget.value + 'px';

};