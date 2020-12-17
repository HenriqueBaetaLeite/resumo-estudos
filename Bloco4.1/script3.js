let movie = 'Avengers'; // string literal

let score = 10.89; // number literal

let isValid = true; // boolean

let name; // variável undefined

let teste = undefined;

let color = null;

const paragraph = document.querySelector('#types');
const paragraph2 = document.querySelector('#types2');

paragraph.textContent = `typeof 'Avengers': ${typeof movie} | typeof 10.89: ${typeof score} | typeof true: ${typeof isValid} | typeof null: ${typeof color} | typeof undefined: ${teste}`;

let salary = 3500;

console.log(salary + salary);

paragraph2.textContent = `Salary is: ${salary} | Double: ${salary * 2}`;

//  O EXERCÍCIO PEDE PARA:
// Vamos fazer algumas operações simples para encontrarmos a área e
// o perímetro de um retângulo de base 5 e altura 8.
// Crie uma variável chamada base e uma variável chamada altura e
// atribua os seus respectivos valores: 5 e 8;
// Crie uma variável chamada area e atribua a ela o resultado a
// multiplicação da base pela altura. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações!
// Crie uma variável chamada perimetro e atribua a ela a soma de
// todos os lados do retângulo;

const base = 5;
const altura = 8;

const area = base * altura;

const perimetro = 2 * base + 2 * altura;

console.log('O perímetro é:', perimetro + 'cm');
console.log('A área é:', area + 'cm');
