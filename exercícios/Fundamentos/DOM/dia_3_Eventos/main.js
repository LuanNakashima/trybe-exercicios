function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let dia = document.getElementById('days');
for (let index = 0; index < dezDaysList.length; index++) {
  let af = dezDaysList[index]
  var diad = document.createElement('li')
  diad.innerText = af
  diad.classList.add('day')
  if (af === 24 || af === 25 || af === 31) {
    diad.classList.add('holiday')
  } else if (af === 4 || af === 11 || af === 18 || af === 25) {
    diad.classList.add('fryday')
  }
  dia.appendChild(diad)
}


function botao(Feriados) {
  let botp = document.querySelector('.buttons-container')
  var areabot = document.createElement('button')
  let botaoID = 'btn-holiday'

  areabot.innerHTML = Feriados
  areabot.id = botaoID
  botp.appendChild(areabot)
}

botao('Feriados')

function botaoFeriado(params) {
  let botaoF = document.querySelector('#btn-holiday')
  let todosF = document.querySelectorAll('.holiday')
  let corFundo = 'rgb(238,238,238)'
  let corNova = 'blue'

  botaoF.addEventListener('click', function() {
    for (let index = 0; index < todosF.length; index++) {
      if (todosF[index].style.backgroundColor === corNova) {
        todosF[index].style.backgroundColor = corFundo
      } else{
        todosF[index].style.backgroundColor = corNova
      }
    }
  })
}


botaoFeriado()

function botaoSexta() {
  let cont = document.querySelector('.buttons-container')
  var botaoSo = document.createElement('button')
  var botaoS = document.querySelector('#btn-friday')
  botaoSo.id = 'btn-friday'
  botaoSo.innerHTML = 'Sexta-feira'
  cont.appendChild(botaoSo)
}


// function clicar() {
//   let hm = document.querySelector('#btn-friday')
//   var sxt = document.getElementsByClassName('friday')
//   let texto = 'sexta-feira poura'

//   hm.addEventListener('click', clico())

//   function clico(params) {
//     for (let index = 0; index < sxt.length; index++) {
      
//     }
//   }
// }



botaoSexta()
