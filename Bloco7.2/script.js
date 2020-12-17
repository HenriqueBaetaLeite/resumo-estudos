// Parte I - Adicionando novas chaves (keys)
// Para começar, veja o exemplo abaixo de um objeto que contém as informações de um
// cliente de uma loja:

// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };
// Imagine um cenário em que você precisa completar as informações do cliente
// adicionando uma nova propriedade para armazenar seu sobrenome. Uma das formas já vistas
// até então é reescrever o objeto, dessa vez já com a nova propriedade lastName .

// const customer = {
//   firstName: 'Roberto',
//   lastName: 'Faria', // Propriedade adicionada.
//   age: 22,
//   job: 'Teacher',
// };
// Existem também outras formas de adicionar essa propriedade de maneira muito mais
// simples e prática, sem a necessidade de reescrever o objeto e suas propriedades.
// Veja o exemplo abaixo:

// const customer1 = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// console.log(customer1);

// customer1.lastName = 'Faria';
// console.log(customer1);

// const customer2 = {
//   firstName: 'Maria',
//   age: 23,
//   job: 'Medic',
// };

// console.log(customer2);
// customer2['lastName'] = 'Silva';
// console.log(customer2);
// No exemplo acima, ao invés de reescrever o objeto inteiro, apenas adicionamos a nova
// propriedade. Para isso, basta seguir a sintaxe abaixo:
// objeto.nomeDaPropriedade .
// objeto[variavelQueContemONomeDaPropriedade] .
// Agora, suponha que seja necessário adicionar algumas novas propriedades ao objeto,
// como a naturalidade, a data de nascimento e o estado civil.
// Essas novas propriedades serão adicionadas de acordo com o valor de algumas variáveis.

// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// let newKey = 'lastName';
// const lastName = 'Ferreira';
// customer[newKey] = lastName;
// newKey = 'fullName';
// const fullName = `${customer.firstName} ${customer.lastName}`;
// customer[newKey] = fullName;
// console.log(customer);
// No exemplo acima, você viu que há diferentes formas de associar chaves e valores a umobjeto.
// Agora, para praticar, crie uma função que receba três parâmetros, sendo eles:
// um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser o
// objeto já com a nova chave adicionada nele.

// Parte II - Object.keys
// Agora, você aprenderá sobre o método Object.keys . Ele é utilizado para listar as
// chaves de um objeto, retornando-as em um array.
// Leia com atenção esse artigo até a seção sobre Polyfill. Embora o artigo seja um
// pouco denso, ele explica muito bem o método Object.keys .
// Caso tenha dúvidas, leia também esse artigo.
// Após a leitura, veja o exemplo abaixo, que mostra como usar o Object.keys na prática.
// Nesse exemplo estão listadas as habilidades de uma pessoa desenvolvedora.

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };
// Tente criar uma função que exiba as habilidades do objeto student.
// Cada habilidade deve ser exibida no formato "Nome da habilidade,
// Nível: valor da chave referente à habilidade". Após tentar criar a função,
// veja a sugestão de resposta logo abaixo e compare com a sua solução.

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Ruim',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// const listSkills = (student) => {
//   const arrayOfSkills = Object.keys(student);
//   for(i in arrayOfSkills){
//     console.log(`${arrayOfSkills[i]}, Nível: ${student[arrayOfSkills[i]]}`);
//   }
// };

// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);
// Verifique que usamos a mesma função para mostrar os dois objetos, mesmo o segundo
// tendo uma chave a mais que o outro.

// Parte III - Object.values
// O Object.values segue a mesma lógica que o Object.keys , a diferença está em que
// ele lista os valores de cada chave.
// Leia esse artigo para entender melhor seu funcionamento.
// Veja como fica muito mais fácil obter os valores de um objeto com o uso do
// Object.values através do exemplo abaixo, em que foram implementadas,
// de formas diferentes, duas funções que retornam a mesma lista de valores.

// const student = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkill: 'Ótimo',
// };

// const listSkillsWithFor = (student) => {
//   const skills = [];
//   for(skill in student) {
//     skills.push(student[skill]);
//   }

//   return skills;
// };

// const listSkillsWithValues = (student) => Object.values(student);

// // Sem Object.values
// console.log(listSkillsWithFor(student));

// // Com Object.values
// console.log(listSkillsWithValues(student));
// Observe como a função listSkillsWithValues é bem mais simples e resolve o
// problema da listagem de valores de forma mais direta.

// Parte IV - Object.entries
// Leia esse link até a seção "Convertendo um Object em um Map". Fique mais atento à seção "Descrição", esse método funciona de forma diferente dos anteriores.
// O método Object.entries retorna um array com os pares chave / valor do objeto. Para visualizar seu retorno, veja o exemplo abaixo:

// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);
// Observe que o retorno dele é um array e que cada um de seus elementos é um outro array com apenas dois dados, a chave do objeto e o seu valor. Para ver os valores separadamente, adicione o for abaixo ao código anterior e execute-o novamente.

// for(i in pairKeyValue) {
//   console.log('--------');
//   console.log('Pais:', pairKeyValue[i][0]);
//   console.log('Capital:', pairKeyValue[i][1]);
// };

// Parte V - Object.assign
// Esse método é utilizado para copiar os valores de todas as propriedades de um ou
// mais objetos para um objeto destino. Sua estrutura é:

// // A função recebe um número qualquer de parâmetros. Todos são agregados como
// valores para adicionar ao objeto de destino!

// Object.assign(destino, objeto1);
// Object.assign(destino, objeto1, objeto2);
// Object.assign(destino, objeto1, objeto2, objeto3, objeto4);
// Como você pode ver, ele recebe pelo menos dois parâmetros, de forma que o primeiro
// sempre será o objeto de destino, e os parâmetros restantes serão os valores que
// serão adicionados a esse objeto destino.
// Veja o exemplo abaixo:

// const person = {
//   name: 'Alberto',
//   lastName: 'Gomes',
//   age: 20,
// };

// const info = {
//   age: 23,
//   job: 'engenheiro',
// };

// const family = {
//   children: ['Maria', 'João'],
//   wife: 'Ana',
// };

// Object.assign(person, info, family)
// console.log(person)

// /* Output
//   { name: 'Alberto',
//   lastName: 'Gomes',
//   age: 23,
//   job: 'engenheiro',
//   child: [ 'Maria', 'João' ],
//   wife: 'Ana'
//   } */
// Como você pode ver, o método Object.assign adicionou as propriedades de info
// e de family ao objeto person . Observe também que a chave age aparece tanto em
// person como em info e é sobrescrita pelo valor contido em info.
// Isso acontece quando há propriedades repetidas entre o objeto destino e os objetos
// passados por parâmetro, de forma que a propriedade do objeto destino sempre utilizará
// o último valor disponível.
// Agora, observe o exemplo abaixo.

// const person = {
//   name: 'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const clone = Object.assign(person, lastName);

// console.log(clone); // { name: 'Roberto', lastName: 'Silva' }
// console.log(person); // { name: 'Roberto', lastName: 'Silva' }
// Como pôde ver acima, o clone é exatamente igual ao objeto person ,
// e se você mudar qualquer propriedade nele, observará que o objeto person
// também será modificado. Isso ocorre devido ao fato de que o objeto retornado pelo
// método Object.assign é o próprio objeto destino, que foi alterado adicionando as
// novas propriedades.
// Que tal fazer um teste para confirmar isso?

// clone.name = 'Maria';

// console.log('Mudando a propriedade name através do objeto clone')
// console.log(clone); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Silva' }
// console.log('--------------');

// person.lastName = 'Ferreira';

// console.log('Mudando a propriedade lastName através do objeto person');
// console.log(clone); // Output: { name: 'Maria', lastName: 'Ferreira' }
// console.log(person); // Output: { name: 'Maria', lastName: 'Ferreira' }
// Quando se faz o que foi feito no exemplo mais acima, ao criar uma nova variável
// para armazenar o retorno do método Object.assign , cria-se apenas um outro "caminho"
// para modificar ou acessar os dados do objeto destino (nesse caso, person ). No exemplo
// abaixo, é apresentada outra forma de se copiar um objeto.

// const obj = { value1: 10, value2: 11 };
// const cloneObj = obj;
// Se você modificar o cloneObj , verá que novamente teremos o mesmo resultado anterior,
// de forma que o obj também é alterado. Ok, tendo isso em vista, como faremos para mudar
// os dados do novo objeto criado sem modificar o objeto inicial?
// Para resolver esse problema, podemos passar como primeiro parâmetro do Object.assign
// um objeto vazio {} e armazenar seu retorno em uma nova variável. Veja como fazer isso
// no exemplo abaixo.

// const person = {
//   name:'Roberto',
// };

// const lastName = {
//   lastName: 'Silva',
// };

// const newPerson = Object.assign({},person,lastName);
// newPerson.name = 'Gilberto';
// console.log(newPerson);
// console.log(person);
// Agora, apenas o objeto newPerson será modificado.

//

// EXERCÍCIOS

// Parte I
// Para os exercícios a seguir, use o seguinte código.

// const order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       margherita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       }
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       }
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     }
//   },
//   payment: {
//     total: 60,
//   },
// };

// const customerInfo = (order) => {
//   // Adicione abaixo as informações necessárias.

// }

// customerInfo(order);

// const orderModifier = (order) => {
//   // Adicione abaixo as informações necessárias.

// }

// orderModifier(order);
// Agora você vai fazer alguns exercícios de fixação.
// Complete a função customerInfo() para que seu retorno seja similar a
// "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416,
// R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função.
// Complete a função orderModifier() para que seu retorno seja similar a
// "Olá Luiz Silva, o total do seu pedido de muzzarella, calabresa e Coca-Cola
// Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.

// Parte II
// Para os exercícios a seguir, use o seguinte código.

// const lesson1 = {
//   materia: 'Matemática',
//   numeroEstudantes: 20,
//   professor: 'Maria Clara',
//   turno: 'manhã',
// };

// const lesson2 = {
//   materia: 'História',
//   numeroEstudantes: 20,
//   professor: 'Carlos',
// };

// const lesson3 = {
//   materia: 'Matemática',
//   numeroEstudantes: 10,
//   professor: 'Maria Clara',
//   turno: 'noite',
// };
// Crie uma função para adicionar o turno da manhã na lesson2.
// Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado,
// a chave que deverá ser adicionada e o valor dela.
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto
// como parâmetro.
// Crie uma função para mostrar o tamanho de um objeto.
// Crie uma função para listar os valores de um objeto. Essa função deve receber
// um objeto como parâmetro.
// Crie um objeto de nome allLessons , que deve agrupar todas as aulas através
// do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas
// chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons),
// a saída deverá ser a seguinte:

// console.log(allLessons);
// /*
// {
//   lesson1:
//    { materia: 'Matemática',
//      numeroEstudantes: 20,
//      professor: 'Maria Clara',
//      turno: 'manhã' },
//   lesson2:
//    { materia: 'História',
//      numeroEstudantes: 20,
//      professor: 'Carlos',
//      turno: 'noite' },
//   lesson3:
//    { materia: 'Matemática',
//      numeroEstudantes: 10,
//      professor: 'Maria Clara',
//      turno: 'noite' }
// };
// */
// Usando o objeto criado no exercício 5, crie uma função que retorne o número
// total de estudantes em todas as aulas.
// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
// Por exemplo:

// console.log(getValueByNumber(lesson1, 0));
// // Output: 'Matématica'
// Crie uma função que verifique se o par (chave / valor) existe na função.
// Essa função deve possuir três parâmetros, sendo eles: o objeto,
// o nome da chave e o valor da chave. Exemplo:

// console.log(verifyPair(lesson3, 'turno', 'noite'));
// // Output: true,
// console.log(verifyPair(lesson3, 'materia', 'Maria Clara'));
// // Output: false

// Bônus
// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática. Use o objeto criado no exercício 5.
// Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:

// console.log(createReport(allLessons, 'Maria Clara'))
// {
//   professor: 'Maria Clara',
//   aulas: [ 'Matemática', 'Matemática' ],
//   estudantes: 30
// }
