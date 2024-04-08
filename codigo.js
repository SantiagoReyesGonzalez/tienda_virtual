const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const boton = document.getElementById('btnCalcular');
const result = document.getElementById('pResult');
const form = document.getElementById('form');


form.addEventListener('submit', btnOnClick);

function btnOnClick(event) {
    total = Number(input1.value) + Number(input2.value);
    let nuevoResultado = document.createElement('p')
    nuevoResultado.innerText = total;
    result.append(nuevoResultado)
    event.preventDefault();
}

