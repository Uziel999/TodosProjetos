const select = document.querySelector('#clima');
const para = document.querySelector('#resp');

select.addEventListener('change', setClima);

function setClima() {
    const choise = select.value;


    if (choise == 'noite') {
        para.innerHTML = 'A noite está bonita'
    } else {
        alert(`Nâo está:${choise}`)
    }
}