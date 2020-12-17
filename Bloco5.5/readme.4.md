TURMA 08
Boas vindas ao repositório do projeto de adivinhação de Cor!
Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv rocket

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

spiral_notepad ANTES DE COMEÇAR A DESENVOLVER:
Clone o repositório
git@github.com:tryber/sd-08-project-color-guess.git.
Entre na pasta do repositório que você acabou de clonar:
cd sd-08-project-color-guess
Crie uma branch a partir da branch master
Verifique que você está na branch master
Exemplo: git branch
Se não estiver, mude para a branch master
Exemplo: git checkout master
Agora, crie uma branch onde você vai guardar os commits do seu projeto
Você deve criar uma branch no seguinte formato: nome-de-usuario-nome-do-projeto
Exemplo: git checkout -b joaozinho-project-color-guess
Crie na raiz do projeto os arquivos que você precisará desenvolver:
Verifique que você está na raiz do projeto
Exemplo: pwd -> o retorno vai ser algo tipo /Users/joaozinho/code/sd-08-project-color-guess
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
Usando o exemplo anterior: git push -u origin joaozinho-project-color-guess
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

Este Pull Request deverá conter os arquivos index.html, style.css e script.js que conterão seu código HTML, CSS e JavaScript, respectivamente.

Prazo para entrega
O Prazo para entrega é de 7 dias corridos após o último dia de projeto.

Exemplo: Se o último dia de projeto aconteceu na quarta-feira, dia 17 de junho, seu prazo final de entrega será na quarta-feira 24 de junho às 14 horas.

Vale ressaltar que os projetos podem ter mais de um dia de duração, por isso o prazo de 7 dias é contado à partir do último dia de projeto.

warning É importante que seus arquivos tenham exatamente estes nomes! warning
Você pode adicionar outros arquivos se julgar necessário. Qualquer dúvida, procure a Pessoa Instrutora que te acompanha.

Lembre-se que você pode consultar nosso conteúdo sobre Git & GitHub sempre que precisar!

Requisitos do projeto
bulbVeja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode e deve ir além para deixar o projeto com a sua cara e impressionar à todos!
Gif exibindo um jogo de adivinhar a cor

warning Leia-os atentamente e siga à risca o que for pedido. Em particular, atente-se para os nomes de ids que alguns elementos de seu projeto devem possuir. warning
O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

eyes Observações importantes:
Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução de tela de 1366 x 768 (1366 pixels de largura por 768 pixels de altura).

warning Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação deste plugin do Chrome para facilitar a configuração da resolução. warning
Atente-se para o tamanho das imagens que você utilizará neste projeto. Não utilize imagens com um tamanho maior que 500Kb.

warning Utilize uma ferramenta como esta para redimensionar as imagens. warning
Caso a avaliação falhe com alguma mensagem de erro parecida com [409:0326/130838.878602:FATAL:memory.cc(22)] Out of memory. size=4194304, provavelmente as imagens que você está utilizando estão muito grandes. Tente redimensiona-las para um tamanho menor.

Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os detalhes da execução do avaliador.

Na página do seu Pull Request, acima do "botão de merge", procure por "Evaluator job" e clique no link "Details";

Na página que se abrirá, procure pela linha "Cypress evaluator step" e clique nela;

Analise os resultados a partir da mensagem "(Run Starting)";

Caso tenha dúvidas, consulte este vídeo ou procure as pessoas instrutoras.

Você tem liberdade para adicionar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, desde que tais comportamentos adicionais não conflitem com os requisitos propostos.

Em outras palavras, você pode fazer mais do que for pedido, mas nunca menos.
Contudo, tenha em mente que nada além do que for pedido nos requisitos será avaliado. Esta é uma oportunidade de você exercitar sua criatividade e experimentar com os conhecimentos adquiridos.

Requisitos Obrigatórios:
Neste projeto, você implementará um adivinhador de cor RGB. Ou seja, dada uma string RGB, você irá fornecer 6 alternativas visuais de cores, sendo uma delas a correta! Você poderá estilizar seu projeto da forma que desejar desde que todos os requisitos sejam cumpridos. Use sua imaginação! brain

Requisitos do projeto
1 - O seu site deve possuir um título com o nome do seu jogo
O id do seu título deve ser title
2 - A página deve possuir o texto com o código RGB a ser adivinhado
O seu id deve ser rgb-color
Esse texto deve conter os três números das cores RGB a ser adivinhada, no seguinte formato: (168, 34, 1)
3 - A página deve conter opções de cores para serem adivinhadas
Deve conter 6 circulos como opção de cor de adivinhação
A class de todos os circulos deve ser ball
4 - As cores das bolas devem ser geradas dinâmicamente
Ao carregar a página, as cores de cada um dos 6 circulos coloridos deve ser geradas via JavaScript
5 - Ao clicar em um circulo colorido, deve ser mostrado um texto indicando se está correto
O seu id do elemento deve ser answer
Quando o jogo é iniciado, o texto exibido deve ser "Escolha uma cor"
Se o circulo colorido for o correto, deve ser exibido o texto "Acertou!"
Se o circulo colorido for o incorreta, deve ser exibido o texto "Errou! Tente novamente!"
6 - Crie um botão para iniciar/reiniciar o jogo
O botão deve ter o id reset-game.
Ao clicar no botão, novas cores devem ser geradas via JavaScript e o elemento rgb-color deve ser atualizado
Ao clicar no botão, o elemento answer deve voltar ao estado inicial, exibindo o texto "Escolha uma cor"
BÔNUS
7 - Crie um placar que incremente 3 pontos para cada acerto no jogo
O elemento deve ter o id score.
O valor inicial dele deve ser 0.
A cada acerto, é incrementado 3 pontos ao placar
Ao clicar no botão reiniciar, o placar NÃO deve ser resetado
DURANTE O DESENVOLVIMENTO
warning RECOMENDAMOS QUE VOCÊ FIQUE ATENTO ÀS ISSUES DO CODE CLIMATE, PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO. A PARTIR DO BLOCO 6 SEU PROJETO SOMENTE SERÁ AVALIADO SE NÃO TIVER ISSUES NO CODE CLIMATE! warning

Faça commits das alterações que você fizer no código regularmente;

Lembre-se de sempre após um (ou alguns) commits atualizar o repositório remoto (o famoso git push);

Os comandos que você utilizará com mais frequência são:

git status (para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage);

git add (para adicionar arquivos ao stage do Git);

git commit (para criar um commit com os arquivos que estão no stage do Git);

git push -u nome-da-branch (para enviar o commit para o repositório remoto na primeira vez que fizer o push de uma nova branch);

git push (para enviar o commit para o repositório remoto após o passo anterior).

DEPOIS DE TERMINAR O DESENVOLVIMENTO - OPCIONAL, PORÉM MUITO IMPORTANTE! <3
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

Boas vindas ao repositório do projeto de adivinhação de Cor!
Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv rocket

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

spiral_notepad ANTES DE COMEÇAR A DESENVOLVER:
Clone o repositório
git@github.com:tryber/sd-09-project-color-guess.git.
Entre na pasta do repositório que você acabou de clonar:
cd sd-09-project-color-guess
Crie uma branch a partir da branch master
Verifique que você está na branch master
Exemplo: git branch
Se não estiver, mude para a branch master
Exemplo: git checkout master
Agora, crie uma branch onde você vai guardar os commits do seu projeto
Você deve criar uma branch no seguinte formato: nome-de-usuario-nome-do-projeto
Exemplo: git checkout -b joaozinho-project-color-guess
Crie na raiz do projeto os arquivos que você precisará desenvolver:
Verifique que você está na raiz do projeto
Exemplo: pwd -> o retorno vai ser algo tipo /Users/joaozinho/code/sd-09-project-color-guess
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
Usando o exemplo anterior: git push -u origin joaozinho-project-color-guess
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

Este Pull Request deverá conter os arquivos index.html, style.css e script.js que conterão seu código HTML, CSS e JavaScript, respectivamente.

Prazo para entrega
O Prazo para entrega é de 7 dias corridos após o último dia de projeto.

Exemplo: Se o último dia de projeto aconteceu na quarta-feira, dia 17 de junho, seu prazo final de entrega será na quarta-feira 24 de junho às 14 horas.

Vale ressaltar que os projetos podem ter mais de um dia de duração, por isso o prazo de 7 dias é contado à partir do último dia de projeto.

warning É importante que seus arquivos tenham exatamente estes nomes! warning
Você pode adicionar outros arquivos se julgar necessário. Qualquer dúvida, procure a Pessoa Instrutora que te acompanha.

Lembre-se que você pode consultar nosso conteúdo sobre Git & GitHub sempre que precisar!

Requisitos do projeto
bulbVeja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode e deve ir além para deixar o projeto com a sua cara e impressionar à todos!
Gif exibindo um jogo de adivinhar a cor

warning Leia-os atentamente e siga à risca o que for pedido. Em particular, atente-se para os nomes de ids que alguns elementos de seu projeto devem possuir. warning
O não cumprimento de um requisito, total ou parcialmente, impactará em sua avaliação.

eyes Observações importantes:
Os requisitos do seu projeto são avaliados automaticamente, sendo utilizada a resolução de tela de 1366 x 768 (1366 pixels de largura por 768 pixels de altura).

warning Logo, recomenda-se desenvolver seu projeto usando a mesma resolução, via instalação deste plugin do Chrome para facilitar a configuração da resolução. warning
Atente-se para o tamanho das imagens que você utilizará neste projeto. Não utilize imagens com um tamanho maior que 500Kb.

warning Utilize uma ferramenta como esta para redimensionar as imagens. warning
Caso a avaliação falhe com alguma mensagem de erro parecida com [409:0326/130838.878602:FATAL:memory.cc(22)] Out of memory. size=4194304, provavelmente as imagens que você está utilizando estão muito grandes. Tente redimensiona-las para um tamanho menor.

Para verificar se a sua avaliação foi computada com sucesso, você pode verificar os detalhes da execução do avaliador.

Na página do seu Pull Request, acima do "botão de merge", procure por "Evaluator job" e clique no link "Details";

Na página que se abrirá, procure pela linha "Cypress evaluator step" e clique nela;

Analise os resultados a partir da mensagem "(Run Starting)";

Caso tenha dúvidas, consulte este vídeo ou procure as pessoas instrutoras.

Você tem liberdade para adicionar novos comportamentos ao seu projeto, seja na forma de aperfeiçoamentos em requisitos propostos ou novas funcionalidades, desde que tais comportamentos adicionais não conflitem com os requisitos propostos.

Em outras palavras, você pode fazer mais do que for pedido, mas nunca menos.
Contudo, tenha em mente que nada além do que for pedido nos requisitos será avaliado. Esta é uma oportunidade de você exercitar sua criatividade e experimentar com os conhecimentos adquiridos.

Requisitos Obrigatórios:
Neste projeto, você implementará um adivinhador de cor RGB. Ou seja, dada uma string RGB, você irá fornecer 6 alternativas visuais de cores, sendo uma delas a correta! Você poderá estilizar seu projeto da forma que desejar desde que todos os requisitos sejam cumpridos. Use sua imaginação! brain

Requisitos do projeto
1 - O seu site deve possuir um título com o nome do seu jogo
O id do seu título deve ser title
2 - A página deve possuir o texto com o código RGB a ser adivinhado
O seu id deve ser rgb-color
Esse texto deve conter os três números das cores RGB a ser adivinhada, no seguinte formato: (168, 34, 1)
3 - A página deve conter opções de cores para serem adivinhadas
Deve conter 6 circulos como opção de cor de adivinhação
A class de todos os circulos deve ser ball
4 - As cores das bolas devem ser geradas dinâmicamente
Ao carregar a página, as cores de cada um dos 6 circulos coloridos deve ser geradas via JavaScript
5 - Ao clicar em um circulo colorido, deve ser mostrado um texto indicando se está correto
O seu id do elemento deve ser answer
Quando o jogo é iniciado, o texto exibido deve ser "Escolha uma cor"
Se o circulo colorido for o correto, deve ser exibido o texto "Acertou!"
Se o circulo colorido for o incorreta, deve ser exibido o texto "Errou! Tente novamente!"
6 - Crie um botão para iniciar/reiniciar o jogo
O botão deve ter o id reset-game.
Ao clicar no botão, novas cores devem ser geradas via JavaScript e o elemento rgb-color deve ser atualizado
Ao clicar no botão, o elemento answer deve voltar ao estado inicial, exibindo o texto "Escolha uma cor"
BÔNUS
7 - Crie um placar que incremente 3 pontos para cada acerto no jogo
O elemento deve ter o id score.
O valor inicial dele deve ser 0.
A cada acerto, é incrementado 3 pontos ao placar
Ao clicar no botão reiniciar, o placar NÃO deve ser resetado
DURANTE O DESENVOLVIMENTO
warning RECOMENDAMOS QUE VOCÊ FIQUE ATENTO ÀS ISSUES DO CODE CLIMATE, PARA RESOLVÊ-LAS ANTES DE FINALIZAR O DESENVOLVIMENTO. A PARTIR DO BLOCO 6 SEU PROJETO SOMENTE SERÁ AVALIADO SE NÃO TIVER ISSUES NO CODE CLIMATE! warning

Faça commits das alterações que você fizer no código regularmente;

Lembre-se de sempre após um (ou alguns) commits atualizar o repositório remoto (o famoso git push);

Os comandos que você utilizará com mais frequência são:

git status (para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage);

git add (para adicionar arquivos ao stage do Git);

git commit (para criar um commit com os arquivos que estão no stage do Git);

git push -u nome-da-branch (para enviar o commit para o repositório remoto na primeira vez que fizer o push de uma nova branch);

git push (para enviar o commit para o repositório remoto após o passo anterior).

DEPOIS DE TERMINAR O DESENVOLVIMENTO - OPCIONAL, PORÉM MUITO IMPORTANTE! <3
Para sinalizar que o seu projeto está pronto para o "Code Review" dos seus colegas, faça o seguinte:

Vá até a página DO SEU Pull Request, adicione a label de "code-review" e marque seus colegas:

No menu à direita, clique no link "Labels" e escolha a label code-review;

No menu à direita, clique no link "Assignees" e escolha o seu usuário;

No menu à direita, clique no link "Reviewers" e digite students, selecione o time tryber/students-sd-09.

Caso tenha alguma dúvida, aqui tem um video explicativo.

REVISANDO UM PULL REQUEST
Use o conteúdo sobre Code Review para te ajudar a revisar os Pull Requests.

#VQV rocket
