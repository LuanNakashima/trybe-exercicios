let cabeçalho = document.getElementById('header-container');
cabeçalho.style.color = 'white';
cabeçalho.style.background = 'green';

let emergencia = document.getElementsByClassName('emergency-tasks');
emergencia[0].style.background = 'pink';

let emerg_filho = document.querySelectorAll('.emergency-tasks h3');
emerg_filho[0].style.background = 'purple';
emerg_filho[1].style.background = 'purple';

let non_emergencia = document.getElementsByClassName('no-emergency-tasks');
non_emergencia[0].style.background = 'yellow';

let non_emerg_filho = document.querySelectorAll('.no-emergency-tasks h3');
non_emerg_filho[0].style.background = 'black';
non_emerg_filho[1].style.background = 'black';

let pe = document.getElementById('footer-container')
pe.style.background = 'green'