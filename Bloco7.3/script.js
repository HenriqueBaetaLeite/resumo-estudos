// NodeJS Assert
// O módulo Assert é uma ferramenta de aferição que permite testar expressões.
// Esse módulo já vem instalado com o NodeJS . Podemos entender o assert como sendo
// uma expressão booleana que será sempre true , ao menos que haja uma falha.
// Por esse motivo, o assert não dará feedback se o teste não falhar.
// Se a expressão assert é avaliada com o valor 0 ou false , o teste falhará e
// o programa será terminado. O assert possui vários métodos para testar se o
// seu código funciona como o esperado. Veremos nos exemplos a seguir alguns desses
// métodos. Esta é a forma mais simples de se escrever testes.
// Acompanhe um exemplo do uso do módulo assert abaixo. Rode as expressões
// separadamente, comentando a linha que não será executada para ver o resultado.

const assert = require('assert'); // Sintaxe para incluir o módulo assert

assert.strictEqual(50, 50); // Sem erros: 50 == 50
assert.strictEqual(50, 70); // AssertionError: 50 == 70
// Neste outro exemplo utilizamos o assert para testar o retorno esperado da
// função division :

const assert = require('assert');

function division(x, y) {
  return x / y;
}

const expected = division(9, 3);

assert.strictEqual(expected, 3, 'Nove dividido por três é igual a três');

// Os dois códigos acima utilizam o método assert.strictEqual.
// Esse método compara o primeiro e o segundo parâmetro utilizando o
// operador == . Se os valores forem diferentes, o teste falhará e será
// mostrado um erro com a mensagem que está no terceiro parâmetro, se houver
// (o terceiro parâmetro é opcional). Não deixe de provocar uma falha no teste para
// ver o resultado! Este método tem o mesmo resultado que a expressão
// assert(expected == 3, 'Nove dividido por três é igual a três') .
// A vantagem de se usar o método assert.strictEqual() neste contexto
// é deixar mais clara a intenção do teste. Entretanto, é importante reforçar que
// o assert.strictEqual faz uma comparação de valor com o operador == .
// Portanto, se você colocar o número 3 dentro de aspas o
// teste assert.strictEqual(expected, '3', 'Nove dividido por três é igual a três')
// irá passar pois o método .equal não checa o tipo de valor que estamos
// comparando - nesse caso, '3' é uma string . Assim sendo, prefira métodos
// que comparam se dois valores são estritamente iguais, isto é, valor e tipo.
// Como você verá nos próximos exemplos, o .strictEqual e o .deepStrictEqual comparam
// os parâmetros fornecidos utilizando o operador === . Experimente refazer o teste acima
// com o strictEqual e veja o que acontece quando passamos o '3' como parâmetro
// para o assert.strictEqual() ! O seu teste irá quebrar, pois o resultado esperado
// é um número igual a 3.
// Alguns outros métodos do módulo assert que nos permite escrever testes são:
// assert.strictEqual()
// assert.deepStrictEqual()
// assert.notStrictEqual()
// assert.ok()
// assert.fail()
// A lista de métodos disponíveis, juntamente com a documentação de cada um, está aqui.
// Você verá que alguns métodos são usados com mais frequência que outros.
// Caso tenha interesse, você pode ver mais exemplos de testes e quando cada
// método é utilizado aqui . É importante ter em mente que alguns métodos são
// bem similares, e se comportam da mesma forma quando o teste falha.
// A escolha de qual teste usar deve levar em consideração não apenas o resultado
// esperado, como também a clareza transmitida com a expressão utilizada no teste.

//

//

// Podemos combinar vários métodos do assert quando escrevemos nossos testes.
// Isso pode ser muito útil para ampliar a cobertura do teste em casos de falhas! Observe:

const assert = require('assert');

function add(a, b) {
  return a + b;
}

const expected = add(1, 2);

assert.ok(expected === 3, 'Um mais dois é igual a três'); // Checa se o primeiro argumento é verdadeiro
assert.strictEqual(expected, 3, 'Um mais dois é igual a três'); // Checa se o primeiro e segundo argumentos são iguais em valor e tipo (===)
assert.notStrictEqual(expected, 4, 'Um mais dois é igual a três (e não quatro!)'); // Checa se o primeiro e segundo argumentos são diferentes (!==)

// Lembre-se que a mensagem do erro aparece apenas quando o teste falha.
// Experimente alterar os parâmetros de entrada da função add e veja o resultado!
// É possível também testar estruturas como arrays e objetos:

const assert = require('assert');

const list1 = [1, 2, 3, 4, 5];
const list2 = [1, 2, 3, 4, 5];

assert.deepStrictEqual(list1, list2, 'Erro: list1 e list2 não são estritamente iguais');

const person1 = { name: 'john', age: 21 };
const person2 = { name: 'john', age: 21 };

assert.deepStrictEqual(person1, person2, 'Erro: person1 e person2 não são estritamente iguais');

const person3 = { name: 'john', age: 19 };

assert.notDeepStrictEqual(person1, person3, 'Erro: os valores dos objetos são estritamente iguais');

//

// Para que o teste falhe, experimente passar como segundo parâmetro para o último
// teste o objeto person2 . Você verá que o teste irá falhar, pois ele espera que
// os valores dos objetos passados como argumento sejam diferentes.
// Pratique um pouco, escreva funções simples (soma, concatenação de strings etc.) e
// crie testes utilizando os vários métodos disponíveis no módulo assert.
// Se precisar, consulte a tabela neste link com os métodos do assert mais utilizados!
// Testes unitários e a melhoria no código
// Um papel dos testes unitários é nos ajudar a implementar funções mais robustas.
// Veja, por exemplo, a função que realiza a divisão utilizada no modelo anterior:

function division(x, y) {
  return x / y;
}

// O que acontece se criarmos o teste abaixo?

const assert = require('assert');

// declaração da função division, definida anteriormente...

assert.strictEqual(division(10, 2), 5); // OK
assert.strictEqual(division(10, 0), 0); // 💣

// O primeiro assert.strictEqual funciona e não apresenta erro, mas
// o segundo deixa evidente uma fragilidade na implementação da função division,
// pois não poderia ser possível realizar a divisão por 0. Nesse caso,
// devemos melhorar a implementação da função division , a fim de não termos mais
// esse estado inconsistente.

const assert = require('assert');

function division(x, y) {
  if (y === 0) throw new Error('parameter y must not be 0');
  return x / y;
}

assert.strictEqual(division(10, 2), 5); // OK
assert.throws(() => {
  division(10, 0);
}, /^Error: parameter y must not be 0$/); // OK

//

// Atualizamos o teste para refletir a mudança de implementação,
// ou seja, os testes unitários também nos ajudam a identificar casos
// especiais que podem levar nossas funções a estados inválidos.

// Testando em pequenos passos
// O TDD: Test Driven Development , em tradução livre, o desenvolvimento orientado a
// testes , é uma técnica de desenvolvimento que, em certos cenários, favorece a
// produtividade e a escrita de códigos confiáveis. Essa técnica é interessante porque
// ela ajuda a criar uma mente programadora orientada a testes , ainda que nem sempre
// escrever testes antes de escrever funcionalidades seja a prática mais adequada.
// O TDD é muito importante como exercício e para determinados tipos de projetos, mas
// está longe de ser um consenso na comunidade programadora como prática fundamental
// para 100% dos casos. É importante que essa visão crítica fique bem clara.
// Tendo isso em mente hoje você vai aprender e praticar o TDD, mas o conhecimento a ser
// absorvido é "como testar bem uma aplicação, de forma eficaz e produtiva" e "como ter
// um mindset orientado a testes", e não especificamente como a metodologia funciona.
// Com muita prática e experiência, você irá desenvolver a intuição necessária para
// avaliar se o TDD é a melhor abordagem para testar a sua aplicação.
// Um exemplo interessante que o TDD pode ser bastante útil é no teste de funções puras.
// O desenvolvimento orientado a testes é um processo cíclico que pode ser
// descrito em três etapas, como ilustrado abaixo. O princípio básico do TDD é fazer
// testes pequenos.

// Destrinchando cada etapa, o TDD consiste em:
// Escrever um teste que cubra a função que você pretende implementar
// antes mesmo de executá-la. Este teste irá falhar - afinal, a sua função ainda
// não foi declarada. Você pode começar do teste mais elementar possível para esse
// cenário, como verificar se a função que você irá criar existe:

const assert = require('assert');
assert.strictEqual(typeof myFunction, 'function');

// Implementar apenas o necessário para que o teste passe. No caso do exemplo anterior,
// você só precisaria declarar a função para passar o teste.
// Refatorar o código para que ele esteja bem escrito e fácil de se entender.
// O pulo do gato nessa etapa é que você tem um teste já implementado que irá falhar
// caso você quebre algo ao refatorar o seu código.
// Repetir! Afinal de contas, o desenvolvimento orientado a testes é um ciclo.
// Volte a etapa 1 e repita esse processo até que todas as funcionalidades da sua
// função sejam implementadas.
// Além de ser útil para testar funções puras, outro exemplo prático em que
// o desenvolvimento orientado a testes pode ser útil é consertar bugs.
// Os testes ajudam a quebrar problemas complexos em partes menores que podem ser
// analisadas mais facilmente. Assim, você poderá focar em uma regra de negócio
// específica sem medo de quebrar alguma outra funcionalidade.
