// Parte II - template literals
// template literals é mais uma feature do ES6 que nos permite criar strings complexas de forma mais fácil. Você certamente já concatenou strings e variáveis em Javascript da seguinte forma:

const myName = 'Isabella';
console.log('Hello' + ' ' + myName + '!');
// Essa solução nada elegante é como fazíamos antes do ES6 introduzir uma nova forma de criar e manipular strings dinamicamente através de template literals . Com o template literals o exemplo acima pode ser substituído por:

const myName = 'Isabella';
console.log(`Welcome ${myName}!`);
// A sintaxe do template literals pede para usarmos o sinal de crases no início e no final da frase, e variáveis dentro de um ${...} . Você também pode adicionar uma expressão dentro das chaves, como ${a + b} . Outra novidade é poder adicionar quebras de linha com o template literals sem a necessidade de concatená-las com o operador + e \n para trocar de linha. Execute o código abaixo para ver o resultado!

// // Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`);

// // Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n');

//

// Parte III - arrow functions

const printName = function () {
  const myName = 'Lucas';
  return myName;
};

console.log(printName());
// A expressão acima está correta. Mas como você verá nos exemplos a seguir,
// é possível deixá-la ainda mais direta e léxica. Você aprenderá com alguns exemplos
// as vantagens de usarmos mais essa novidade do Javascript ES6 - arrow functions.
// Uma das aplicações para arrow functions é em funções anônimas.
// Em Javascript, é muito comum não precisarmos nomear funções, como mostrado
// no exemplo acima. Isso pode acontecer quando criamos funções que não serão
// reutilizadas, ou que serão passadas como argumento para uma outra função.
// Chamamos funções sem um nome específico de funções anônimas.

// arrow functions nada mais é do que uma forma diferente de se declarar funções escrevendo menos código. Veja abaixo como ficaria a função printName utilizando a sintaxe da arrow function :

const printName = () => {
  const myName = 'Lucas';
  return myName;
};
console.log(printName());
// Quando não há nada no corpo da função e apenas um valor é retornado, a sintaxe da arrow function nos permite simplificar ainda mais a função printName omitindo o return e as chaves:

const printName = () => 'Lucas';
console.log(printName());
// Mas lembre-se que podemos omitir os parênteses apenas em dois cenários:
// Quando não passamos nenhum parâmetro para a função, como no exemplo acima;
// Quando a função recebe apenas um argumento, como podemos ver no exemplo abaixo:

const multiplyByTwo = (number) => number * 2;
console.log(multiplyByTwo(10));
// Em funções que recebem mais de um parâmetro, os parênteses não são omitidos:

const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));

//

// EXERCÍCIOS

// Parte I
// Agora você vai fazer alguns exercícios de fixação.
// Faça as modificações necessárias na função para que o seu comportamento respeite
// o escopo no qual cada variável foi declarada.
// Modifique a estrutura da função para que ela seja uma arrow function .
// Modifique as concatenações para template literals .
// Copie o código abaixo.

//       function testingScope(escopo) {
//         if (escopo === true) {
//           var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
//           ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
//           console.log(ifScope);
//         } else {
//           var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
//           console.log(elseScope);
//         }
//         console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessárioesta linha pode ser removida.
//       }

//       testingScope(true);
// Copie o código abaixo e faça uma função que retorne o array oddsAndEvens em ordem crescente.
// Utilize template literals para que a chamada console.log(oddsAndEvens); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
// Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort().
// Spoiler: É possível realizar uma função que ordene qualquer array de números.
// Copie o código abaixo.

//       const oddsAndEvens = [13, 3, 4, 10, 7, 2];

//       // Seu código aqui.

//       console.log(oddsAndEvens);

//

//

// Parte II
// Abaixo, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que aprendeu sobre let , const , arrow functions e template literals .
// Crie uma função que receba um número e retorne seu fatorial.
// Na matemática, o fatorial de um número não negativo N , com a notação N! , é o produto de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24.
// Bônus (opcional): tente fazer o mesmo exercício de forma recursiva . Spoiler: É possível resolver com uma linha.
// Crie uma função que receba uma frase e retorne qual a maior palavra.
// Exemplo:

// longestWord("Antônio foi no banheiro e não sabemos o que aconteceu") // retorna 'aconteceu'
// Crie uma página que contenha:
// Um botão ao qual será associado um event listener ;
// Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
// Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada.
// Crie um código JavaScript com a seguinte especificação:
// Não se esqueça de usar template literals
// Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .
// Exemplo:
// String determinada: "Tryber x aqui!"
// Parâmetro: "Bebeto"
// Retorno: "Tryber Bebeto aqui!"
// Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .
// Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .
// Exemplo: "Tryber x aqui! Minhas cinco principais habilidades são:
// JavaScript;
// HTML; ... #goTrybe".
