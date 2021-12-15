let here = document.getElementById('elementoOndeVoceEsta');
here.parentElement.style.background = 'blue'

document.getElementById('primeiroFilhoDoFilho').innerText = 'cu rsrs';

let pai = document.querySelector('#pai')
pai.firstElementChild.style.background = 'green'

let novo = document.createElement('div')
here.appendChild(novo)

document.getElementById('pai').removeChild(primeiroFilho)