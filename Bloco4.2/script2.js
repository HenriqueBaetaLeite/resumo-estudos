// FOR
const pizzas = ['Calabresa', 'Portuguesa', 'Palmito', 'Marguerita'];

for (let index = 0; index < pizzas.length; index += 1) {
  console.log(pizzas[index]);
}

// Suponha que você possua uma lista com marcas de carros:

let cars = ['Saab', 'Volvo', 'BMW'];

// Anteriormente para apresentar esses valores, o código que executa essa tarefa seria:

let cars = ['Saab', 'Volvo', 'BMW'];
console.log(cars[0]); // Saab
console.log(cars[1]); // Volvo
console.log(cars[2]); // BMW

// Mas, agora que você conhece o for , você pode melhorar o código para algo do tipo:

let cars = ['Saab', 'Volvo', 'BMW'];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
// Os dois códigos geram o mesmo resultado, mas o segundo é muito mais adequado. Pense que, em vez de 3 carros, essa lista possuísse 1000. No primeiro código, você teria que escrever 1000 linhas!
// Para fixar faça o próximo exercício :

// Exercício 1
// Utilize o for para imprimir os elementos da lista groceryList com o console.log() :

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

//  EXERCÍCIOS
// Leia atentamente os enunciados e faça o que se pede! Você irá utilizar esse array para realizar os exercícios do 1 ao 7:

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
// Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado;
// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

// EXERCÍCIOS BÔNUS
// Para os próximos dois exercícios leia este artigo e tente entender o que está acontencedo no código abaixo:

for (let i = 1; i < array.length; i++) {
  for (let j = 0; j < i; j++) {
    if (array[i] < array[j]) {
      let position = array[i];

      array[i] = array[j];
      array[j] = position;
    }
  }
}

// Ordene o array numbers em ordem crescente e imprima seus valores;
// Ordene o array numbers em ordem decrescente e imprima seus valores;
// Agora você irá criar um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
