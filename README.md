# NBA & NYTimes Article Search
Tecnologias Utilizadas:
  1. NodeJS(Axion);
  2. Docker;
  3. Kubernetes;
  4. CSS;
  5. HTML;
  6. Javascript;

***
## API 1: NBA Estatísticas:
A API de estatísticas da NBA é uma ferramenta valiosa que oferece acesso a informações detalhadas sobre jogadores, equipes e partidas da NBA.
## API 2: NY Times:
A API do New York Times é uma ferramenta que oferece acesso a uma ampla gama de conteúdo jornalístico, como notícias, artigos e mídia.
## Objetivo do Projeto:
O objetivo do projeto é criar uma aplicação que consuma as duas API's e exiba a noticia mais recente de um jogador da NBA.

## Arquitetura do Projeto:
O Backend foi desenvolvido utilizando o NodeJS para consumir as duas API's e o Frontend foi desenvolvido utilizando HTML, CSS e Javascript. O projeto foi então conteinerizado.

Os containers foram hospedados na AWS utilizando os serviços ECR (Elastic Container Registry) e o Frontend é executado localmente utilizando o Docker.

![Diagrama de Arquitetura](/Front_end/assets/Diagrama%20.jpg)


## Utilização do Projeto:
Para utilizar o projeto é necessário ter o NodeJS e Docker instalado na máquina, após isso basta clonar o repositório e executar o comando `npm install` para instalar as dependências do projeto.

Após isso é necessário inicializar a dependência Frontend localmente pelo Docker utilizando o comando `docker build -t front -f Dockerfile . `, isso criará uma imagem com o nome de front, após isso basta executar o comando `docker run -d -p 3000:3000 front` para inicializar o container na porta 3000 no local host.

Após isso basta acessar o endereço `http://localhost:3000/` para visualizar a aplicação.


## Dificuldades Encontradas:
1. Utilização dos servições AWS;
- A utilização dos serviços AWS foi um desafio, pois não possuia conhecimento prévio e os videos e artigos relacionados são antigos;
- A maioria dos videos utilizam tecnologias restristas aos niveis mais básicos de assinatura.
2. Comunicação entre o Frontend e o Backend;
***

