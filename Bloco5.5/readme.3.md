TURMA 08
Boas vindas ao repositório do projeto Meme Generator!
Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv rocket

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

Instruções para entregar seu projeto:
spiral_notepadANTES DE COMEÇAR A DESENVOLVER:
Clone o repositório
git clone https://github.com/tryber/sd-08-project-meme-generate.git.
Entre na pasta do repositório que você acabou de clonar:
cd sd-08-project-meme-generate
Crie uma branch a partir da branch master
Verifique que você está na branch master
Exemplo: git branch
Se não estiver, mude para a branch master
Exemplo: git checkout master
Agora, crie uma branch onde você vai guardar os commits do seu projeto
Você deve criar uma branch no seguinte formato: nome-de-usuario-nome-do-projeto
Exemplo: git checkout -b joaozinho-meme-generator-project
Crie na raiz do projeto os arquivos que você precisará desenvolver:
Verifique que você está na raiz do projeto
Exemplo: pwd -> o retorno vai ser algo tipo /Users/joaozinho/code/sd-08-project-meme-generate
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
Usando o exemplo anterior: git push -u origin joaozinho-meme-generator-project
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
exemplo de um meme generator

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
Você deve criar um site que permita o upload de uma imagem e a inserção de um texto sobre ela, estilizado de forma apropriada.
Em outras palavras, um meme generator. stuck_out_tongue_winking_eye

1 - O site deve possuir uma caixa de texto com a qual quem usa pode interagir para inserir texto em cima da imagem escolhida.
As seguintes verificações serão feitas:
A caixa onde o texto é inserido deve ter um id denominado text-input;

Você deve criar um elemento para servir de "container" para a imagem e para o texto do meme. Este elemento deve ter um id denominado meme-image-container;

Dentro do elemento de container, você deve criar um outro elemento para mostrar o texto digitado. O elemento de texto deve estar totalmente contido dentro do container e ter o id denominado meme-text;

Se não houver imagem inserida, ele deve ser inserido e estar visível dentro do container vazio onde a imagem aparecerá.

2 - O site deve permitir que quem usa faça upload de uma imagem de seu computador.
As seguintes verificações serão feitas:
Dentro do elemento de container, você deve criar um outro elemento para mostrar a imagem selecionada. Este elemento deve possuir um id denominado meme-image;

O elemento onde é feito o upload da imagem deve ser identificado com o id denominado meme-insert. Este elemento não precisa estar dentro do elemento de container;

A imagem deve estar totalmente contida dentro do elemento identificado como meme-image-container ("totalmente contida" quer dizer que não deve sobrar espaço entre o container e a imagem, e a imagem não deve ultrapassar o tamanho do container);

O texto inserido no elemento text-input deve ser inserido sobre a imagem escolhida meme-image.

3 - O site deve ter uma moldura no container. A moldura deve ter 1 pixel de largura, deve ser preta e do tipo 'solid'. A área onde a imagem aparecerá deve ter fundo branco.
As seguintes verificações serão feitas:
O elemento que serve de container para a imagem deve ter o a cor de fundo branca;

O elemento que serve de container para a imagem deve ter uma borda preta, sólida, com 1 pixel de largura;

A imagem deve estar totalmente contida dentro do elemento identificado como meme-image-container ("totalmente contida" quer dizer que não deve sobrar espaço entre o container e a imagem, e a imagem não deve ultrapassar o tamanho do container).

4 - O texto que será inserido sobre a imagem deve ter uma cor, sombra e tamanho específicos.
As seguintes verificações serão feitas:
O texto do elemento meme-text deve ter uma sombra preta, de 5 pixels na horizontal, 5 pixels na vertical e um raio de desfoque de 5 pixels;

O texto do elemento meme-text deve ter a fonte com o tamanho de 30 pixels;

O texto do elemento meme-text deve estar na cor branca;

5 - Limite o tamanho do texto que o usuário pode inserir.
As seguintes verificações serão feitas:
A quantidade máxima de caracteres digitáveis no elemento text-input deve ser 60.
Requisitos Bônus:
6 - Permita a quem usa customizar o meme escolhido acrescentando a ele uma de três bordas. A página deve ter três botões, que ao serem clicados devem cada um trocar a própria borda ao redor do container.
As seguintes verificações serão feitas:
As bordas devem ser acrescentadas ao container, identificado como meme-image-container;

Os três botões devem ser elementos do tipo button;

Cada elemento button deve ser estilizado de forma a ter a cor de fundo da mesma cor que a moldura que irá colocar no container;

Cada button deve ter o respectivo id e estilizar o container conforme especificado:

Um botão identificado com o id chamado fire deve estilizar o container da imagem com uma borda de 3 pixels, dashed e vermelha.

Um botão com id chamado water deve estilizar o container da imagem com uma borda azul, com 5 pixels do tipo double .

Um botão com id chamado earth deve estilizar o container da imagem com uma borda do tipo groove, verde e com 6 pixels.

Após uma das três bordas ser selecionada, a borda padrão especificada no requisito 3 não deve mais aparecer;

7 - Tenha um conjunto de quatro imagens pré prontas de memes famosos para o usuário escolher. Mostre miniaturas das imagens e, mediante clique do usuário, essa imagem deve aparecer dentro da moldura do elemento de container.
As seguintes verificações serão feitas:
O elemento que mostra as miniaturas dos memes deve ser identificado um um id denominado meme-1 para o primeiro meme, meme-2 para o segundo, meme-3 para o terceiro e meme-4 para o quarto.

As imagens que identificam os memes devem ficar dentro da aplicação, num diretório chamado imgs com os respectivos nomes meme1.png, meme2.png, meme3.png e meme4.png. Atenção também para o formato das imagens! warning

As imagens devem aparecer dentro do container de forma análoga às imagens enviadas por upload para a página.

Dicas
Para fazer este projeto você deverá atribuir ao texto que vai sobre a imagem o estilo position: absolute;. Leia mais sobre ele aqui.

Para que um elemento filho fique posicionado na frente de um elemento container você pode deve utilizar position: relative; na estilização do elemento container e position: absolute no elemento filho. Esse post pode ajudar a entender a solução.

Para receber os dados da imagem e do texto do meme, é preciso utilizar a tag "input". Consulte a documentação sobre os tipo de input text e file.

Para mostrar a imagem selecionada a partir do input no elemento dentro do container, você precisará alterar a propriedade src desse elemento, passando para ele o caminho da imagem que foi carregada no input. Essa resposta pode te ajudar a encontrar uma solução para esse enigma.

Para colocar sua página no GitHub Pages, não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado em uma pasta /projetos/meme-generator.

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

Boas vindas ao repositório do projeto Meme Generator!
Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv rocket

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir desse repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

Instruções para entregar seu projeto:
spiral_notepadANTES DE COMEÇAR A DESENVOLVER:
Clone o repositório
git clone https://github.com/tryber/sd-0x-block5-project-meme-generator.git.
Entre na pasta do repositório que você acabou de clonar:
cd sd-0x-block5-project-meme-generator
Crie uma branch a partir da branch master
Verifique que você está na branch master
Exemplo: git branch
Se não estiver, mude para a branch master
Exemplo: git checkout master
Agora, crie uma branch onde você vai guardar os commits do seu projeto
Você deve criar uma branch no seguinte formato: nome-de-usuario-nome-do-projeto
Exemplo: git checkout -b joaozinho-meme-generator-project
Crie na raiz do projeto os arquivos que você precisará desenvolver:
Verifique que você está na raiz do projeto
Exemplo: pwd -> o retorno vai ser algo tipo /Users/joaozinho/code/sd-0x-block5-project-meme-generator
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
Usando o exemplo anterior: git push -u origin joaozinho-meme-generator-project
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
exemplo de um meme generator

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
Você deve criar um site que permita o upload de uma imagem e a inserção de um texto sobre ela, estilizado de forma apropriada.
Em outras palavras, um meme generator. stuck_out_tongue_winking_eye

1 - O site deve possuir uma caixa de texto com a qual quem usa pode interagir para inserir texto em cima da imagem escolhida.
As seguintes verificações serão feitas:
A caixa onde o texto é inserido deve ter um id denominado text-input;

Você deve criar um elemento para servir de "container" para a imagem e para o texto do meme. Este elemento deve ter um id denominado meme-image-container;

Dentro do elemento de container, você deve criar um outro elemento para mostrar o texto digitado. O elemento de texto deve estar totalmente contido dentro do container e ter o id denominado meme-text;

Se não houver imagem inserida, ele deve ser inserido e estar visível dentro do container vazio onde a imagem aparecerá.

2 - O site deve permitir que quem usa faça upload de uma imagem de seu computador.
As seguintes verificações serão feitas:
Dentro do elemento de container, você deve criar um outro elemento para mostrar a imagem selecionada. Este elemento deve possuir um id denominado meme-image;

O elemento onde é feito o upload da imagem deve ser identificado com o id denominado meme-insert. Este elemento não precisa estar dentro do elemento de container;

A imagem deve estar totalmente contida dentro do elemento identificado como meme-image-container ("totalmente contida" quer dizer que não deve sobrar espaço entre o container e a imagem, e a imagem não deve ultrapassar o tamanho do container);

O texto inserido no elemento text-input deve ser inserido sobre a imagem escolhida meme-image.

3 - O site deve ter uma moldura no container. A moldura deve ter 1 pixel de largura, deve ser preta e do tipo 'solid'. A área onde a imagem aparecerá deve ter fundo branco.
As seguintes verificações serão feitas:
O elemento que serve de container para a imagem deve ter o a cor de fundo branca;

O elemento que serve de container para a imagem deve ter uma borda preta, sólida, com 1 pixel de largura;

A imagem deve estar totalmente contida dentro do elemento identificado como meme-image-container ("totalmente contida" quer dizer que não deve sobrar espaço entre o container e a imagem, e a imagem não deve ultrapassar o tamanho do container).

4 - O texto que será inserido sobre a imagem deve ter uma cor, sombra e tamanho específicos.
As seguintes verificações serão feitas:
O texto do elemento meme-text deve ter uma sombra preta, de 5 pixels na horizontal, 5 pixels na vertical e um raio de desfoque de 5 pixels;

O texto do elemento meme-text deve ter a fonte com o tamanho de 30 pixels;

O texto do elemento meme-text deve estar na cor branca;

5 - Limite o tamanho do texto que o usuário pode inserir.
As seguintes verificações serão feitas:
A quantidade máxima de caracteres digitáveis no elemento text-input deve ser 60.
Requisitos Bônus:
6 - Permita a quem usa customizar o meme escolhido acrescentando a ele uma de três bordas. A página deve ter três botões, que ao serem clicados devem cada um trocar a própria borda ao redor do container.
As seguintes verificações serão feitas:
As bordas devem ser acrescentadas ao container, identificado como meme-image-container;

Os três botões devem ser elementos do tipo button;

Cada elemento button deve ser estilizado de forma a ter a cor de fundo da mesma cor que a moldura que irá colocar no container;

Cada button deve ter o respectivo id e estilizar o container conforme especificado:

Um botão identificado com o id chamado fire deve estilizar o container da imagem com uma borda de 3 pixels, dashed e vermelha.

Um botão com id chamado water deve estilizar o container da imagem com uma borda azul, com 5 pixels do tipo double .

Um botão com id chamado earth deve estilizar o container da imagem com uma borda do tipo groove, verde e com 6 pixels.

Após uma das três bordas ser selecionada, a borda padrão especificada no requisito 3 não deve mais aparecer;

7 - Tenha um conjunto de quatro imagens pré prontas de memes famosos para o usuário escolher. Mostre miniaturas das imagens e, mediante clique do usuário, essa imagem deve aparecer dentro da moldura do elemento de container.
As seguintes verificações serão feitas:
O elemento que mostra as miniaturas dos memes deve ser identificado um um id denominado meme-1 para o primeiro meme, meme-2 para o segundo, meme-3 para o terceiro e meme-4 para o quarto.

As imagens que identificam os memes devem ficar dentro da aplicação, num diretório chamado imgs com os respectivos nomes meme1.png, meme2.png, meme3.png e meme4.png. Atenção também para o formato das imagens! warning

As imagens devem aparecer dentro do container de forma análoga às imagens enviadas por upload para a página.

Dicas
Para fazer este projeto você deverá atribuir ao texto que vai sobre a imagem o estilo position: absolute;. Leia mais sobre ele aqui.

Para que um elemento filho fique posicionado na frente de um elemento container você pode deve utilizar position: relative; na estilização do elemento container e position: absolute no elemento filho. Esse post pode ajudar a entender a solução.

Para receber os dados da imagem e do texto do meme, é preciso utilizar a tag "input". Consulte a documentação sobre os tipo de input text e file.

Para mostrar a imagem selecionada a partir do input no elemento dentro do container, você precisará alterar a propriedade src desse elemento, passando para ele o caminho da imagem que foi carregada no input. Essa resposta pode te ajudar a encontrar uma solução para esse enigma.

Para colocar sua página no GitHub Pages, não é necessário remover o conteúdo que já está lá, você pode apenas adicionar essa nova página. Para isso, todo o conteúdo desse projeto deve ser colocado em uma pasta /projetos/meme-generator.

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
