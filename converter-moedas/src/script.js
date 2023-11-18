var nome = prompt("Digite o seu nome: ");

var valorEmDolar = prompt("Digite o valor em dolar: ");
var cotacaoDoDolar = 4.91;
var valorEmReal = valorEmDolar * cotacaoDoDolar;
alert(
  "Opa " +
    nome +
    " " +
    valorEmDolar +
    " dólares são R$ " +
    valorEmReal.toFixed(2)
);

var valorEmReal = 30;
var cotacaoDoDogecoin = 2.66;
var valorReaisEmDogecoin = valorEmReal * cotacaoDoDogecoin;
alert("R$ 30 equivale a " + valorReaisEmDogecoin.toFixed(2) + " em Dogecoin");
