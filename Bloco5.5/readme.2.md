TURMA 08
Boas vindas ao repositório do projeto Lista de Tarefas!
Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv rocket

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

Instruções para entregar seu projeto:
spiral_notepadANTES DE COMEÇAR A DESENVOLVER:
Clone o repositório
git clone https://github.com/tryber/sd-08-project-todo-list.git.
Entre na pasta do repositório que você acabou de clonar:
cd sd-08-project-todo-list
Crie uma branch a partir da branch master
Verifique que você está na branch master
Exemplo: git branch
Se não estiver, mude para a branch master
Exemplo: git checkout master
Agora, crie uma branch onde você vai guardar os commits do seu projeto
Você deve criar uma branch no seguinte formato: nome-de-usuario-nome-do-projeto
Exemplo: git checkout -b joaozinho-todo-list-project
Crie na raiz do projeto os arquivos que você precisará desenvolver:
Verifique que você está na raiz do projeto
Exemplo: pwd -> o retorno vai ser algo tipo /Users/joaozinho/code/sd-08-project-todo-list
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
Usando o exemplo anterior: git push -u origin joaozinho-todo-list-project
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
bulbVeja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode e deve ir além para deixar o projeto com a sua cara e impressionar à todos!
exemplo de uma todo list

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
1 - Sua lista deve possuir o título "Minha Lista de Tarefas" em uma tag <header>. Esse título não varia de acordo com o conteúdo da lista. Não confunda esse título com o título da página, que deve aparecer dentro da tag head.
As seguintes verificações serão feitas:
Será verificado se sua página possui uma tag header com o conteúdo Minha Lista de Tarefas
2 - Abaixo do título deve haver um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo" explicando o funcionamento da lista para o usuário.
As seguintes verificações serão feitas:
Será verificado que existe na sua página um elemento com o id funcionamento com o conteúdo Clique duas vezes em um item para marcá-lo como completo
3 - Deve haver um input com o id="texto-tarefa" onde o usuário poderá digitar o nome do item que deseja adicionar à lista.
As seguintes verificações serão feitas:
Será verificada a existência de um elemento do tipo input com o id texto-tarefa.
4 - Deve haver uma lista ordenada de tarefas com o id="lista-tarefas".
As seguintes verificações serão feitas:
Será verificada a existência de um elemento ol com o id lista-tarefas.
5 - Deve haver um botão com id="criar-tarefa" e ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.
As seguintes verificações serão feitas:
Será verificada a existência de um elemento do tipo button com o id criar-tarefa
No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.
A adição de elementos na lista será feita algumas vezes, e será checado se todos os itens criados permanecem na lista na medida em que novos são adicionados.
6 - Os itens da lista de tarefas devem ser ordenados por ordem de criação.
As seguintes verificações serão feitas:
Três itens serão criados na lista e será checado se eles estão ordenados por ordem de criação - ou seja, primeiro o primeiro item criado, depois o segundo, e assim por diante.
7 - Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128).
As seguintes verificações serão feitas:
Será verificado que, ao se carregar a página, os itens da lista não tem o estilo CSS background-color: rgb(128, 128, 128)
Será verificado que, ao se clicar em um item da lista, ele passa a ter o estilo CSS background-color: rgb(128, 128, 128)
8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo.
As seguintes verificações serão feitas:
Será verificado que, quando um elemento da lista é selecionado, o elemento selecionado previamente deixa de sê-lo. Isso é verificado através da presença ou não do estilo background-color: rgb(128, 128, 128) no elemento.
9 - Ao clicar duas vezes em um item, ele deverá ser riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item.
Pontos importantes sobre este requisito:

- Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".

- Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.
  As seguintes verificações serão feitas:
  Será verificado que, antes da ação ser disparada, o elemento adicionado à lista não tem nem a classe completed nem o estilo line-through solid rgb(0, 0, 0).
  Será verificado que a ação pedida é disparada mediante duplo clique no elemento da lista e que os elementos da lista completos tem em si a classe completed e a propriedade text-decoration com o valor line-through solid rgb(0, 0, 0)
  Será verificado que, com um segundo duplo clique, um elemento completo deixa de sê-lo
  10 - Deve haver um botão com id="apaga-tudo" que quando clicado deve apagar todos os items da lista.
  As seguintes verificações serão feitas:
  Será verificado que existe um elemento button com o id apaga-tudo
  Será verificado que, dado que uma lista possui tarefas, um clique no botão a deixa vazia
  11 - Deve haver um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista.
  As seguintes verificações serão feitas:
  Será verificado que existe um elemento button com o id remover-finalizados
  Será verificado que, ao clicar no botão, todos os elementos marcados como feitos são removidos da lista
  BÔNUS
  12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava.
  As seguintes verificações serão feitas:
  Será verificado que existe um elemento button com o id salvar-tarefas
  Será verificado que, quando a lista tem vários elementos, alguns dos quais marcados como finalizados, um recarregamento da página mantém a lista exatamente como está.
  13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas.
  Pontos importantes sobre este requisito bônus:

- Antes de começar a desenvolver essa funcionalidade, pare e pense. O que significa mover um item de uma lista para cima ou para baixo no **_DOM_**? Você já possui todas as habilidades necessárias para fazer isso.

- Habitue-se a pensar nos casos especiais ao construir programas. O que acontece se o usuário tentar mover o primeiro item para cima ou o último para baixo?
  As seguintes verificações serão feitas:
  Será verificada a existência de dois elementos button, um com o id mover-cima e o outro com o id mover-baixo
  Será verificado que, dado que diversos elementos foram acrescentados à lista, movimentá-los de formas diversas os deixa nas posições esperadas
  Será verificado que, caso algum elemento esteja finalizado, este status deve persistir ainda que se mova o elemento
  Será verificado que, caso nenhum elemento esteja selecionado, clicar nos botões não altera a lista
  Será verificado que um elemento que esteja selecionado deve se manter selecionado mesmo depois de movido
  Caso especial! Será verificado que, caso se tente subir o elemento no topo da lista ou, caso se tente descer o último elemento da lista, esta não deve ser alterada
  14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado.
  As seguintes verificações serão feitas:
  Será verificada a presença de um elemento button com um id remover-selecionado
  Será verificado que, no clicar no botão, somente o elemento selecionado é removido
  Dicas
  Para colocar sua página no GitHub Pages, não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado em uma pasta /projetos/todo-list.

Lembre-se: tirar 100% do avaliador não é o fim do trabalho! Customize-o, estilize-o, acrescente-o ao seu portfólio!

DURANTE O DESENVOLVIMENTO
warning RECOMENDAMOS QUE VOCÊ FIQUE ATENTO ÀS ISSUES DO CODE CLIMATE, PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO. A PARTIR DO PRÓXIMO BLOCO SEU PROJETO SOMENTE SERÁ AVALIADO SE NÃO TIVER ISSUES NO CODE CLIMATE! warning

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

No menu à direita, clique no link "Reviewers" e digite students, selecione o time tryber/students-sd-08.

Caso tenha alguma dúvida, aqui tem um video explicativo.

REVISANDO UM PULL REQUEST
Use o conteúdo sobre Code Review para te ajudar a revisar os Pull Requests.

#VQV rocket

TURMA 09
Boas vindas ao repositório do projeto Lista de Tarefas!
Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv rocket

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

Instruções para entregar seu projeto:
spiral_notepadANTES DE COMEÇAR A DESENVOLVER:
Clone o repositório
git clone git@github.com:tryber/sd-09-project-todo-list.git.
Entre na pasta do repositório que você acabou de clonar:
cd sd-09-project-todo-list
Crie uma branch a partir da branch master
Verifique que você está na branch master
Exemplo: git branch
Se não estiver, mude para a branch master
Exemplo: git checkout master
Agora, crie uma branch onde você vai guardar os commits do seu projeto
Você deve criar uma branch no seguinte formato: nome-de-usuario-nome-do-projeto
Exemplo: git checkout -b joaozinho-todo-list-project
Crie na raiz do projeto os arquivos que você precisará desenvolver:
Verifique que você está na raiz do projeto
Exemplo: pwd -> o retorno vai ser algo tipo /Users/joaozinho/code/sd-09-project-todo-list
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
Usando o exemplo anterior: git push -u origin joaozinho-todo-list-project
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
bulbVeja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode e deve ir além para deixar o projeto com a sua cara e impressionar à todos!
exemplo de uma todo list

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
1 - Sua lista deve possuir o título "Minha Lista de Tarefas" em uma tag <header>. Esse título não varia de acordo com o conteúdo da lista. Não confunda esse título com o título da página, que deve aparecer dentro da tag head.
As seguintes verificações serão feitas:
Será verificado se sua página possui uma tag header com o conteúdo Minha Lista de Tarefas
2 - Abaixo do título deve haver um pequeno e discreto parágrafo com id="funcionamento" e com o texto "Clique duas vezes em um item para marcá-lo como completo" explicando o funcionamento da lista para o usuário.
As seguintes verificações serão feitas:
Será verificado que existe na sua página um elemento com o id funcionamento com o conteúdo Clique duas vezes em um item para marcá-lo como completo
3 - Deve haver um input com o id="texto-tarefa" onde o usuário poderá digitar o nome do item que deseja adicionar à lista.
As seguintes verificações serão feitas:
Será verificada a existência de um elemento do tipo input com o id texto-tarefa.
4 - Deve haver uma lista ordenada de tarefas com o id="lista-tarefas".
As seguintes verificações serão feitas:
Será verificada a existência de um elemento ol com o id lista-tarefas.
5 - Deve haver um botão com id="criar-tarefa" e ao clicar nesse botão, um novo item deverá ser criado ao final da lista e o texto do input deve ser limpo.
As seguintes verificações serão feitas:
Será verificada a existência de um elemento do tipo button com o id criar-tarefa
No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.
A adição de elementos na lista será feita algumas vezes, e será checado se todos os itens criados permanecem na lista na medida em que novos são adicionados.
6 - Os itens da lista de tarefas devem ser ordenados por ordem de criação.
As seguintes verificações serão feitas:
Três itens serão criados na lista e será checado se eles estão ordenados por ordem de criação - ou seja, primeiro o primeiro item criado, depois o segundo, e assim por diante.
7 - Ao clicar em um item da lista, altere a cor de fundo do item para cinza rgb(128,128,128).
As seguintes verificações serão feitas:
Será verificado que, ao se carregar a página, os itens da lista não tem o estilo CSS background-color: rgb(128, 128, 128)
Será verificado que, ao se clicar em um item da lista, ele passa a ter o estilo CSS background-color: rgb(128, 128, 128)
8 - Não deve ser possível selecionar mais de um elemento da lista ao mesmo tempo.
As seguintes verificações serão feitas:
Será verificado que, quando um elemento da lista é selecionado, o elemento selecionado previamente deixa de sê-lo. Isso é verificado através da presença ou não do estilo background-color: rgb(128, 128, 128) no elemento.
9 - Ao clicar duas vezes em um item, ele deverá ser riscado, indicando que foi completo. Deve ser possível desfazer essa ação clicando novamente duas vezes no item.
Pontos importantes sobre este requisito:

- Crie uma classe CSS com o nome "completed" e defina a propriedade "text-decoration" com o valor "line-through".

- Utilize a classe CSS "completed" para adicionar o efeito de letra tachada (riscada) às tarefas finalizadas.
  As seguintes verificações serão feitas:
  Será verificado que, antes da ação ser disparada, o elemento adicionado à lista não tem nem a classe completed nem o estilo line-through solid rgb(0, 0, 0).
  Será verificado que a ação pedida é disparada mediante duplo clique no elemento da lista e que os elementos da lista completos tem em si a classe completed e a propriedade text-decoration com o valor line-through solid rgb(0, 0, 0)
  Será verificado que, com um segundo duplo clique, um elemento completo deixa de sê-lo
  10 - Deve haver um botão com id="apaga-tudo" que quando clicado deve apagar todos os items da lista.
  As seguintes verificações serão feitas:
  Será verificado que existe um elemento button com o id apaga-tudo
  Será verificado que, dado que uma lista possui tarefas, um clique no botão a deixa vazia
  11 - Deve haver um botão com id="remover-finalizados" que quando clicado remove somente os elementos finalizados da sua lista.
  As seguintes verificações serão feitas:
  Será verificado que existe um elemento button com o id remover-finalizados
  Será verificado que, ao clicar no botão, todos os elementos marcados como feitos são removidos da lista
  BÔNUS
  12 - Adicione um botão com id="salvar-tarefas" que salve o conteúdo da lista. Se você fechar e reabrir a página, a lista deve continuar no estado em que estava.
  As seguintes verificações serão feitas:
  Será verificado que existe um elemento button com o id salvar-tarefas
  Será verificado que, quando a lista tem vários elementos, alguns dos quais marcados como finalizados, um recarregamento da página mantém a lista exatamente como está.
  13 - Adicione dois botões, um com id="mover-cima" e outro com id="mover-baixo", que permitam mover o item selecionado para cima ou para baixo na lista de tarefas.
  Pontos importantes sobre este requisito bônus:

- Antes de começar a desenvolver essa funcionalidade, pare e pense. O que significa mover um item de uma lista para cima ou para baixo no **_DOM_**? Você já possui todas as habilidades necessárias para fazer isso.

- Habitue-se a pensar nos casos especiais ao construir programas. O que acontece se o usuário tentar mover o primeiro item para cima ou o último para baixo?
  As seguintes verificações serão feitas:
  Será verificada a existência de dois elementos button, um com o id mover-cima e o outro com o id mover-baixo
  Será verificado que, dado que diversos elementos foram acrescentados à lista, movimentá-los de formas diversas os deixa nas posições esperadas
  Será verificado que, caso algum elemento esteja finalizado, este status deve persistir ainda que se mova o elemento
  Será verificado que, caso nenhum elemento esteja selecionado, clicar nos botões não altera a lista
  Será verificado que um elemento que esteja selecionado deve se manter selecionado mesmo depois de movido
  Caso especial! Será verificado que, caso se tente subir o elemento no topo da lista ou, caso se tente descer o último elemento da lista, esta não deve ser alterada
  14 - Adicione um botão com id="remover-selecionado" que, quando clicado, remove o item selecionado.
  As seguintes verificações serão feitas:
  Será verificada a presença de um elemento button com um id remover-selecionado
  Será verificado que, no clicar no botão, somente o elemento selecionado é removido
  Dicas
  Para colocar sua página no GitHub Pages, não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado em uma pasta /projetos/todo-list.

Lembre-se: tirar 100% do avaliador não é o fim do trabalho! Customize-o, estilize-o, acrescente-o ao seu portfólio!

DURANTE O DESENVOLVIMENTO
warning RECOMENDAMOS QUE VOCÊ FIQUE ATENTO ÀS ISSUES DO CODE CLIMATE, PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO. A PARTIR DO PRÓXIMO BLOCO SEU PROJETO SOMENTE SERÁ AVALIADO SE NÃO TIVER ISSUES NO CODE CLIMATE! warning

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

No menu à direita, clique no link "Reviewers" e digite students, selecione o time tryber/students-sd-09.

Caso tenha alguma dúvida, aqui tem um video explicativo.

REVISANDO UM PULL REQUEST
Use o conteúdo sobre Code Review para te ajudar a revisar os Pull Requests.

#VQV rocket
