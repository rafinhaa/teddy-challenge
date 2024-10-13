<h4 align="center">
  <img src="container/public/logo.svg" alt="Logo" width="150"/>
</h4>

<h4 align="center">
    <p align="center">
      <a href="#-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-how-to-run-the-project">Run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-info">Info</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
      <a href="#-license">License</a>
  </p>
</h4>

## 🔖 About

A aplicação contém rotas públicas e privadas, a rota pública é uma tela onde é possível fazer o login, o nome fornecido é salvo no local storage
As rotas privadas são as que contém o caminho **/clients**, onde é possível adicionar, editar, excluir e visualizar os clientes
Existe uma rota que contém o caminho **/clients-selected**, onde é possível visualizar os clientes selecionados.

Eu abstraí na pasta **./container/src/services** os arquivos de api e store, criando uma interface para definir o contrato, criei contexts para receber essas abstrações e compartilhar com os componentes filhos, ajudando a testar mais facilmente a aplicação.

Em **./components** está alguns componentes que são usados como micro-frontend pela aplicação **./container**
Todos eles contém testes unitários

- Todos os campos contém validações

## Apresentação

A aplicação foi publicada na vercel e está disponível em [teddy-challenge-front.vercel.app](teddy-challenge-front.vercel.app)

O vídeo da aplicação está disponível em [aqui](https://vimeo.com/1019216603), a apresentação do código está [aqui](https://vimeo.com/1019216573)

## 🚀 Technologies

- [ReactJS](https://react.dev/)
- [Vite](https://vite.dev/)
- [Typescript](https://www.typescriptlang.org/)
- [React Query](https://tanstack.com/query/latest)
- [Zod](https://zod.dev/)
- [React Hook Form](https://www.react-hook-form.com/)
- [Vitest](https://vitest.dev/)

## 🏁 How to run the project

```sh
# Clone the repository
git clone https://github.com/rafinhaa/teddy-challenge.git

## Container
cd teddy-challenge/container

# Install the container dependencies
yarn install

# Start the application
yarn deploy

## components
cd teddy-challenge/components

# Install the components dependencies
yarn install

# Start the application
yarn deploy

```

## ℹ️ Info

É possível iniciar a aplicação utilizando o docker-compose.

```sh
# Clone the repository
git clone https://github.com/rafinhaa/teddy-challenge.git

## Container
cd teddy-challenge

# Run docker compose
docker compose up
```

A aplicação ficará disponível em http://localhost:3000

## 📄 Changelog

## 📝 License

[MIT](LICENSE.txt)

**Free Software, Hell Yeah!**
