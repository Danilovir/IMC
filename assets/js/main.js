//capiturar evento de submit de formulario
const form = document.querySelector('#formulario');


//parar o envio do usuario a gente utiliza um evento
form.addEventListener('submit', function(e){
e.preventDefault();
console.log('Evento Cancelado!!');
setResultado('olá Danilo');
});

function setResultado(msg) {
const resultado = document.querySelector('#resultado');
resultado.innerHTML = '';

//criar um elemeto em JAvaScript
const p = document.createElement('p');
p.classList.add('paragrafo-resultado');
p.innerHTML = 'Qualquer coisa';
resultado.appendChild(p);

}