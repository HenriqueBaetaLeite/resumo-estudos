// A propriedade flex-direction é aquela que define a direção dos flex items e modifica quem é o Main Axis . Por padrão essa propriedade é row (linha), com isso os elementos ficam um ao lado do outro. Os outros valores que essa propriedade possui são o row-reverse , os itens ficam em linha reversa, o column , onde os itens ficam em uma única coluna, um embaixo do outro, e o column-reverse , em que os itens também ficam um embaixo do outro, porém em ordem reversa.
// Já a propriedade flex-wrap define se os itens devem quebrar ou não a linha, sendo que por padrão esse propriedade é nowrap , ou seja, os itens não quebram a linha. Os valores que fazem com que a linha quebra são o wrap , que quebra a linha, e o wrap-reverse , que quebra a linha na direção contrária.
// Por sua vez o flex-flow é um atalho para as propriedades flex-direction e flex-wrap , o primeiro valor que recebe é o do flex-direction e o segundo o do flex-wrap .
// Vamos colocar em prática os novos conhecimentos adquiridos? Copie o código abaixo e realize os exercícios de fixação propostos.
// Copiar
// <!DOCTYPE html>
// <html lang="pt">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Flexbox - Flex Flow</title>
//     <style>
//       .box {
//         color: #9069EF;
//         background-color: rgb(243, 243, 243);
//         border: 2px solid #232525;
//         font-size: 50px;
//         height: 60px;
//         margin: 10px 5px;
//         text-align: center;
//         width: 30%;
//       }

//       .box-container {
//         background-color: #0fa36b;
//         display: flex;
//         /* ADICIONE AQUI SEUS TESTES */
//       }
//     </style>

//   </head>
//   <body>
//     <div class="box-container">
//       <div class="box">1</div>
//       <div class="box">2</div>
//       <div class="box">3</div>
//       <div class="box">4</div>
//       <div class="box">5</div>
//     </div>
//   </body>
// </html>
// Teste as possibilidades ( row , column , row-reverse e column-reverse ) para a propriedade flex-direction .
// Teste as possibilidades ( wrap e nowrap ) para a propriedade flex-wrap .
// Teste as possibilidades para a propriedade flex-flow .

//

// O justify-content alinha os flex items no container de acordo com a direção. Essa propriedade possui os valores flex-start que alinha os itens ao início do container, flex-end que alinha os itens ao final do container, center que alinha os itens ao centro do container, space-between cria um espaçamento igual entre os elementos, mantendo o primeiro grudado no início e o último no final, e space-around também cria um espaçamento entre os elementos, mas os espaçamentos do meio são duas vezes maiores que o inicial e final.
// Já a propriedade align-items alinha os flex items de acordo com o eixo transversal (cross-axis). Os valores que essa propriedade aceita são stretch , que é seu valor padrão e faz com os flex items cresçam igualmente, flex-start alinha os itens ao início, flex-end alinha os itens ao final, center alinha os itens ao centro e baseline que alinha os itens de acordo com a linha base da tipografia.
// Por fim, a propriedade align-content alinha as linhas do container em relação ao eixo transversal (cross-axis), sendo que essa propriedade só funciona caso haja mais de uma linha de flex items. As opções de alinhamento que o align-content apresenta são stretch , seu valor padrão que faz com que os flex items cresçam igualmente na vertical, flex-start , alinha todas as linhas de itens ao início, flex-end , que alinha todas as linhas de itens ao final, center que alinha todas as linhas ao centro, space-between , que cria um espaçamento igual entre as linhas, mantendo a primeira grudada no topo e a última no bottom, e space-around , que também cria um espaçamento entre as linhas, mas os espaçamentos do meio são duas vezes maiores que o top e o bottom.
// Interessante quantas possibilidades para manipular o posicionamento de elementos o flex-box nos traz, não é? Copie o código abaixo e teste algumas destas possibilidades para fixar seu conhecimento.
// Utilizando o código abaixo, teste as possibilidades ( center , flex-start , flex-end , space-around e space-between ) para a propriedade justify-content .
// Copiar
// <!DOCTYPE html>
// <html lang="pt">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Flexbox - Justify Content</title>
//     <style>
//       .box {
//         color: #9069EF;
//         background-color: rgb(243, 243, 243);
//         border: 2px solid #232525;
//         font-size: 50px;
//         height: 60px;
//         margin: 10px 5px;
//         text-align: center;
//         width: 20%;
//       }

//       .box-container {
//         background-color: #0fa36b;
//         display: flex;
//         /* ADICIONE AQUI SEUS TESTES */
//       }
//     </style>

//   </head>
//   <body>
//     <div class="box-container">
//       <div class="box">1</div>
//       <div class="box">2</div>
//       <div class="box">3</div>
//     </div>
//   </body>
// </html>
// Teste as possibilidades ( center , flex-start , flex-end , stretch e baseline ) para a propriedade align-items . Não se esqueça de copiar o código abaixo! 😉
// Copiar
// <!DOCTYPE html>
// <html lang="pt">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Flexbox - Align Items</title>
//     <style>
//       .box-one {
//         color: #9069EF;
//         background-color: rgb(243, 243, 243);
//         border: 2px solid #232525;
//         font-size: 70px;
//         height: 80px;
//         margin: 10px 5px;
//         text-align: center;
//         width: 50px;
//       }

//       .box-two {
//         color: #9069EF;
//         background-color: rgb(243, 243, 243);
//         border: 2px solid #232525;
//         font-size: 50px;
//         height: 60px;
//         margin: 10px 5px;
//         text-align: center;
//         width: 50px;
//       }

//       .box-three {
//         color: #9069EF;
//         background-color: rgb(243, 243, 243);
//         border: 2px solid #232525;
//         font-size: 30px;
//         margin: 10px 5px;
//         height: 50px;
//         text-align: center;
//         width: 50px;
//       }

//       .box-container {
//         background-color: #0fa36b;
//         display: flex;
//         /* ADICIONE AQUI SEUS TESTES */
//       }
//     </style>

//   </head>
//   <body>
//     <div class="box-container">
//       <div class="box-one">1</div>
//       <div class="box-two">2</div>
//       <div class="box-three">3</div>
//     </div>
//   </body>
// </html>
// Teste as possibilidades ( center , flex-start , flex-end , stretch , space-around e space-between ) para a propriedade align-content .
// Copiar
// <!DOCTYPE html>
// <html lang="pt">
//   <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Flexbox - Align Content</title>
//     <style>
//       .box {
//         color: #9069EF;
//         background-color: rgb(243, 243, 243);
//         border: 2px solid #232525;
//         font-size: 50px;
//         height: 60px;
//         margin: 10px 5px;
//         text-align: center;
//         width: 30%;
//       }

//       .box-container {
//         /* ADICIONE AQUI SEUS TESTES */
//         background-color: #0fa36b;
//         display: flex;
//         flex-wrap: wrap;
//         height: 600px;
//       }
//     </style>

//   </head>
//   <body>
//     <div class="box-container">
//       <div class="box">1</div>
//       <div class="box">2</div>
//       <div class="box">3</div>
//       <div class="box">4</div>
//       <div class="box">5</div>
//       <div class="box">6</div>
//       <div class="box">7</div>
//       <div class="box">8</div>
//       <div class="box">9</div>
//     </div>
//   </body>
// </html>

//

// EXERCÍCIOS

// Agora a prática
// Para os exercícios a seguir, utilize este playground para testar como as propriedades Flexbox influenciam a disposição dos elementos em um container . Existem outros playgrounds para Flexbox como este, e os links para eles estão nos Recursos adicionais .
// Como os exercícios serão feitos na própria plataforma, crie um diretório em seu repositório para o site número 1 (problema do sapo) e outro para o site número 2 (problema das torres). Salve o CSS que você criar na plataforma colocando o número do exercício como o nome do arquivo, como nos exemplos abaixo:
// Para o exercício número 15 do site número 1, o CSS deve ser salvo em exercises/6.4/1/15.css ;
// Para o exercício número 10 do site número 2, o CSS deve ser salvo em exercises/6.4/2/10.css ;
// Para o exercício número 11 do site número 2, o CSS deve ser salvo em exercises/6.4/2/11.css .
// Faça os exercícios de 14 a 24 neste site . O seu objetivo é colocar os sapos em cima de suas respectivas folhas.
// Neste segundo link , complete os exercícios de 10 a 12 . Seu objetivo aqui é posicionar as torres de defesa para que elas abatam os inimigos. Você terá de pensar qual é a melhor posição para cada torre.
// (Opcional) Para finalizar, escolha alguns exercícios antigos como, por exemplo, o portfólio ou até mesmo os projetos de HTML , CSS e JavaScript e estruture as páginas utilizando Flexbox .
// https://the-echoplex.net/flexyboxes/
