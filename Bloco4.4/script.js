// OBJETOS
// Então, pessoal, como vocês viram, objetos também são variáveis, porém eles podem organizar estruturas mais complexas.

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

// Agora vamos fazer alguns exercícios de fixação para consolidarmos os conhecimentos adquiridos no video anterior! 😉
// Crie um objeto player contendo as variáveis listadas abaixo.

let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };

// Acesse a chave name , lastName e age . Concatene as informações para fazer um console.log no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".
// Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];

// Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".
// Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".
// Agora veremos uma variação do laço for , que nos garante facilidade ao lidar com objetos.

// FOR IN

// Depois de conhecer o laço for/in , o código que mostra as marcas de carros presentes em um Array é:

let cars = ['Saab', 'Volvo', 'BMW'];

for (let i in cars) {
  console.log(cars[i]);
}

// Um outro exemplo é a iteração nas chaves de um objeto:

let car = {
  type: 'Fiat',
  model: '500',
  color: 'white',
};

for (let i in car) {
  console.log(i, car[i]);
}

// O resultado do código acima é:
// type Fiat
// model 500
// color white
// Faça o exercício #2 da seção JS For Loops deste link para colocar em prática o que acabou de aprender.
// https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_loops2

const pizzas = {
  sabor: 'Palmito',
  preco: 39.9,
  bordaCatupiry: true,
};

for (let key in pizzas) {
  console.log(key);
  console.log(pizzas[key]);
}

const meuObjeto = {
  name: 'Henrique',
  age: 37,
  married: true,
  children: { son1: 'João', son2: 'Ana' },
  lastName: 'Leite',
};

for (let key in meuObjeto) {
  console.log(key);
  console.log(meuObjeto[key]);
}

// FUNÇÕES

// Exemplos para funções de um carro

let statusCarro = 'desligado';
let aceleracao = 0;

function ligarDesligar() {
  if (statusCarro === ' desligado') {
    statusCarro = 'ligado';
  } else {
    statusCarro = 'desligado';
  }
  return statusCarro;
}

function acelerar(incremento) {
  aceleracao = aceleracao + incremento;
  return 'Acelerando' + aceleracao + 'm/s²';
}
