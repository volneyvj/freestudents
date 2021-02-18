document.addEventListener('DOMContentLoaded', () => {

  console.log('IronGenerator JS imported successfully!');

}, false);




// Formulário 1 - "Botão quero aprender"
let mostraFormQueroAprender = false
let mostraFormQueroEnsinar = false
let mostraOpçãoOutros = false
function queroAprenderForm() {
  mostraFormQueroAprender = !mostraFormQueroAprender;
  let form = document.getElementById("formQueroAprender");

  if (mostraFormQueroAprender) {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
}
// Formulário 2 - "Botão quero ensinar"

function queroEnsinarForm(){ 
  mostraFormQueroEnsinar = !mostraFormQueroEnsinar;
  let form = document.getElementById("formQueroEnsinar");

  if (mostraFormQueroEnsinar) {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
}

function OutrosMeios(){ 
  mostraOpçãoOutros = !mostraOpçãoOutros; 
  let outros = document.getElementById("outrosMeios");
  if(mostraOpçãoOutros){ 
    form.style.display = 'block'; 
  } else { 
    form.style.display = 'none'; 
  }
}