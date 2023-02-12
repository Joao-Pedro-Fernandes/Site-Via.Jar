var continentes = document.getElementById('continentes');
continentes.addEventListener('click', clicar_continentes);
var preço;
var preçoDiaria;

function clicar_continentes(){
  cidade1 = document.getElementById('cidade1');
  cidade2 =  document.getElementById('cidade2');
  continenteText =  atualizarSelector();

  if (continenteText == "america") {
    cidade1.innerHTML = 'Buenos Aires';
    cidade2.innerHTML = 'Rio Janeiro';
  }

  
  if (continenteText == "europa") {
    cidade1.innerHTML = 'Barcelona';
    cidade2.innerHTML = 'Paris';
  }

  if (continenteText == "asia") {
    cidade1.innerHTML = 'Dubai';
    cidade2.innerHTML = 'Tokyo';
  }

  if (continenteText == "africa") {
    cidade1.innerHTML = 'Casablanca';
    cidade2.innerHTML = 'Guizé';
  }
}

function atualizarSelector(){
  let select = document.querySelector('#continentes');
  let optionValue = select.options[select.selectedIndex];

  let pais = optionValue.value;
  

  console.log(pais)
  return pais;
}

 function confirmarCidade() {
  
  let select = document.querySelector('#cidades');
  let optionValue = select.options[select.selectedIndex];
  
  var continente = atualizarSelector();
  let city = optionValue.value;


   if (continente=='america' && city == 'cidade1') {
  imagem = document.getElementById('imagemCidade');
  imagem.style.display = 'block';
  imagem.src = "./img/Buenos.jpg";

  preço = 1200;
  preçoDiaria = 200;

  divPreço = document.getElementById('preçoPassagem');
  divPreçoDiaria = document.getElementById('preços');

  divPreço.textContent = 'Preço da Passagem:  R$' + preço.toFixed(2);
  divPreçoDiaria.textContent = 'Preço da Diária:  R$' + preçoDiaria.toFixed(2);

  var cidade = document.getElementById('nomeCidade');
  cidade.textContent = 'Buenos Aires';
}

   if (continente=='america' && city == 'cidade2') {
  imagem = document.getElementById('imagemCidade');
  imagem.style.display = 'block';
  imagem.src = "./img/riodejaneiro.jpg";

  preço = 900;
  preçoDiaria = 150;

  divPreço = document.getElementById('preçoPassagem');
  divPreçoDiaria = document.getElementById('preços');

  divPreço.textContent = 'Preço da Passagem:  R$' + preço.toFixed(2);
  divPreçoDiaria.textContent = 'Preço da Diária: R$' + preçoDiaria.toFixed(2);

  var cidade = document.getElementById('nomeCidade');
  cidade.textContent = 'Rio de Janeiro';
}

   if (continente=='europa' && city == 'cidade1') {
  imagem = document.getElementById('imagemCidade');
  imagem.style.display = 'block';
  imagem.src = "./img/Barcelona.jpg";

  preço = 2000;
  preçoDiaria = 500;

  divPreço = document.getElementById('preçoPassagem');
  divPreçoDiaria = document.getElementById('preços');

  divPreço.textContent = 'Preço da Passagem:  R$' + preço.toFixed(2);
  divPreçoDiaria.textContent = 'Preço da Diária:  R$' + preçoDiaria.toFixed(2);

  var cidade = document.getElementById('nomeCidade');
  cidade.textContent = 'Barcelona';
}

   if (continente=='europa' && city == 'cidade2') {
  imagem = document.getElementById('imagemCidade');
  imagem.style.display = 'block';
  imagem.src = "./img/Paris.jpg";

  preço = 3000;
  preçoDiaria = 600;

  divPreço = document.getElementById('preçoPassagem');
  divPreçoDiaria = document.getElementById('preços');

  divPreço.textContent = 'Preço da Passagem:  ' + preço.toFixed(2) + 'R$';
  divPreçoDiaria.textContent = 'Preço da Diária: R$' + preçoDiaria.toFixed(2);

  var cidade = document.getElementById('nomeCidade');
  cidade.textContent = 'Paris';
}

   if (continente=='asia' && city == 'cidade1') {
  imagem = document.getElementById('imagemCidade');
  imagem.style.display = 'block';
  imagem.src = "./img/Dubai.jpg";

  preço = 5000;
  preçoDiaria = 900;

  divPreço = document.getElementById('preçoPassagem');
  divPreçoDiaria = document.getElementById('preços');

  divPreço.textContent = 'Preço da Passagem: R$' + preço.toFixed(2);
  divPreçoDiaria.textContent = 'Preço da Diária:  ' + preçoDiaria.toFixed(2);

  var cidade = document.getElementById('nomeCidade');
  cidade.textContent = 'Dubai';
}

   if (continente=='asia' && city == 'cidade2') {
  imagem = document.getElementById('imagemCidade');
  imagem.style.display = 'block';
  imagem.src = "./img/Tokyo.jpg";  
  preço = 4500;
  preçoDiaria = 400;

  divPreço = document.getElementById('preçoPassagem');
  divPreçoDiaria = document.getElementById('preços');

  divPreço.textContent = 'Preço da Passagem:  R$' + preço.toFixed(2) + 'R$';
  divPreçoDiaria.textContent = 'Preço da Diária:  ' + preçoDiaria.toFixed(2);

  var cidade = document.getElementById('nomeCidade');
  cidade.textContent = 'Tokyo';
}

   if (continente=='africa' && city == 'cidade1') {
  imagem = document.getElementById('imagemCidade');
  imagem.style.display = 'block';
  imagem.src = "./img/Casablanca.jpg"; 
  preço = 5000;
  preçoDiaria = 450;

  divPreço = document.getElementById('preçoPassagem');
  divPreçoDiaria = document.getElementById('preços');

  divPreço.textContent = 'Preço da Passagem: R$' + preço.toFixed(2);
  divPreçoDiaria.textContent = 'Preço da Diária: R$' + preçoDiaria.toFixed(2);

  var cidade = document.getElementById('nomeCidade');
  cidade.textContent = 'Casablanca';
}

   if (continente=='africa' && city == 'cidade2') {
  imagem = document.getElementById('imagemCidade');
  imagem.style.display = 'block';
  imagem.src = "./img/guize.png"; 
  preço = 4000;
  preçoDiaria = 350;

  divPreço = document.getElementById('preçoPassagem');
  divPreçoDiaria = document.getElementById('preços');

  divPreço.textContent = 'Preço da Passagem:  R$' + preço.toFixed(2);
  divPreçoDiaria.textContent = 'Preço da Diária:  R$' + preçoDiaria.toFixed(2);

  var cidade = document.getElementById('nomeCidade');
  cidade.textContent = 'Guizé';
}

   form = document.getElementById('form1');
   form.style.display = 'block';
   
  tamanhoForm = document.getElementById('form');
  tamanhoForm.style.height = '1390px';

  console.log(city)

    
    return city; 
}

function calcularPassagem() {

  var proprietarioPassagens = document.getElementById('proprietario');
  var emailContato = document.getElementById('emailContato');  
  var dataIda = document.getElementById('dataDeIda');
  var dataVolta = document.getElementById('datadeVolta');  
  var quantidadePassagens = document.getElementById('quantidadeDePassagens');  
  var diasHospedagem = document.getElementById('diasDeHospedagem');
  var local = document.getElementById('local');
  

  var nome = document.getElementById('nome').value;
  var email = document.getElementById('email').value;
  var dataIdaValue = document.getElementById('txData').valueAsDate;
  var dia1 = dataIdaValue.getUTCDate();
  var mes1 = dataIdaValue.getUTCMonth() + 1;
  var ano1 = dataIdaValue.getUTCFullYear();
  var dataVoltaValue = document.getElementById('txDatavolta').valueAsDate;
  var dia2 = dataVoltaValue.getUTCDate();
  var mes2 = dataVoltaValue.getUTCMonth() + 1;
  var ano2 = dataVoltaValue.getUTCFullYear();
  var quantidadePassagensValue = document.getElementById('passagens').value;
  var diasDeHospedagemValue = document.getElementById('quantidadeDias').value;
  var localValue = document.getElementById('nomeCidade').textContent;

  proprietarioPassagens.textContent = 'Propietário das passagens:  ' + nome;
  emailContato.textContent = 'Email de contato:  ' + email;
  
  dataIda.textContent = 'Data de Ida:  ' + dia1 + '/' + '' + mes1 + '/' + '' + ano1;
  dataVolta.textContent = 'Data de Volta:  ' + dia2 + '/' + '' + mes2 + '/' + '' + ano2;
  
  quantidadePassagens.textContent = 'Quantidade de passagens:  ' + quantidadePassagensValue;
  diasHospedagem.textContent = 'Dias de hospedagem:  ' + diasDeHospedagemValue;

  local.textContent = 'Local de Ida: ' + localValue;
 
   
  
  

  var total = (preço * quantidadePassagensValue) + (preçoDiaria * quantidadePassagensValue * diasDeHospedagemValue);


  

  var valorTotal = document.getElementById('valorTotal');
  valorTotal.textContent = 'Valor total:  ' + total + 'R$';
  
   passagem = document.getElementById('resultado');
   passagem.style.display = 'block';
  
  tamanhoForm = document.getElementById('form');
  tamanhoForm.style.height = '1830px';

  confirmarCompra = document.getElementById('boxConfirmarCompra');
  confirmarCompra.style.display = 'block';
}



