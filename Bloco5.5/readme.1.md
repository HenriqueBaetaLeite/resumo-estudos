TURMA 08
Boas vindas ao repositório do projeto Arte com Pixels!
Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv rocket

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

Instruções para entregar seu projeto:
spiral_notepadANTES DE COMEÇAR A DESENVOLVER:
Clone o repositório
git clone https://github.com/tryber/sd-08-project-pixels-art.git.
Entre na pasta do repositório que você acabou de clonar:
cd sd-08-project-pixels-art
Crie uma branch a partir da branch master
Verifique que você está na branch master
Exemplo: git branch
Se não estiver, mude para a branch master
Exemplo: git checkout master
Agora, crie uma branch onde você vai guardar os commits do seu projeto
Você deve criar uma branch no seguinte formato: nome-de-usuario-nome-do-projeto
Exemplo: git checkout -b mariazinha-meme-generator-project
Crie na raiz do projeto os arquivos que você precisará desenvolver:
Verifique que você está na raiz do projeto
Exemplo: pwd -> o retorno vai ser algo tipo /Users/mariazinha/code/sd-08-project-pixels-art
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
Usando o exemplo anterior: git push -u origin mariazinha-meme-generator-project
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
exemplo de arte com pixels

warning Leia-os atentamente e siga à risca o que for pedido. Em particular, atente-se para os nomes de ids e classes que alguns elementos de seu projeto devem possuir. Não troque ids por classes ou vice-versa warning
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
Neste projeto, você implementará um editor de arte com pixels.
Ou seja, dada uma paleta de cores e um quadro composto por pixels, você vai permitir que quem usa consiga pintar o que quiser no quadro! woman_artist

1 - A página deve possuir o título "Paleta de Cores".
As seguintes verificações serão feitas:
O título deverá ficar dentro de uma tag h1 com o id denominado title;

O texto do título deve ser exatamente "Paleta de Cores".

2 - A página deve possuir uma paleta de quatro cores distintas.
As seguintes verificações serão feitas:
A paleta de cores deve ser um elemento com id denominado color-palette, ao passo que cada cor individual da paleta de cores deve possuir a classe color;

A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa. A única cor não permitida na paleta é a cor branca.;

Cada elemento da paleta de cores deverá ter uma borda preta, sólida e com 1 pixel de largura;

A paleta de cores deverá listar todas as cores disponíveis para utilização lado a lado, e deverá ser posicionada abaixo do título "Paleta de Cores";

A paleta de cores não deve conter cores repetidas.

3 - A cor preta deve ser a primeira na paleta de cores.
As seguintes verificações serão feitas:
As demais cores podem ser escolhidas livremente.
4 - A página deve possuir um quadro de pixels, com 25 pixels.
As seguintes verificações serão feitas:
O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;

O quadro de "pixels" deve possuir o id denominado pixel-board, ao passo que cada "pixel" individual dentro do quadro deve possuir a classe denominada pixel;

A cor inicial dos "pixels" dentro do quadro, ao abrir a página, deve ser branca;

O quadro de "pixels" deve aparecer abaixo da paleta de cores.

5 - Cada elemento do quadro de pixels deve possuir 40 pixels de largura e 40 pixels de altura e ser delimitado por uma borda preta de 1 pixel.
As seguintes verificações serão feitas:
O quadro de pixels tem altura e comprimento de 5 elementos;

40 pixels deve ser o tamanho total do elemento, incluindo seu conteúdo e excluindo a borda preta, que deve ser criada à parte.

6 - Ao carregar a página, a cor preta da paleta já deve estar selecionada para pintar os pixels.
As seguintes verificações serão feitas:
O elemento da cor preta deve possuir, inicialmente, a classe selected;

Note que o elemento que deverá receber a classe selected deve ser um dos elementos que possuem a classe color, como especificado no requisito 2.

7 - Ao clicar em uma das cores da paleta, a cor selecionada é que vai ser usada para preencher os pixels no quadro.
As seguintes verificações serão feitas:
A classe selected deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

Somente uma das cores da paleta deve ter a classe selected de cada vez;

Note que os elementos que deverão receber a classe selected devem ser os mesmos elementos que possuem a classe color, como especificado no requisito 2.

8 - Ao clicar em um pixel dentro do quadro após selecionar uma cor na paleta, o pixel deve ser preenchido com esta cor.
As seguintes verificações serão feitas:
Ao carregar a página deve ser possível pintar os pixels de preto;

Após selecionar uma outra cor na paleta, deve ser possível pintar os pixels com essa cor;

Somente o pixel que foi clicado deverá ser preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.

9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
As seguintes verificações serão feitas:
O botão deve ter o id denominado clear-board;

O botão deve estar posicionado entre a paleta de cores e o quadro de pixels;

O texto do botão deve ser "Limpar".

Requisitos Bônus:
10 - Faça o quadro de pixels ter seu tamanho definido pelo usuário.
As seguintes verificações serão feitas:
Crie um input e um botão que permitam definir um quadro de pixels com tamanho entre 5 e 50. Ao clicar no botão, deve ser gerado um quadro de N pixels de largura e N pixels de altura, onde N é o número inserido no input;

Ou seja, se o valor passado para o input for 7, ao clicar no botão, vai ser gerado um quadro de 49 pixels (7 pixels de largura x 7 pixels de altura);

O input deve ter o id denominado board-size e o botão deve ter o id denominado generate-board;

O input só deve aceitar número maiores que zero. Essa restrição deve ser feita usando os atributos do elemento input;

O botão deve conter o texto "VQV";

O input deve estar posicionado entre a paleta de cores e o quadro de pixels;

O botão deve estar posicionado ao lado do input;

Se nenhum valor for colocado no input ao clicar no botão, mostre um alert com o texto: "Board inválido!";

O novo quadro deve ter todos os pixels preenchidos com a cor branca.

11 - Limite o tamanho do mínimo e máximo do board.
As seguintes verificações serão feitas:
Caso o valor digitado no input board-sze fuja do intervalo de 5 a 50, faça:

Valor menor que 5, considerar 5 como padrão;

Valor maior que 50, considerar 50 como padrão.

12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.
As seguintes verificações serão feitas:
A cor preta ainda precisa estar presente e deve ser a primeira na sua paleta de cores.
Dicas
Você pode pesquisar sobre a propriedade display do CSS, especificamente sobre as opções table, table-row e table-cell para te ajudar a posicionar os elementos;

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
Boas vindas ao repositório do projeto Arte com Pixels!
Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv rocket

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

Instruções para entregar seu projeto:
spiral_notepadANTES DE COMEÇAR A DESENVOLVER:
Clone o repositório
git clone git@github.com:tryber/sd-09-project-pixels-art.git.
Entre na pasta do repositório que você acabou de clonar:
cd sd-09-project-pixels-art
Crie uma branch a partir da branch master
Verifique que você está na branch master
Exemplo: git branch
Se não estiver, mude para a branch master
Exemplo: git checkout master
Agora, crie uma branch onde você vai guardar os commits do seu projeto
Você deve criar uma branch no seguinte formato: nome-de-usuario-nome-do-projeto
Exemplo: git checkout -b mariazinha-project-pixels-art
Crie na raiz do projeto os arquivos que você precisará desenvolver:
Verifique que você está na raiz do projeto
Exemplo: pwd -> o retorno vai ser algo tipo /Users/mariazinha/code/sd-0x-block5-project-pixels-art
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
Usando o exemplo anterior: git push -u origin mariazinha-meme-generator-project
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
exemplo de arte com pixels

warning Leia-os atentamente e siga à risca o que for pedido. Em particular, atente-se para os nomes de ids e classes que alguns elementos de seu projeto devem possuir. Não troque ids por classes ou vice-versa warning
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
Neste projeto, você implementará um editor de arte com pixels.
Ou seja, dada uma paleta de cores e um quadro composto por pixels, você vai permitir que quem usa consiga pintar o que quiser no quadro! woman_artist

1 - A página deve possuir o título "Paleta de Cores".
As seguintes verificações serão feitas:
O título deverá ficar dentro de uma tag h1 com o id denominado title;

O texto do título deve ser exatamente "Paleta de Cores".

2 - A página deve possuir uma paleta de quatro cores distintas.
As seguintes verificações serão feitas:
A paleta de cores deve ser um elemento com id denominado color-palette, ao passo que cada cor individual da paleta de cores deve possuir a classe color;

A cor de fundo de cada elemento da paleta deverá ser a cor que o elemento representa. A única cor não permitida na paleta é a cor branca.;

Cada elemento da paleta de cores deverá ter uma borda preta, sólida e com 1 pixel de largura;

A paleta de cores deverá listar todas as cores disponíveis para utilização lado a lado, e deverá ser posicionada abaixo do título "Paleta de Cores";

A paleta de cores não deve conter cores repetidas.

3 - A cor preta deve ser a primeira na paleta de cores.
As seguintes verificações serão feitas:
As demais cores podem ser escolhidas livremente.
4 - A página deve possuir um quadro de pixels, com 25 pixels.
As seguintes verificações serão feitas:
O quadro de "pixels" deve ter 5 elementos de largura e 5 elementos de comprimento;

O quadro de "pixels" deve possuir o id denominado pixel-board, ao passo que cada "pixel" individual dentro do quadro deve possuir a classe denominada pixel;

A cor inicial dos "pixels" dentro do quadro, ao abrir a página, deve ser branca;

O quadro de "pixels" deve aparecer abaixo da paleta de cores.

5 - Cada elemento do quadro de pixels deve possuir 40 pixels de largura e 40 pixels de altura e ser delimitado por uma borda preta de 1 pixel.
As seguintes verificações serão feitas:
O quadro de pixels tem altura e comprimento de 5 elementos;

40 pixels deve ser o tamanho total do elemento, incluindo seu conteúdo e excluindo a borda preta, que deve ser criada à parte.

6 - Ao carregar a página, a cor preta da paleta já deve estar selecionada para pintar os pixels.
As seguintes verificações serão feitas:
O elemento da cor preta deve possuir, inicialmente, a classe selected;

Note que o elemento que deverá receber a classe selected deve ser um dos elementos que possuem a classe color, como especificado no requisito 2.

7 - Ao clicar em uma das cores da paleta, a cor selecionada é que vai ser usada para preencher os pixels no quadro.
As seguintes verificações serão feitas:
A classe selected deve ser adicionada à cor selecionada na paleta, ao mesmo tempo em que é removida da cor anteriormente selecionada;

Somente uma das cores da paleta deve ter a classe selected de cada vez;

Note que os elementos que deverão receber a classe selected devem ser os mesmos elementos que possuem a classe color, como especificado no requisito 2.

8 - Ao clicar em um pixel dentro do quadro após selecionar uma cor na paleta, o pixel deve ser preenchido com esta cor.
As seguintes verificações serão feitas:
Ao carregar a página deve ser possível pintar os pixels de preto;

Após selecionar uma outra cor na paleta, deve ser possível pintar os pixels com essa cor;

Somente o pixel que foi clicado deverá ser preenchido com a cor selecionada, sem influenciar na cor dos demais pixels.

9 - Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
As seguintes verificações serão feitas:
O botão deve ter o id denominado clear-board;

O botão deve estar posicionado entre a paleta de cores e o quadro de pixels;

O texto do botão deve ser "Limpar".

Requisitos Bônus:
10 - Faça o quadro de pixels ter seu tamanho definido pelo usuário.
As seguintes verificações serão feitas:
Crie um input e um botão que permitam definir um quadro de pixels com tamanho entre 5 e 50. Ao clicar no botão, deve ser gerado um quadro de N pixels de largura e N pixels de altura, onde N é o número inserido no input;

Ou seja, se o valor passado para o input for 7, ao clicar no botão, vai ser gerado um quadro de 49 pixels (7 pixels de largura x 7 pixels de altura);

O input deve ter o id denominado board-size e o botão deve ter o id denominado generate-board;

O input só deve aceitar número maiores que zero. Essa restrição deve ser feita usando os atributos do elemento input;

O botão deve conter o texto "VQV";

O input deve estar posicionado entre a paleta de cores e o quadro de pixels;

O botão deve estar posicionado ao lado do input;

Se nenhum valor for colocado no input ao clicar no botão, mostre um alert com o texto: "Board inválido!";

O novo quadro deve ter todos os pixels preenchidos com a cor branca.

11 - Limite o tamanho do mínimo e máximo do board.
As seguintes verificações serão feitas:
Caso o valor digitado no input board-sze fuja do intervalo de 5 a 50, faça:

Valor menor que 5, considerar 5 como padrão;

Valor maior que 50, considerar 50 como padrão.

12 - Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.
As seguintes verificações serão feitas:
A cor preta ainda precisa estar presente e deve ser a primeira na sua paleta de cores.
Dicas
Você pode pesquisar sobre a propriedade display do CSS, especificamente sobre as opções table, table-row e table-cell para te ajudar a posicionar os elementos;

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
