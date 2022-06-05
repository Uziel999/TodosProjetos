const seletor = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px'
document.body.style.textAlign = 'center'

function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}
seletor.onchange =

    function() {
        (seletor.value == 'escuro') ? update('black', 'White'): update('White', 'black');
    }