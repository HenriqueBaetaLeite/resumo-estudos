const assert = require('assert');

// assert.strictEqual(50, 50);
// assert.strictEqual(50, 70);

const division = (x, y) => {
  if (y === 0) throw new Error('parametro não pode ser 0!');
  return x / y;
};

const expected = division(9, 3);

console.log(expected);

// se der erro, retorna a msg.
// stricEqual faz a comparação === de parametro 1 com o parametro 2.
// enquanto equal apenas ==

// o primeiro teste quebra, o segundo passa.
// assert.strictEqual(expected, '3', 'Erro: nove dividido por três é igual a três...');
// assert.equal(expected, '3', 'Erro: nove dividido por três é igual a três...');

const add = (a, b) => a + b;

const expectedAdd = add(4, 3);

assert.ok(expectedAdd === 7, 'Quatro + três é igual à sete.');
assert.strictEqual(expectedAdd, 7, 'Quatro + três é igual à sete.');
assert.notStrictEqual(expectedAdd, 5, 'Quatro + três é igual à sete (e não cinco)');

//  TESTANDO COM ARRAYS

const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];

assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 no são estritamente iguais!!');

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };

assert.deepStrictEqual(person1, person2, 'Erro: person1 e person2 não são estritamente iguais');

const person3 = { name: 'john', age: 19 };

assert.notDeepStrictEqual(person1, person3, 'Erro: os valores dos objetos são estritamente iguais');

// TODOS ESTES TESTES ACIMA PASSAM, NÃO GERANDO NENHUMA MENSAGEM.

assert.strictEqual(division(10, 2), 5);

// Este teste abaixo quebra!
// assert.strictEqual(division(10, 0), 0);

// Este teste abaixo passa
assert.throws(() => {
  division(10, 0);
});

// Verificando se o tipo da função addde fato é uma função!
assert.strictEqual(typeof add, 'function');

// EXERCÍCIOS DO COURSE:

const sum = (a, b) => {
  if (typeof a === 'string' || typeof b === 'string') throw new Error('parameters must be numbers');
  return a + b;
};

assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);

// VAI QUEBRA!
// assert.strictEqual(sum(4, '5'), 9);

const removeItem = (array, item) => {
  const newArray = array.filter((el) => el !== item);
  return newArray;
};

console.log(removeItem([1, 2, 3, 4], 3));

assert.deepEqual(removeItem([1, 2, 3, 4], 3), [1, 2, 4]);

assert.notDeepEqual(removeItem([1, 2, 3, 4], 3), [1, 2, 3, 4]);

assert.deepEqual(removeItem([1, 2, 3, 4], 5), [1, 2, 3, 4]);
