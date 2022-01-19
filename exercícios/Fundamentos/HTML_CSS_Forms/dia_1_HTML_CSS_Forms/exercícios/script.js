let esc = document.querySelector('#est')
let a = ['AC','AL','AP','AM','BA','CE','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO','DF']
for (let index = 0; index < 27; index++) {
  let esta = document.createElement('option')
  esta.classList.add('estado')
  esc.appendChild(esta)
}

let b = document.querySelectorAll('.estado')
for (let index = 0; index < a.length; index++) {
 b[index].innerHTML = a[index]
}

let botn = document.getElementById('bot')
let ga = document.getElementById('nome')
let d = document.getElementById('k')
botn.addEventListener('click', function(event){
  event.preventDefault()
  d.innerHTML = ga.value
})