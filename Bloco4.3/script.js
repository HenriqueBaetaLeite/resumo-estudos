// Utilizando o array abaixo, percorra-o somando todos os valores.
// Caso o valor final seja maior que 15, imprima-o.
// Caso seja igual ou menor que 15, imprima a mensagem: "valor menor que 16":

let fruits = [3, 4, 10, 1, 12];

// Agora vamos criar o algoritmo, e pra isso faremos uso dos baby steps . Eles nos estimulam a dividir grandes e complexos problemas em pequenos e simples.
// Adicionar o array;
// Criar uma variável com valor 0;
// Criar um loop que percorre o array;
// Incrementar a variável com o valor correspondente a cada loop;
// Criar um if com a condição da variável ser maior que 15;
// Caso a variável obedeça a condição;
// Imprimir a variável
// Caso não obedeça a condição;
// Imprimir a mensagem "valor menor que 16";
// No momento já interpretamos o problema e já criamos um algoritmo, baseado nos baby steps , para ele. Como última etapa, vamos codificá-lo, seguindo nosso algoritmo:
// Adicionar o array;

//exercise.js
let fruits = [3, 4, 10, 1, 12];
// Criar uma variável com valor 0;

//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;
// Criar um loop que percorre o array;

//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let i = 0; i < fruits.length; i += 1) {}
// Incrementar a variável com o valor correspondente a cada loop;

//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let i = 0; i < fruits.length; i += 1) {
  sum += fruits[i];
}

// Criar um if com a condição da váriavel ser maior que 15;

//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let i = 0; i < fruits.length; i += 1) {
  sum += fruits[i];
}

if (sum > 15) {
} else {
}
// Caso a varíavel obedeça a condição: Imprimir a varíavel;

//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let i = 0; i < fruits.length; i += 1) {
  sum += fruits[i];
}

if (sum > 15) {
  console.log(sum);
} else {
}

// Caso não obedeça a condição: Imprimir a mensagem “valor menor que 16”;

//exercise.js
let fruits = [3, 4, 10, 1, 12];
let sum = 0;

for (let i = 0; i < fruits.length; i += 1) {
  sum += fruits[i];
}

if (sum > 15) {
  console.log(sum);
} else {
  console.log('valor menor que 16');
}

// Com o tempo e repetição, muitas dessas etapas se tornam automáticas. Porém, é extremamente útil sabermos construir um algoritmo sem codificá-lo. Por isso, até o momento da aula ao vivo, volte aos exercícios do dia anterior, 4.2, e crie um algoritmo para cada.
// Após escrever cada algoritmo, responda novamente as seguintes perguntas:
// Eu resolvi o problema?
// Havia outras maneiras de resolver o problema?
// A maneira que eu escolhi foi a mais eficiente possível?
// Seria possível inverter ou retirar algum passo?
// Se eu fosse um computador, conseguiria entender todas as intruções?
// Lembre-se sempre: se você travar em algum exercício,
// recomece seu raciocínio com baby steps!
// Certamente você será capaz de dividir algum passo em outros passos menores.
// Isso ajudará muito na hora de resolver problemas.
