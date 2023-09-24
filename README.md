# TodoList Fullstack

Esse é um projeto de lista de tarefas que abrange tanto o front-end quanto o back-end, oferecendo uma experiência completa de desenvolvimento web full stack.
Este projeto foi inicialmente desenvolvido durante o curso de Desenvolvimento Web na Trybe, no módulo de back-end.

## Visão Geral

O front-end é construído com React.js e JavaScript, enquanto o back-end utiliza Express.js para fornecer uma API RESTful e se comunica com um banco de dados MySQL.
A arquitetura em camadas (Model, Service e Controller) no back-end separa a lógica de negócios das operações de banco de dados e da gerência de requisições,
tornando-o um exemplo ideal de boas práticas de desenvolvimento.
A aplicação ainda está desenvolvimento.

## Tecnologias Utilizadas

- Front-end: React.js | JavaScript
- Back-end: Express.js | JavaScript
- Banco de Dados: MySQL
- Outras tecnologias: Node.js | Docker

## Estrutura do Projeto

O back-end do projeto está organizado em camadas:

- Camada de Model: Responsável pelas queries e comunicação com o banco de dados.
- Camada de Controller: Gerencia as requisições e respostas da API.
- Camada de Serviço: Lida com a lógica de negócios e regras de aplicação.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- NPM
- Docker e Docker Compose

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/enzogennarii/todolist-fullstack.git && cd todolist-fullstack
```

2. Suba a aplicação com Docker:

```bash
docker-compose up -d
```

<!--
## Uso
Descreva aqui como usar a sua aplicação e forneça exemplos de endpoints da API, telas do front-end, ou qualquer informação relevante para os usuários.
-->

## Contato

Se você tiver alguma dúvida ou sugestão, entre em contato [comigo](https://github.com/enzogennarii).
