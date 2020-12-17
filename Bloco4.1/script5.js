//  SWITCH CASE

let trafficLight = 'verde';

switch (trafficLight) {
  case 'vermelho':
    console.log('Pare!');
    break;
  case 'amarelo':
    console.log('Atenção');
    break;
  case 'verde':
    console.log('Siga!');
    break;
  default:
    console.log('Cuidado!!! Semáforo com defeito');
}

const verde = document.querySelector('#verde');
const vermelho = document.querySelector('#vermelho');
const amarelo = document.querySelector('#amarelo');
const btnColor = document.querySelector('#btn-color');
const color = document.querySelector('#color');

let initialState = 'vermelho';

color.textContent = initialState;

switch (initialState) {
  case 'vermelho':
    vermelho.style.backgroundColor = 'red';
    verde.style.backgroundColor = 'lightcyan';
    amarelo.style.backgroundColor = 'lightgoldenrodyellow';
    break;
  case 'verde':
    verde.style.backgroundColor = 'green';
    amarelo.style.backgroundColor = 'lightgoldenrodyellow';
    vermelho.style.backgroundColor = 'lightcoral';
    break;
  case 'amarelo':
    verde.style.backgroundColor = 'lightcyan';
    amarelo.style.backgroundColor = 'yellow';
    vermelho.style.backgroundColor = 'lightcoral';
    break;
  default:
    verde.style.backgroundColor = 'lightcyan';
    amarelo.style.backgroundColor = 'lightgoldenrodyellow';
    vermelho.style.backgroundColor = 'lightcoral';
    const strobe = setInterval(() => {
      amarelo.classList.toggle('strobe');
    }, 500);
    color.textContent = 'Com defeito!';
}

btnColor.addEventListener('click', () => {
  switch (initialState) {
    case 'vermelho':
      vermelho.style.backgroundColor = 'lightcoral';
      verde.style.backgroundColor = 'green';
      amarelo.style.backgroundColor = 'lightgoldenrodyellow';
      initialState = 'verde';
      color.textContent = initialState;
      break;
    case 'verde':
      verde.style.backgroundColor = 'lightcyan';
      amarelo.style.backgroundColor = 'yellow';
      vermelho.style.backgroundColor = 'lightcoral';
      initialState = 'amarelo';
      color.textContent = initialState;
      break;
    case 'amarelo':
      verde.style.backgroundColor = 'lightcyan';
      amarelo.style.backgroundColor = 'lightgoldenrodyellow';
      vermelho.style.backgroundColor = 'red';
      initialState = 'vermelho';
      color.textContent = initialState;
      break;
  }
});


// Nos exercícios de hoje, você vai fazer quinze pequenos programas. Todos trabalham a lógica condicional ( if/else e switch ), operadores aritméticos ( + , - , * , / , % ) e operadores lógicos ( > , < , && , || ). Para que consiga executar seus códigos recomendamos que utilize a extensão Code Runner , você pode ver mais sobre ela no conteúdo que fizemos sobre o uso do VS Code .
// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas variáveis, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição
// Subtração
// Multiplicação
// Divisão
// Módulo
// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas variáveis com os valores que serão comparados.
// Faça um programa que retorne o maior de três números. Defina no começo do programa três variáveis com os valores que serão comparados.
// Faça um programa que, dado um valor definido numa variável, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
// Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
// Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus. Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.
// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop -> diagonals
// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
// Bonus: use somente um if .
// Escreva um programa que defina três números em variáveis no seu começo e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .
// Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto
// lucro = valorVenda - valorCustoTotal (lucro de um produto)
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS
// Salário bruto até R$ 1.556,94: alíquota de 8%
// Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
// Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
// Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
// IR
// Até R$ 1.903,98: isento de imposto de renda
// De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
// De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
// De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
// Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
// Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:
// O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,00 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45
// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?