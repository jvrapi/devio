<div align="center" >
<img src="https://devio.com.br/_next/image?url=%2Fimages%2Flogo%2Flogo.webp&w=256&q=75" width="150" />
	<p >
		<a href="#requisitos">Requisitos</a> • 
		<a href="#tecnologias">Tecnologias</a> • 
		<a href="#como-usar">Como usar</a> 
	</p>
	
</div>
<br>

## 📝 Requisitos

<br>

### Obrigatórios

<br>

- [x] Backend para cadastro de produtos

- [x] Pre cadastro de produtos  

- [x] O usuário poderá ver uma pequena quantidade de produtos na tela para 
seleção rápida.

- [x]  O usuário terá a opção de digitar o nome ou código para encontrar o 
produto. 

- [x] O usuário irá poder adicionar/remover itens e acompanhar o resumo do 
pedido. 

- [x] O usuário poderá ver o total e o troco. 

- [x] Deverá poder incluir o nome do cliente para ser entregue o pedido. 

- [x] Todas etapas acima deveram ser em apenas uma tela. 

- [x] O pedido deverá aparecer para a cozinha junto ao nome do cliente. 

- [x] A cozinha poderá dar baixa nos pedidos concluídos. 



<br>

### Opcionais

<br>

- [x] Os pedidos devem aparecer para a cozinha em tempo real.

- [x] O usuário poderá incluir uma observação a cozinha. 

- [x] O usuário poderá atribuir múltiplas formas de pagamento na finalização 
do pedido. 

- [x] Os pedidos baixados devem aparecer em uma tela com o nome do cliente, 
apitando para ser feito a retirada.

<br>

## 🚀 Tecnologias

<br>

### Frontend

<br>

- [ReactJS](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)

- [React Router Dom](https://reactrouter.com/web/guides/quick-start)

- [Styled Components](https://styled-components.com/)

- [React Icons](https://react-icons.github.io/react-icons/)

- [React Toastify](https://github.com/fkhadra/react-toastify)

- [React Tooltip](https://github.com/wwayne/react-tooltip)

- [React Currency Input](https://github.com/jsillitoe/react-currency-input)

- [React Input Mask](https://github.com/sanniassin/react-input-mask)

<br>

### Backend

- [Express](https://expressjs.com/pt-br/)

- [Express Async Errors](https://github.com/davidbanham/express-async-errors)

- [Cors](https://github.com/expressjs/cors)

- [TypeORM](https://typeorm.io/#/)

- [Node Postgres](https://github.com/brianc/node-postgres)

- [Reflect Metadata](https://github.com/rbuckton/reflect-metadata)

- [Dotenv](https://github.com/motdotla/dotenv)

<br>


Em ambos os projetos foi utilizado o [TypeScript](https://www.typescriptlang.org/). Para a integração do frontend com o backend, foi utilizado o [Socketio.io](https://socket.io/).

<br>

## ℹ Como usar
ara clonar e executar este aplicativo, você precisará do [Git](https://git-scm.com), [Node.js v14.16](nodejs.org/) ou superior. Também foi utilizado o [Yarn v1.22.5](https://yarnpkg.com) no projeto. 

Para clonar e rodar o projeto, utilize no seu terminal o comando `git clone https://github.com/jvrapi/devio.git`. Depois, nas pastas `client` e `server`, você deve utilizar o comando `yarn install ou npm install`. 

Também será necessário um banco Postgres para conseguir utilizar o servidor. Caso tenha o [docker compose](https://docs.docker.com/compose/) em sua máquina, a pasta `server` possui um arquivo do docker compose para a criação de um banco de dados Postgres.

Renomeie o arquivo `.env.example` para `.env` e adicione as credenciais do banco de dados no arquivo. 


<div align="center">


Feito com  ❤ por [João Vitor Santos](https://github.com/jvrapi) 👋 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Linkedin-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/joaovitorssdelima/)](https://www.linkedin.com/in/joaovitorssdelima/) 
[![Gmail Badge](https://img.shields.io/badge/-Gmail-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:joaooviitoorr@gmail.com)](mailto:joaooviitoorr@gmail.com) 
[![Hotmail Badge](https://img.shields.io/badge/-Hotmail-0078d4?style=flat-square&logo=microsoft-outlook&logoColor=white&link=mailto:joaooviitorr@hotmail.com)](mailto:joaooviitorr@hotmail.com)
	
</div>