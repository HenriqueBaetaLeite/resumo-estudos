TURMA 07

e cadastro do Facebook!
Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv rocket

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

Instruções para entregar seu projeto:
spiral_notepadANTES DE COMEÇAR A DESENVOLVER:
Clone o repositório
git clone https://github.com/tryber/sd-0x-block6-project-facebook-signup.git.
Entre na pasta do repositório que você acabou de clonar:
cd sd-0x-block6-project-facebook-signup
Crie uma branch a partir da branch master
Verifique que você está na branch master
Exemplo: git branch
Se não estiver, mude para a branch master
Exemplo: git checkout master
Agora, crie uma branch onde você vai guardar os commits do seu projeto
Você deve criar uma branch no seguinte formato: nome-de-usuario-nome-do-projeto
Exemplo: git checkout -b joaozinho-facebook-project
Crie na raiz do projeto os arquivos que você precisará desenvolver:
Verifique que você está na raiz do projeto
Exemplo: pwd -> o retorno vai ser algo tipo /Users/joaozinho/code/sd-0x-block6-project-facebook-signup
Crie os arquivos index.html, style.css e script.js
Exemplo: touch index.html style.css script.js
Adicione as mudanças ao stage do Git e faça um commit
Verifique que as mudanças ainda não estão no stage
Exemplo: git status (devem aparecer listados os novos arquivos em vermelho)
Adicione o novo arquivo ao stage do Git
Exemplo:
git add . (adicionando todas as mudanças - que estavam em vermelho - ao stage do Git)
git status (devem aparecer listados os arquivos em verde)
Faça o commit inicial
Exemplo:
git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:' (fazendo o primeiro commit)
git status (deve aparecer uma mensagem tipo nothing to commit )
Adicione a sua branch com o novo commit ao repositório remoto
Usando o exemplo anterior: git push -u origin joaozinho-facebook-project
Crie um novo Pull Request (PR)
Vá até a página de Pull Requests do repositório no GitHub
Clique no botão verde "New pull request"
Clique na caixa de seleção "Compare" e escolha a sua branch com atenção
Clique no botão verde "Create pull request"
Adicione uma descrição para o Pull Request, um título claro que o identifique, e clique no botão verde "Create pull request"
Não se preocupe em preencher mais nada por enquanto!
Volte até a página de Pull Requests do repositório e confira que o seu Pull Request está criado
Entregáveis
Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Este Pull Request deverá conter os arquivos index.html, style.css e script.js, que conterão seu código HTML, CSS e JavaScript, respectivamente.

warning É importante que seus arquivos tenham exatamente estes nomes! warning
Você pode adicionar outros arquivos se julgar necessário. Qualquer dúvida, procure a monitoria.

Lembre-se que você pode consultar nosso conteúdo sobre Git & GitHub sempre que precisar!

Requisitos do projeto
bulbO projeto deve ser o mais parecido possível com a página inicial do Facebook. Respeitando os requisitos, tente fazer uma cópia perfeita!
warning Lembre-se que o seu projeto só será avaliado se estiver passando pelos checks do CodeClimate.

Todos os requisitos tem como base a página do Facebook. Use a imagem do site, além de acessar a página de cadastro/login. Tente ser o mais fiel possível.

Use a inspeção de código para verificar a estrutura da página de cadastro/login do Facebook.

Você irá desenvolver este projeto em dupla e é fundamental que siga as instruções do repositório.

Página Facebook

warning Leia-os atentamente e siga à risca o que for pedido. Em particular, atente-se para os nomes de ids que alguns elementos de seu projeto devem possuir. warning
O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

eyesObservações importantes:
Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução de tela de 1366 x 768 (1366 pixels de largura por 768 pixels de altura).

warning Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação deste plugin do Chrome para facilitar a configuração da resolução. warning
Atente-se para o tamanho das imagens que você utilizará neste projeto. Não utilize imagens com um tamanho maior que 500Kb.

warning Utilize uma ferramenta como esta para redimensionar as imagens. warning
Caso a avaliação falhe com alguma mensagem de erro parecida com [409:0326/130838.878602:FATAL:memory.cc(22)] Out of memory. size=4194304, provavelmente as imagens que você está utilizando estão muito grandes. Tente redimensiona-las para um tamanho menor.

Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os detalhes da execução do avaliador.

Na página do seu Pull Request, acima do "botão de merge", procure por "Evaluator job" e clique no link "Details";

Na página que se abrirá, procure pela linha "Cypress evaluator step" e clique nela;

Analise os resultados a partir da mensagem "(Run Starting)";

Caso tenha dúvidas, consulte este vídeo ou procure a monitoria.

Você tem liberdade para adicionar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, desde que tais comportamentos adicionais não conflitem com os requisitos propostos.

Em outras palavras, você pode fazer mais do que for pedido, mas nunca menos.
Contudo, tenha em mente que nada além do que for pedido nos requisitos será avaliado. Esta é uma oportunidade de você exercitar sua criatividade e experimentar com os conhecimentos adquiridos.

Requisitos Obrigatórios:
Caso você faça o download de bibliotecas externas, utilize o diretório libs (a partir da raiz do projeto) para colocar os arquivos (_.css, _.js, etc...) baixados.

1 - Crie uma barra azul na parte superior da página com a classe top-bar
Pontos importantes:

Esta barra deve possuir a classe top-bar
A classe top-bar deve determinar que o elemento é um flex container
A classe top-bar deve possuir a propriedade background-color: rgb(66, 103, 178)
2 - A barra superior deve conter o logotipo do Facebook no canto esquerdo com a classe facebook-logo
Pontos importantes:

O logotipo deve estar alinhado a esquerda dentro da barra azul
Deve existir um elemento img com a classe facebook-logo
O atributo src do logotipo deve apontar para imgs/facebook-logo.png
3 - A barra superior deve conter um formulário de autenticação no canto direito
Pontos importantes:

O formulário deve estar alinhado a direita dentro da barra azul
Existe formulário possui uma classe chamada facebook-login
O formulário deve ser um flex container
4 - Crie uma classe no CSS chamada form-group
Pontos importantes:

Essa classe deve possuir a propriedade diplay: flex
Alinhe o eixo principal dessa classe para ser o eixo vertical
5 - Adicione um subcontainer com a classe form-group para agrupar o rótulo e campo "E-mail ou telefone" dentro do formulário criado na etapa 3
Pontos importantes:

Deve haver um container utilizando a classe form-group criada no passo anterior
Dentro do container form-group criado, deve haver um rótulo com o id user-email-phone-label e o texto "Email ou telefone"
Dentro do container form-group criado, abaixo do rótulo deve haver campo de entrada de texto para receber o email ou o telefone do usuário com o id user-email-phone'
6 - Adicione um subcontainer com a classe form-group para agrupar o rótulo e campo "Senha" dentro do formulário criado na etapa 3
Pontos importantes:

Deve haver um novo container utilizando a classe form-group criada no passo 4
Dentro do novo container form-group criado, deve haver um rótulo com o id user-password-label e o texto "Senha"
Dentro do novo container form-group criado, abaixo do rótulo deve haver campo de entrada para senha com o id user-password
7 - Adicione um subcontainer com a classe form-control com o botão "Entrar" dentro do formulário criado na etapa 3
Pontos importantes:

Deve haver um novo container utilizando a classe form-control criada no passo anterior
Crie uma classe no CSS form-control com a propriedade align-self: flex-end
Dentro do novo container form-control criado, deve haver um botão com o id "button-login" e o texto "Entrar"
O botão deve estar alinhado a direita do campo de entrada para senha
Ao clicar no botão com o id #button-login deve exibir um alert com o valor do campo "Email ou telefone"
8 - Crie um container com a classe main-content abaixo da barra azul para agrupar o conteúdo principal da página
Pontos importantes:

Crie um elemento com a classe main-content
O elemento deve ser um flex container no eixo horizontal
O elemento deve posicionado abaixo da barra azul
9 - Crie um subcontainer com a classe left-content para colocar o conteúdo do lado esquerdo dentro do container com a classe main-content
Pontos importantes:

O subcontainer deve ter a classe left-content
A classe left-content deve ter uma largura de 800px
Dentro do container com a classe left-content deve existir um parágrafo com id facebook-slogan e o texto "O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida."
Dentro do container com a classe left-content deve existir abaixo do parágrafo com id facebook-slogan uma imagem com id facebook-networking e o src com o endereço imgs/networking.png.
10 - Crie um subcontainer com a classe right-content para colocar o conteúdo do lado direito dentro do container com a classe main-content
Pontos importantes:

O novo subcontainer deve ter a classe right-content
A classe right-content deve ter uma largura de 300px
Utilize na classe main-content a propriedade justify-content com o valor mais apropriado para alinhar os conteúdos
Dentro do subcontainer com a classe right-content deve existir um elemento h1 com o texto "Abra uma conta"
Dentro do subcontainer com a classe right-content deve existir um elemento com a classe quick-easy com o texto "É rápido e fácil." posicionado abaixo do texto "Abra uma conta"
Dentro do subcontainer com a classe right-content deve existir um elemento form abaixo do texto "É rápido e fácil."
O elemento com a classe right-content deve estar a direita do elemento com a classe left-content
11 - Crie um campo de entrada de texto para o nome do usuário dentro do formulário criado no requisito 10
Pontos importantes:

O campo deve ter o atributo name com o valor "firstname"
O campo deve ter um placeholder com o valor "Nome"
12 - Crie um campo de entrada de texto para o sobrenome do usuário dentro do formulário criado no requisito 10
Pontos importantes:

O campo deve ter o atributo name com o valor "lastname"
O campo deve ter um placeholder com o valor "Sobrenome"
Esse campo deve estar alinhado a direita do campo de Nome
13 - Crie um campo de entrada de texto para o celular ou email do usuário dentro do formulário criado no requisito 10
Pontos importantes:

O campo deve ter o atributo name com o valor "phone_email"
O campo deve ter um placeholder com o valor "Celular ou email"
Posicione esse campo abaixo do campo do nome do usuário
14 - Crie um campo de entrada para senha do usuário dentro do formulário criado no requisito 10
Pontos importantes:

O campo deve ter o atributo name com o valor "password"
O campo deve ser do tipo "password"
O campo deve ter um placeholder com o valor "Nova senha"
Posicione esse campo abaixo do celular/email
15 - Crie um campo de entrada para data de nascimento do usuário dentro do formulário criado no requisito 10
Pontos importantes:

Um rótulo abaixo do campo nova senha com o id label-birthdate e o texto "Data de nascimento"
O campo deve ter o atributo name com o valor "birthdate"
O campo deve ter um placeholder com o valor "dd/mm/aaaa"
Posicione esse campo abaixo do rótulo
16 - Crie um campo de entrada para gênero do usuário dentro do formulário criado no requisito 10
Pontos importantes:

Um rótulo abaixo do campo nova senha com o id label-gender e o texto "Gênero"
O campo deve ser formado por três radio buttons com as opções "Feminino", "Masculino" e "Personalizado"
Os radio buttons devem ter o atributo name com o valor "gender"
Posicione os radio buttons para ficar na mesma linha
Posicione os radio buttons para ficar abaixo do label
17 - Crie um botão para finalizar o cadastro dentro do formulário criado no requisito 10
Pontos importantes:

Um botão com o texto "Cadastre-se" e id "facebook-register"
Deve ter a propriedade type igual a submit
18 - Validar se todos os campos foram preenchidos ao clicar no botão "Cadastre-se"
Pontos importantes:

Exibir uma mensagem "Campos inválidos" dentro do formulário caso pelo menos um campo não esteja preenchido
19 - Adicione um novo campo de texto no formulário se a pessoa usuária selecionar a opção "Personalizado" no campo Gênero
Pontos importantes:

O novo campo dever ser uma campo de texto com o atributo name "gender-custom" e um placeholder "Gênero (opcional)"
O novo campo deve estar posicionado entre as opções de gênero e o botão "Cadastrar-se"
20 - Substituir o conteúdo do container com a classe right-content se o formulário estiver completamente preenchido e validado
Pontos importantes:

Deve haver um texto no modelo "Olá, Jonh Doe" (substitua John Doe pelo nome e sobrenome preenchido no formulário)
Exibir o e-mail ou telefone
Não exibir a senha
Exibir a data de nascimento
Caso a opção selecionada no campo Gênero seja Feminino exibir "Feminino"
Caso a opção selecionada no campo Gênero seja Masculino exibir "Masculino"
Caso a opção selecionada no campo Gênero seja Personalizado exibir "Personalizado":
Requisito Bônus
Esse requisito não é verificável pelo avaliador automático. Sua apresentação (opcional) será realizada durante o fechamento do dia seguinte ao final do projeto

Realize o desenvolvimento da versão mobile do Facebook.
Página Facebook

Dicas
Para colocar sua página no GitHub Pages, não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado em uma pasta /projetos/facebook-signup.
DURANTE O DESENVOLVIMENTO
warning Alguns requisitos pedem para utilizar flex box. Tenha atenção no que é solicitado caso vá usar algum framework CSS para que o requisitos sejam atendidos. warning

Faça commits das alterações que você fizer no código regularmente;

Lembre-se de sempre após um (ou alguns) commits atualizar o repositório remoto (o famoso git push);

Os comandos que você utilizará com mais frequência são:

git status (para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage);

git add (para adicionar arquivos ao stage do Git);

git commit (para criar um commit com os arquivos que estão no stage do Git);

git push -u nome-da-branch (para enviar o commit para o repositório remoto na primeira vez que fizer o push de uma nova branch);

git push (para enviar o commit para o repositório remoto após o passo anterior).

DEPOIS DE TERMINAR O DESENVOLVIMENTO (OPCIONAL)
Para sinalizar que o seu projeto está pronto para o "Code Review" dos seus colegas, faça o seguinte:

Vá até a página DO SEU Pull Request, adicione a label de "code-review" e marque seus colegas:

No menu à direita, clique no link "Labels" e escolha a label code-review;

No menu à direita, clique no link "Assignees" e escolha o seu usuário;

No menu à direita, clique no link "Reviewers" e digite students, selecione o time tryber/students-sd-00.

Caso tenha alguma dúvida, aqui tem um vídeo explicativo.

REVISANDO UM PULL REQUEST
Use o conteúdo sobre Code Review para te ajudar a revisar os Pull Requests.

#VQV rocket

TURMA 08
Boas vindas ao repositório do projeto de réplica da página de cadastro do Facebook!
Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv rocket

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

Instruções para entregar seu projeto:
spiral_notepadANTES DE COMEÇAR A DESENVOLVER:
Clone o repositório
git clone https://github.com/tryber/sd-08-project-facebook-signup.git.
Entre na pasta do repositório que você acabou de clonar:
cd sd-08-project-facebook-signup
Crie uma branch a partir da branch master
Verifique que você está na branch master
Exemplo: git branch
Se não estiver, mude para a branch master
Exemplo: git checkout master
Agora, crie uma branch onde você vai guardar os commits do seu projeto
Você deve criar uma branch no seguinte formato: nome-de-usuario-nome-do-projeto
Exemplo: git checkout -b joaozinho-facebook-project
Crie na raiz do projeto os arquivos que você precisará desenvolver:
Verifique que você está na raiz do projeto
Exemplo: pwd -> o retorno vai ser algo tipo /Users/joaozinho/code/sd-08-project-facebook-signup
Crie os arquivos index.html, style.css e script.js
Exemplo: touch index.html style.css script.js
Adicione as mudanças ao stage do Git e faça um commit
Verifique que as mudanças ainda não estão no stage
Exemplo: git status (devem aparecer listados os novos arquivos em vermelho)
Adicione o novo arquivo ao stage do Git
Exemplo:
git add . (adicionando todas as mudanças - que estavam em vermelho - ao stage do Git)
git status (devem aparecer listados os arquivos em verde)
Faça o commit inicial
Exemplo:
git commit -m 'iniciando o projeto. VAMOS COM TUDO :rocket:' (fazendo o primeiro commit)
git status (deve aparecer uma mensagem tipo nothing to commit )
Adicione a sua branch com o novo commit ao repositório remoto
Usando o exemplo anterior: git push -u origin joaozinho-facebook-project
Crie um novo Pull Request (PR)
Vá até a página de Pull Requests do repositório no GitHub
Clique no botão verde "New pull request"
Clique na caixa de seleção "Compare" e escolha a sua branch com atenção
Clique no botão verde "Create pull request"
Adicione uma descrição para o Pull Request, um título claro que o identifique, e clique no botão verde "Create pull request"
Não se preocupe em preencher mais nada por enquanto!
Volte até a página de Pull Requests do repositório e confira que o seu Pull Request está criado
Entregáveis
Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Este Pull Request deverá conter os arquivos index.html, style.css e script.js, que conterão seu código HTML, CSS e JavaScript, respectivamente.

warning É importante que seus arquivos tenham exatamente estes nomes! warning
Você pode adicionar outros arquivos se julgar necessário. Qualquer dúvida, procure a monitoria.

Lembre-se que você pode consultar nosso conteúdo sobre Git & GitHub sempre que precisar!

Requisitos do projeto
bulbO projeto deve ser o mais parecido possível com a página inicial do Facebook. Respeitando os requisitos, tente fazer uma cópia perfeita!
warning Lembre-se que o seu projeto só será avaliado se estiver passando pelos checks do CodeClimate.

Todos os requisitos tem como base a página do Facebook. Use a imagem do site, além de acessar a página de cadastro/login. Tente ser o mais fiel possível.

Use a inspeção de código para verificar a estrutura da página de cadastro/login do Facebook.

Você irá desenvolver este projeto em dupla e é fundamental que siga as instruções do repositório.

Página Facebook

warning Leia-os atentamente e siga à risca o que for pedido. Em particular, atente-se para os nomes de ids que alguns elementos de seu projeto devem possuir. warning
O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

eyesObservações importantes:
Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução de tela de 1366 x 768 (1366 pixels de largura por 768 pixels de altura).

warning Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação deste plugin do Chrome para facilitar a configuração da resolução. warning
Atente-se para o tamanho das imagens que você utilizará neste projeto. Não utilize imagens com um tamanho maior que 500Kb.

warning Utilize uma ferramenta como esta para redimensionar as imagens. warning
Caso a avaliação falhe com alguma mensagem de erro parecida com [409:0326/130838.878602:FATAL:memory.cc(22)] Out of memory. size=4194304, provavelmente as imagens que você está utilizando estão muito grandes. Tente redimensiona-las para um tamanho menor.

Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os detalhes da execução do avaliador.

Na página do seu Pull Request, acima do "botão de merge", procure por "Evaluator job" e clique no link "Details";

Na página que se abrirá, procure pela linha "Cypress evaluator step" e clique nela;

Analise os resultados a partir da mensagem "(Run Starting)";

Caso tenha dúvidas, consulte este vídeo ou procure a monitoria.

Você tem liberdade para adicionar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, desde que tais comportamentos adicionais não conflitem com os requisitos propostos.

Em outras palavras, você pode fazer mais do que for pedido, mas nunca menos.
Contudo, tenha em mente que nada além do que for pedido nos requisitos será avaliado. Esta é uma oportunidade de você exercitar sua criatividade e experimentar com os conhecimentos adquiridos.

Requisitos Obrigatórios:
Caso você faça o download de bibliotecas externas, utilize o diretório libs (a partir da raiz do projeto) para colocar os arquivos (_.css, _.js, etc...) baixados.

1 - Crie uma barra azul na parte superior da página com a classe top-bar
Pontos importantes:

Esta barra deve possuir a classe top-bar
A classe top-bar deve determinar que o elemento é um flex container
A classe top-bar deve possuir a propriedade background-color: rgb(66, 103, 178)
2 - A barra superior deve conter o logotipo do Facebook no canto esquerdo com a classe facebook-logo
Pontos importantes:

O logotipo deve estar alinhado a esquerda dentro da barra azul
Deve existir um elemento img com a classe facebook-logo
O atributo src do logotipo deve apontar para imgs/facebook-logo.png
3 - A barra superior deve conter um formulário de autenticação no canto direito
Pontos importantes:

O formulário deve estar alinhado a direita dentro da barra azul
Existe formulário possui uma classe chamada facebook-login
O formulário deve ser um flex container
4 - Crie uma classe no CSS chamada form-group
Pontos importantes:

Essa classe deve possuir a propriedade diplay: flex
Alinhe o eixo principal dessa classe para ser o eixo vertical
5 - Adicione um subcontainer com a classe form-group para agrupar o rótulo e campo "E-mail ou telefone" dentro do formulário criado na etapa 3
Pontos importantes:

Deve haver um container utilizando a classe form-group criada no passo anterior
Dentro do container form-group criado, deve haver um rótulo com o id user-email-phone-label e o texto "Email ou telefone"
Dentro do container form-group criado, abaixo do rótulo deve haver campo de entrada de texto para receber o email ou o telefone do usuário com o id user-email-phone'
6 - Adicione um subcontainer com a classe form-group para agrupar o rótulo e campo "Senha" dentro do formulário criado na etapa 3
Pontos importantes:

Deve haver um novo container utilizando a classe form-group criada no passo 4
Dentro do novo container form-group criado, deve haver um rótulo com o id user-password-label e o texto "Senha"
Dentro do novo container form-group criado, abaixo do rótulo deve haver campo de entrada para senha com o id user-password
7 - Adicione um subcontainer com a classe form-control com o botão "Entrar" dentro do formulário criado na etapa 3
Pontos importantes:

Deve haver um novo container utilizando a classe form-control criada no passo anterior
Crie uma classe no CSS form-control com a propriedade align-self: flex-end
Dentro do novo container form-control criado, deve haver um botão com o id "button-login" e o texto "Entrar"
O botão deve estar alinhado a direita do campo de entrada para senha
Ao clicar no botão com o id #button-login deve exibir um alert com o valor do campo "Email ou telefone"
8 - Crie um container com a classe main-content abaixo da barra azul para agrupar o conteúdo principal da página
Pontos importantes:

Crie um elemento com a classe main-content
O elemento deve ser um flex container no eixo horizontal
O elemento deve posicionado abaixo da barra azul
9 - Crie um subcontainer com a classe left-content para colocar o conteúdo do lado esquerdo dentro do container com a classe main-content
Pontos importantes:

O subcontainer deve ter a classe left-content
A classe left-content deve ter uma largura de 800px
Dentro do container com a classe left-content deve existir um parágrafo com id facebook-slogan e o texto "O Facebook ajuda você a se conectar e compartilhar com as pessoas que fazem parte da sua vida."
Dentro do container com a classe left-content deve existir abaixo do parágrafo com id facebook-slogan uma imagem com id facebook-networking e o src com o endereço imgs/networking.png.
10 - Crie um subcontainer com a classe right-content para colocar o conteúdo do lado direito dentro do container com a classe main-content
Pontos importantes:

O novo subcontainer deve ter a classe right-content
A classe right-content deve ter uma largura de 300px
Utilize na classe main-content a propriedade justify-content com o valor mais apropriado para alinhar os conteúdos
Dentro do subcontainer com a classe right-content deve existir um elemento h1 com o texto "Abra uma conta"
Dentro do subcontainer com a classe right-content deve existir um elemento com a classe quick-easy com o texto "É rápido e fácil." posicionado abaixo do texto "Abra uma conta"
Dentro do subcontainer com a classe right-content deve existir um elemento form abaixo do texto "É rápido e fácil."
O elemento com a classe right-content deve estar a direita do elemento com a classe left-content
11 - Crie um campo de entrada de texto para o nome do usuário dentro do formulário criado no requisito 10
Pontos importantes:

O campo deve ter o atributo name com o valor "firstname"
O campo deve ter um placeholder com o valor "Nome"
12 - Crie um campo de entrada de texto para o sobrenome do usuário dentro do formulário criado no requisito 10
Pontos importantes:

O campo deve ter o atributo name com o valor "lastname"
O campo deve ter um placeholder com o valor "Sobrenome"
Esse campo deve estar alinhado a direita do campo de Nome
13 - Crie um campo de entrada de texto para o celular ou email do usuário dentro do formulário criado no requisito 10
Pontos importantes:

O campo deve ter o atributo name com o valor "phone_email"
O campo deve ter um placeholder com o valor "Celular ou email"
Posicione esse campo abaixo do campo do nome do usuário
14 - Crie um campo de entrada para senha do usuário dentro do formulário criado no requisito 10
Pontos importantes:

O campo deve ter o atributo name com o valor "password"
O campo deve ser do tipo "password"
O campo deve ter um placeholder com o valor "Nova senha"
Posicione esse campo abaixo do celular/email
15 - Crie um campo de entrada para data de nascimento do usuário dentro do formulário criado no requisito 10
Pontos importantes:

Um rótulo abaixo do campo nova senha com o id label-birthdate e o texto "Data de nascimento"
O campo deve ter o atributo name com o valor "birthdate"
O campo deve ser do tipo "text"
O campo deve ter um placeholder com o valor "dd/mm/aaaa"
Posicione esse campo abaixo do rótulo
16 - Crie um campo de entrada para gênero do usuário dentro do formulário criado no requisito 10
Pontos importantes:

Um rótulo abaixo do campo nova senha com o id label-gender e o texto "Gênero"
O campo deve ser formado por três radio buttons com as opções "Feminino", "Masculino" e "Personalizado"
Os radio buttons devem ter o atributo name com o valor "gender"
Posicione os radio buttons para ficar na mesma linha
Posicione os radio buttons para ficar abaixo do label
17 - Crie um botão para finalizar o cadastro dentro do formulário criado no requisito 10
Pontos importantes:

Um botão com o texto "Cadastre-se" e id "facebook-register"
Deve ter a propriedade type igual a submit
18 - Validar se todos os campos foram preenchidos ao clicar no botão "Cadastre-se"
Pontos importantes:

Exibir uma mensagem "Campos inválidos" dentro do formulário caso pelo menos um campo não esteja preenchido
19 - Adicione um novo campo de texto no formulário se a pessoa usuária selecionar a opção "Personalizado" no campo Gênero
Pontos importantes:

O novo campo dever ser uma campo de texto com o atributo name "gender-custom" e um placeholder "Gênero (opcional)"
O novo campo deve estar posicionado entre as opções de gênero e o botão "Cadastrar-se"
20 - Substituir o conteúdo do container com a classe right-content se o formulário estiver completamente preenchido e validado
Pontos importantes:

Deve haver um texto no modelo "Olá, Jonh Doe" (substitua John Doe pelo nome e sobrenome preenchido no formulário)
Exibir o e-mail ou telefone
Não exibir a senha
Exibir a data de nascimento
Caso a opção selecionada no campo Gênero seja Feminino exibir "Feminino"
Caso a opção selecionada no campo Gênero seja Masculino exibir "Masculino"
Caso a opção selecionada no campo Gênero seja Personalizado exibir "Personalizado":
Requisito Bônus
Esse requisito não é verificável pelo avaliador automático. Sua apresentação (opcional) será realizada durante o fechamento do dia seguinte ao final do projeto

Realize o desenvolvimento da versão mobile do Facebook.
Página Facebook

Dicas
Para colocar sua página no GitHub Pages, não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado em uma pasta /projetos/facebook-signup.
DURANTE O DESENVOLVIMENTO
warning Alguns requisitos pedem para utilizar flex box. Tenha atenção no que é solicitado caso vá usar algum framework CSS para que o requisitos sejam atendidos. warning

Faça commits das alterações que você fizer no código regularmente;

Lembre-se de sempre após um (ou alguns) commits atualizar o repositório remoto (o famoso git push);

Os comandos que você utilizará com mais frequência são:

git status (para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage);

git add (para adicionar arquivos ao stage do Git);

git commit (para criar um commit com os arquivos que estão no stage do Git);

git push -u nome-da-branch (para enviar o commit para o repositório remoto na primeira vez que fizer o push de uma nova branch);

git push (para enviar o commit para o repositório remoto após o passo anterior).

DEPOIS DE TERMINAR O DESENVOLVIMENTO (OPCIONAL)
Para sinalizar que o seu projeto está pronto para o "Code Review" dos seus colegas, faça o seguinte:

Vá até a página DO SEU Pull Request, adicione a label de "code-review" e marque seus colegas:

No menu à direita, clique no link "Labels" e escolha a label code-review;

No menu à direita, clique no link "Assignees" e escolha o seu usuário;

No menu à direita, clique no link "Reviewers" e digite students, selecione o time tryber/students-sd-00.

Caso tenha alguma dúvida, aqui tem um vídeo explicativo.

REVISANDO UM PULL REQUEST
Use o conteúdo sobre Code Review para te ajudar a revisar os Pull Requests.

#VQV rocket
