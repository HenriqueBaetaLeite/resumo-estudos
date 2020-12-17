TURMA 08
Boas vindas ao repositório do projeto Carta Misteriosa!
Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv rocket

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

Instruções para entregar seu projeto:
ANTES DE COMEÇAR A DESENVOLVER:
Clone o repositório
git clone git@github.com:tryber/sd-08-project-mistery-letter.git.
Entre na pasta do repositório que você acabou de clonar:
sd-08-project-mistery-letter
Crie uma branch a partir da branch master
Verifique que você está na branch master
Exemplo: git branch
Se não estiver, mude para a branch master
Exemplo: git checkout master
Agora crie uma branch à qual você vai submeter os commits do seu projeto
Você deve criar uma branch no seguinte formato: nome-de-usuario-nome-do-projeto
Exemplo: git checkout -b joaozinho-project-mistery-letter
Adicione as mudanças ao stage do Git e faça um commit
Verifique que as mudanças ainda não estão no stage
Exemplo: git status (deve aparecer listada a pasta joaozinho em vermelho)
Adicione o novo arquivo ao stage do Git
Exemplo:
git add . (adicionando todas as mudanças - que estavam em vermelho - ao stage do Git)
git status (deve aparecer listado o arquivo joaozinho/README.md em verde)
Faça o commit inicial
Exemplo:
git commit -m 'iniciando o projeto x' (fazendo o primeiro commit)
git status (deve aparecer uma mensagem tipo nothing to commit )
Adicione a sua branch com o novo commit ao repositório remoto
Usando o exemplo anterior: git push -u origin joaozinho-project-mistery-letter
Crie um novo Pull Request (PR)
Vá até a página de Pull Requests do repositório no GitHub
Clique no botão verde "New pull request"
Clique na caixa de seleção "Compare" e escolha a sua branch com atenção
Clique no botão verde "Create pull request"
Adicione uma descrição para o Pull Request e clique no botão verde "Create pull request"
Não se preocupe em preencher mais nada por enquanto!
Volte até a página de Pull Requests do repositório e confira que o seu Pull Request está criado
Entregáveis
Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Este Pull Request deverá conter os arquivos index.html, style.css e script.js, que conterão seu código HTML, CSS e JavaScript, respectivamente.

Entregáveis
Para entregar o seu projeto você deverá criar um Pull Request para este repositório no GitHub.

Este Pull Request deverá conter, necessariamente, os arquivos index.html, style.css e script.js, que conterão seu código HTML, CSS e JavaScript, respectivamente. warning É importante que seus arquivos tenham exatamente estes nomes! warning

Você pode adicionar outros arquivos se julgar necessário.

Requisitos do projeto
bulbVeja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode e deve ir além para deixar o projeto com a sua cara e impressionar à todos!

warning Leia-os atentamente e siga à risca o que for pedido. Em particular, atente-se para os nomes de ids que alguns elementos de seu projeto devem possuir. warning
O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

eyesObservações importantes:
Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução de tela de 1366 x 768 (1366 pixels de largura por 768 pixels de altura).

warning Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação deste plugin do Chrome para facilitar a configuração da resolução. warning
Caso for utilizar imagens nesse projeto, atente-se para o tamanho delas. Não utilize imagens com um tamanho maior que 500Kb.

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
Neste projeto, você implementará um gerador de cartas misteriosas.
Ou seja, dado um valor digitado em um campo de texto, apresentar as palavras com uma aparência de uma carta onde cada palavra possui uma estilização própria.

1 - Deve haver um input com o id="carta-texto" onde o usuário poderá digitar o conteúdo da carta.
2 - Deve haver um parágrafo com o id="carta-gerada" onde o usuário verá o resultado de sua carta misteriosa.
3 - Deve haver um botão com id="criar-carta" e ao clicar nesse botão, a carta misteriosa deve ser gerada.
Pontos importantes:

- Cada palavra deve aparecer dentro de uma tag `span`.
- As tags `span` devem ser adicionadas como filha do parágrafo que possui o id `carta-gerada`.
  4 - Ao criar uma carta através do botão id="criar-carta", o input com id="carta-texto" deve permanecer com o texto digitado.
  5- Se o usuário não preencher o campo ou preencher com apenas espaços vazios adicionar a mensagem 'Por favor, digite o conteúdo da carta.'
  6 - Crie a classe newspaper.
  Pontos importantes:

- Defina as propriedades:

  - `background-color` com o valor `antiquewhite`
  - `font-family` com o valor `Times New Roman`
  - `font-weight` com o valor `bold`
    7 - Crie a classe magazine1.
    Pontos importantes:

- Defina as propriedades:

  - `background-color` com o valor `teal`
  - `color` com o valor `white`
  - `font-family` com o valor `Verdana`
  - `font-weight` com o valor `900`
  - `text-transform` com o valor `uppercase`
    8 - Crie a classe magazine2.
    Pontos importantes:

- Defina as propriedades:

  - `background-image` com a imagem `images/pink-pattern.png`
  - `color` com o valor `fuchsia`
  - `font-family` com o valor `Verdana`
  - `font-weight` com o valor `900`
    9 - Crie a classe medium.
    Pontos importantes:

- Defina as propriedades:

  - `font-size` com o valor `20px`
  - `padding` com o valor `8px`
    10 - Crie a classe big.
    Pontos importantes:

- Defina as propriedades:

  - `font-size` com o valor `30px`
  - `padding` com o valor `10px`
    11 - Crie a classe reallybig.
    Pontos importantes:

- Defina as propriedades:

  - `font-size` com o valor `40px`
  - `padding` com o valor `15px`
    12 - Crie a classe rotateleft.
    Pontos importantes:

- Defina as propriedades:

  - `transform` com o valor `rotate(-5deg)`
    13 - Crie a classe rotateright.
    Pontos importantes:

- Defina as propriedades:

  - `transform` com o valor `rotate(5deg)`
    14 - Crie a classe skewleft.
    Pontos importantes:

- Defina as propriedades:

  - `transform` com o valor `skewX(10deg)`;
    15 - Crie a classe skewright.
    Pontos importantes:

- Defina as propriedades:

  - `transform` com o valor `skewX(-10deg)`;
    16 - Adicione as classes de forma aleatória a fim de estilizar as palavras.
    Pontos importantes:

- As classes devem ser adicionadas às tags `span` de forma **aleatória**.
- Sempre adicione mais de uma classe em uma palavra.
- Utilize as classes:

  - `newspaper`, `magazine1`, `magazine2` (Grupo estilo)
  - `medium`, `big`, `reallybig` (Grupo tamanho)
  - `rotateleft`, `rotateright` (Grupo rotação)
  - `skewleft`, `skewright` (Grupo inclinação)

  Não é necessário utilizar classes de todos os grupos em uma palavra, mas **não** utilize mais de uma classe do mesmo grupo.
  Ou seja, se você utilizar as classes `magazine1` e `skewright` em uma palavra, as classes `newspaper`, `magazine2`, `skeleft` não devem ser usadas para essa mesma palavra.
  Requisitos Bônus:
  17 - Com uma carta misteriosa gerada, adicione a possibilidade de alterar o estilo de uma palavra específica ao clicar nela.
  Pontos importantes:

- Ao clicar em uma palavra, um novo estilo **aleatório** deve ser aplicado.
- O número de mudanças deve ser ilimitado;
  18 - Deve haver um parágrafo com o id="carta-contador" onde existirá um contador de palavras.
  Pontos importantes:

- Esse contador deve informar a quantidade de palavras presentes na carta misteriosa gerada.
  Dicas
  A propriedade transform só funciona em elementos do tipo block ou inline-block. Então, é sugerido adicionar a propriedade display: inline-block para que os elementos spans apresentem o conteúdo da forma correta.

Que tal usar um loop para adicionar o mesmo evento em vários elementos? Ou então a técnica de event bubbling combinada com classList?

Se precisar consultar os valores do CSS de um elemento a partir do JavaScript, dê uma olhada aqui.

Para alterar alguma propriedade do CSS de um elemento através do JavaScript, dê uma olhada no atributo style do elemento.

Para colocar sua página no GitHub Pages, não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado em uma pasta /projetos/pixels-art.

DURANTE O DESENVOLVIMENTO
warning RECOMENDAMOS QUE VOCÊ FIQUE ATENTO ÀS ISSUES DO CODDE CLIMATE, PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO. A PARTIR DO PRÓXIMO BLOCO SEU PROJETO SOMENTE SERÁ AVALIADO SE NÃO TIVER ISSUES NO CODE CLIMATE! warning

Faça commits das alterações que você fizer no código regularmente;

Lembre-se de sempre após um (ou alguns) commits atualizar o repositório remoto (o famoso git push);

Os comandos que você utilizará com mais frequência são:

git status (para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage);

git add (para adicionar arquivos ao stage do Git);

git commit (para criar um commit com os arquivos que estão no stage do Git);

git push -u nome-da-branch (para enviar o commit para o repositório remoto na primeira vez que fizer o push de uma nova branch);

git push (para enviar o commit para o repositório remoto após o passo anterior).

DEPOIS DE TERMINAR O DESENVOLVIMENTO
Para sinalizar que o seu projeto está pronto para o "Code Review" dos seus colegas, faça o seguinte:

Vá até a página DO SEU Pull Request, adicione a label de "code-review" e marque seus colegas:

No menu à direita, clique no link "Labels" e escolha a label code-review;

No menu à direita, clique no link "Assignees" e escolha o seu usuário;

No menu à direita, clique no link "Reviewers" e digite students, selecione o time tryber/students-sd-08.

Caso tenha alguma dúvida, aqui tem um video explicativo.

REVISANDO UM PULL REQUEST
Use o conteúdo sobre Code Review para te ajudar a revisar os Pull Requests.

#VQV rocket

TURMA 09
Boas vindas ao repositório do projeto Carta Misteriosa!
Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv rocket

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

Instruções para entregar seu projeto:
ANTES DE COMEÇAR A DESENVOLVER:
Clone o repositório
git clone git@github.com:tryber/sd-0x-block5-project-mistery-letter.git.
Entre na pasta do repositório que você acabou de clonar:
sd-0x-block5-project-mistery-letter
Crie uma branch a partir da branch master
Verifique que você está na branch master
Exemplo: git branch
Se não estiver, mude para a branch master
Exemplo: git checkout master
Agora crie uma branch à qual você vai submeter os commits do seu projeto
Você deve criar uma branch no seguinte formato: nome-de-usuario-nome-do-projeto
Exemplo: git checkout -b joaozinho-project-mistery-letter
Adicione as mudanças ao stage do Git e faça um commit
Verifique que as mudanças ainda não estão no stage
Exemplo: git status (deve aparecer listada a pasta joaozinho em vermelho)
Adicione o novo arquivo ao stage do Git
Exemplo:
git add . (adicionando todas as mudanças - que estavam em vermelho - ao stage do Git)
git status (deve aparecer listado o arquivo joaozinho/README.md em verde)
Faça o commit inicial
Exemplo:
git commit -m 'iniciando o projeto x' (fazendo o primeiro commit)
git status (deve aparecer uma mensagem tipo nothing to commit )
Adicione a sua branch com o novo commit ao repositório remoto
Usando o exemplo anterior: git push -u origin joaozinho-project-mistery-letter
Crie um novo Pull Request (PR)
Vá até a página de Pull Requests do repositório no GitHub
Clique no botão verde "New pull request"
Clique na caixa de seleção "Compare" e escolha a sua branch com atenção
Clique no botão verde "Create pull request"
Adicione uma descrição para o Pull Request e clique no botão verde "Create pull request"
Não se preocupe em preencher mais nada por enquanto!
Volte até a página de Pull Requests do repositório e confira que o seu Pull Request está criado
Entregáveis
Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Este Pull Request deverá conter os arquivos index.html, style.css e script.js, que conterão seu código HTML, CSS e JavaScript, respectivamente.

Entregáveis
Para entregar o seu projeto você deverá criar um Pull Request para este repositório no GitHub.

Este Pull Request deverá conter, necessariamente, os arquivos index.html, style.css e script.js, que conterão seu código HTML, CSS e JavaScript, respectivamente. warning É importante que seus arquivos tenham exatamente estes nomes! warning

Você pode adicionar outros arquivos se julgar necessário.

Requisitos do projeto
bulbVeja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode e deve ir além para deixar o projeto com a sua cara e impressionar à todos!

warning Leia-os atentamente e siga à risca o que for pedido. Em particular, atente-se para os nomes de ids que alguns elementos de seu projeto devem possuir. warning
O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

eyesObservações importantes:
Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução de tela de 1366 x 768 (1366 pixels de largura por 768 pixels de altura).

warning Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação deste plugin do Chrome para facilitar a configuração da resolução. warning
Caso for utilizar imagens nesse projeto, atente-se para o tamanho delas. Não utilize imagens com um tamanho maior que 500Kb.

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
Neste projeto, você implementará um gerador de cartas misteriosas.
Ou seja, dado um valor digitado em um campo de texto, apresentar as palavras com uma aparência de uma carta onde cada palavra possui uma estilização própria.

1 - Deve haver um input com o id="carta-texto" onde o usuário poderá digitar o conteúdo da carta.
2 - Deve haver um parágrafo com o id="carta-gerada" onde o usuário verá o resultado de sua carta misteriosa.
3 - Deve haver um botão com id="criar-carta" e ao clicar nesse botão, a carta misteriosa deve ser gerada.
Pontos importantes:

- Cada palavra deve aparecer dentro de uma tag `span`.
- As tags `span` devem ser adicionadas como filha do parágrafo que possui o id `carta-gerada`.
  4 - Ao criar uma carta através do botão id="criar-carta", o input com id="carta-texto" deve permanecer com o texto digitado.
  5- Se o usuário não preencher o campo ou preencher com apenas espaços vazios adicionar a mensagem 'Por favor, digite o conteúdo da carta.'
  6 - Crie a classe newspaper.
  Pontos importantes:

- Defina as propriedades:

  - `background-color` com o valor `antiquewhite`
  - `font-family` com o valor `Times New Roman`
  - `font-weight` com o valor `bold`
    7 - Crie a classe magazine1.
    Pontos importantes:

- Defina as propriedades:

  - `background-color` com o valor `teal`
  - `color` com o valor `white`
  - `font-family` com o valor `Verdana`
  - `font-weight` com o valor `900`
  - `text-transform` com o valor `uppercase`
    8 - Crie a classe magazine2.
    Pontos importantes:

- Defina as propriedades:

  - `background-image` com a imagem `images/pink-pattern.png`
  - `color` com o valor `fuchsia`
  - `font-family` com o valor `Verdana`
  - `font-weight` com o valor `900`
    9 - Crie a classe medium.
    Pontos importantes:

- Defina as propriedades:

  - `font-size` com o valor `20px`
  - `padding` com o valor `8px`
    10 - Crie a classe big.
    Pontos importantes:

- Defina as propriedades:

  - `font-size` com o valor `30px`
  - `padding` com o valor `10px`
    11 - Crie a classe reallybig.
    Pontos importantes:

- Defina as propriedades:

  - `font-size` com o valor `40px`
  - `padding` com o valor `15px`
    12 - Crie a classe rotateleft.
    Pontos importantes:

- Defina as propriedades:

  - `transform` com o valor `rotate(-5deg)`
    13 - Crie a classe rotateright.
    Pontos importantes:

- Defina as propriedades:

  - `transform` com o valor `rotate(5deg)`
    14 - Crie a classe skewleft.
    Pontos importantes:

- Defina as propriedades:

  - `transform` com o valor `skewX(10deg)`;
    15 - Crie a classe skewright.
    Pontos importantes:

- Defina as propriedades:

  - `transform` com o valor `skewX(-10deg)`;
    16 - Adicione as classes de forma aleatória a fim de estilizar as palavras.
    Pontos importantes:

- As classes devem ser adicionadas às tags `span` de forma **aleatória**.
- Sempre adicione mais de uma classe em uma palavra.
- Utilize as classes:

  - `newspaper`, `magazine1`, `magazine2` (Grupo estilo)
  - `medium`, `big`, `reallybig` (Grupo tamanho)
  - `rotateleft`, `rotateright` (Grupo rotação)
  - `skewleft`, `skewright` (Grupo inclinação)

  Não é necessário utilizar classes de todos os grupos em uma palavra, mas **não** utilize mais de uma classe do mesmo grupo.
  Ou seja, se você utilizar as classes `magazine1` e `skewright` em uma palavra, as classes `newspaper`, `magazine2`, `skeleft` não devem ser usadas para essa mesma palavra.
  Requisitos Bônus:
  17 - Com uma carta misteriosa gerada, adicione a possibilidade de alterar o estilo de uma palavra específica ao clicar nela.
  Pontos importantes:

- Ao clicar em uma palavra, um novo estilo **aleatório** deve ser aplicado.
- O número de mudanças deve ser ilimitado;
  18 - Deve haver um parágrafo com o id="carta-contador" onde existirá um contador de palavras.
  Pontos importantes:

- Esse contador deve informar a quantidade de palavras presentes na carta misteriosa gerada.
  Dicas
  A propriedade transform só funciona em elementos do tipo block ou inline-block. Então, é sugerido adicionar a propriedade display: inline-block para que os elementos spans apresentem o conteúdo da forma correta.

Que tal usar um loop para adicionar o mesmo evento em vários elementos? Ou então a técnica de event bubbling combinada com classList?

Se precisar consultar os valores do CSS de um elemento a partir do JavaScript, dê uma olhada aqui.

Para alterar alguma propriedade do CSS de um elemento através do JavaScript, dê uma olhada no atributo style do elemento.

Para colocar sua página no GitHub Pages, não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado em uma pasta /projetos/pixels-art.

DURANTE O DESENVOLVIMENTO
warning RECOMENDAMOS QUE VOCÊ FIQUE ATENTO ÀS ISSUES DO CODDE CLIMATE, PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO. A PARTIR DO PRÓXIMO BLOCO SEU PROJETO SOMENTE SERÁ AVALIADO SE NÃO TIVER ISSUES NO CODE CLIMATE! warning

Faça commits das alterações que você fizer no código regularmente;

Lembre-se de sempre após um (ou alguns) commits atualizar o repositório remoto (o famoso git push);

Os comandos que você utilizará com mais frequência são:

git status (para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage);

git add (para adicionar arquivos ao stage do Git);

git commit (para criar um commit com os arquivos que estão no stage do Git);

git push -u nome-da-branch (para enviar o commit para o repositório remoto na primeira vez que fizer o push de uma nova branch);

git push (para enviar o commit para o repositório remoto após o passo anterior).

DEPOIS DE TERMINAR O DESENVOLVIMENTO
Para sinalizar que o seu projeto está pronto para o "Code Review" dos seus colegas, faça o seguinte:

Vá até a página DO SEU Pull Request, adicione a label de "code-review" e marque seus colegas:

No menu à direita, clique no link "Labels" e escolha a label code-review;

No menu à direita, clique no link "Assignees" e escolha o seu usuário;

No menu à direita, clique no link "Reviewers" e digite students, selecione o time tryber/students-sd-09.

Caso tenha alguma dúvida, aqui tem um video explicativo.

REVISANDO UM PULL REQUEST
Use o conteúdo sobre Code Review para te ajudar a revisar os Pull Requests.

#VQV rocket
