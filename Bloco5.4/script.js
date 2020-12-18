// Salvando cookies nesta página

document.cookie = 'teste=HenriqueBaetaLeite';

document.cookie = 'teste2=expira em 1 semana; expires=Fri, 25 Dec 2020 12:00:00 UTC';

// Cookies são salvos no formato chave-valor . Quando o navegador faz a requisição ao servidor para acessar uma página Web, os cookies dessa página são adicionados à requisição. Dessa forma, o servidor tem acesso aos dados do usuário. Nos exemplos a seguir, você irá aprender a criar e manipular cookies . Para testá-los, é importante que o seu navegador tenha o suporte a cookie habilitado. Para visualizar os cookies de uma aplicação, abra a janela para inspecionar a página. No menu superior, clique em Application e na barra lateral esquerda, na sessão Storage, clique em Cookies.
// O Javascript permite com que a gente crie, leia e delete cookie através da propriedade document.cookie .
// Para criar um cookie, você só precisa de atribuir à propriedade document.cookie uma string contendo o nome e o valor do que se pretende armazenar:

// document.cookie = "email=isabella@email.com";
// Por definição, o cookie é deletado quando fechamos o navegador. Para que isso não aconteça, você pode adicionar uma data para expiração como no exemplo abaixo:

// document.cookie = "email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC";
// Você pode adicionar também o parâmetro path que dirá ao navegador qual caminho o cookie que você criou pertence. Por padrão, o cookie pertence à página atual.

// document.cookie = "email=isabella@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC; path=/";
// O Javascript permite com que você atribua document.cookie a uma variável. Assim, você conseguirá ler as informações que estão armazenadas. No exemplo abaixo, ao imprimirmos no console o valor de myCookie, o que será retornado é uma string contendo o o nome e o valor do cookie. Quando temos mais de um par chave-valor, a variável armazenará em uma única string os pares separados por ponto-vírgula.

// const myCookie = document.cookie;
// console.log(myCookie) // email=isabella@email.com
// E você pode também alterar o valor do cookie da mesma forma que o criamos. Basta atribuir a document.cookie a nova informação que você quer armazenar.

// document.cookie = "email=cleyton@email.com; expires=Thu, 17 Dec 2020 12:00:00 UTC";
// Para deletar o cookie, você não precisa especificar o valor que pretende deletar. Você pode deletá-lo passando uma data que já expirou:

// document.cookie = "email=; expires=Tue, 01 Dec 2020 12:00:00 UTC;"

// Local e Session Storage

//

// Exemplo de utilização:

// console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0
// localStorage.setItem("firstname", "Adam") //salva uma entrada com a key = "firstname" e value = "Adam"
// localStorage.setItem("lastname", "Smith") //salva uma entrada com a key = "lastname" e value = "Smith"
// console.log(localStorage.getItem("lastname")) // retorna o valor "Smith"
// console.log(localStorage.length) // possui duas entradas, então o retorno é o valor: 2
// localStorage.removeItem("lastname") // remove a entrada referente a key = "lastname"
// console.log(localStorage.length) // possui uma entrada, então o retorno é o valor: 1
// localStorage.clear() // limpa todas as entradas salvas em localStorage
// console.log(localStorage.length) // não possui nada salvo, então o retorno é o valor: 0
// sessionStorage - salva os dados apenas para a sessão atual. Os dados são removidos assim que a pessoa fecha a aba ( tab ) ou o browser .
// Exemplo de utilização:

// console.log(sessionStorage.length) // não possui nada salvo, então o retorno é o valor: 0
// sessionStorage.setItem("firstname", "Adam") //salva uma entrada com a key = "firstname" e value = "Adam"
// sessionStorage.setItem("lastname", "Smith") //salva uma entrada com a key = "lastname" e value = "Smith"
// console.log(sessionStorage.getItem("lastname")) // retorna o valor "Smith"
// console.log(sessionStorage.length) // possui duas entradas, então o retorno é o valor: 2
// sessionStorage.removeItem("lastname") // remove a entrada referente a key = "lastname"
// console.log(sessionStorage.length) // possui uma entrada, então o retorno é o valor: 1
// sessionStorage.clear() // limpa todas as entradas salvas em sessionStorage
// console.log(sessionStorage.length) // não possui nada salvo, então o retorno é o valor: 0
// É possível salvar outras estruturas em localStorage e sessionStorage :

// let organization = {
//   name: "trybe",
//   since: 2019
// }

// // object "storage" can be localStorage or sessionStorage

// storage.setItem("trybe", JSON.stringify(organization))
// let org = JSON.parse(storage.getItem("trybe"))
// console.log(org) // { name: "trybe", since: 2019 }

// let classes = ["2019/set", "2019/oct"]
// storage.setItem("classes", JSON.stringify(classes))
// let cls = JSON.parse(storage.getItem("classes"))
// console.log(cls) // ["2019/set", "2019/oct"]

//

// EXERCÍCIOS

// Aprofunde seus conhecimentos
// Imagine que você é a pessoa responsável por desenvolver uma página
// que servirá como um leitor de conteúdo escrito.
// Esse conteúdo escrito pode ser uma página de livro, uma reportagem de revista ou
// uma nota de jornal online. Para que você não tenha que pensar no conteúdo da página,
// utilize este link para gerar o texto para sua página.
// Até aqui, nenhuma novidade, mas essa demanda exige que você aplique
// preferências das pessoas leitoras na página para melhorar a experiência de
// leitura dessas pessoas.
// As pessoas devem ter o poder de alterar:
// Cor de fundo da tela;
// Cor do texto;
// Tamanho da fonte;
// Espaçamento entre as linhas do texto;
// Tipo da fonte ( Font family ).
// Essas preferências devem ser salvas de forma que, ao retornar à página,
// as preferências que foram previamente configuradas possam ser aplicadas na tela.
// Bônus
// As propriedades descritas acima são obrigatórias , mas você é livre para
// adicionar qualquer outra propriedade que julgar válida e que tenha como objetivo
// a melhora da experiência da pessoa que lê em sua página.
