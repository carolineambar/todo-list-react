# To Do List React

## Descrição do Projeto

Esse projeto foi realizado para testar meus conhecimentos utilizando Styled Components para estilização: https://styled-components.com/ e TypeScript com a biblioteca React.Js.

### Proposta:

Uma lista de tarefas, onde é possível criar e deletar categorias de listas de tarefas e dentro de cada categoria criar tarefas que podem ser marcadas como realizadas e deletadas.

## Tecnologias usadas:

<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="40" height="40" /> <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" width="40" height="40" />


Esse projeto foi criado com React + Vite (https://pt.vitejs.dev/guide/).

## Vercel

É possível visualizar a aplicação através do link a seguir [Vercel - To Do List React](https://todo-list-react-ashen.vercel.app/).
Caso opte por visualizar de forma local, seguir os passos abaixo. 

## Começando com React + Vite

Você precisa ter [NPM](https://www.npmjs.com/) instalado para rodar essa aplicação.

#### Clone esse projeto

```
  git clone https://github.com/carolineambar/todo-list-react
```

#### Entre na pasta

```
  cd todo-list-react
```

#### Instale dependencias

```
 npm create vite@latest my-react-app -- --template react
```

#### Para rodar!

```
  npm run dev
```

## Estrutura do projeto

```shell
|-- public
|-- src
|---- api
|------ categories.ts
|------ index.ts
|------ items.ts
|---- assets
|---- components
|------ Category
|-------- Category.styled.ts
|-------- Category.tsx
|-------- index.ts
|------ Item
|-------- Item.styled.ts
|-------- Item.tsx
|-------- index.ts
|------ Navbar
|-------- Navbar.styled.ts
|-------- Navbar.tsx
|-------- index.ts
|---- config
|------ GlobalStyle.ts
|---- types
|------ types.ts
|---- App.styled.ts
|---- App.tsx
|---- main.tsx
|---- vite-env.d.ts
|-- .eslintrc
|-- .gitignore
|-- README.md
|-- db.json
|-- index.html
|-- package-lock.json
|-- package.json
|-- tsconfig.json
|-- tsconfig.node.json
|-- vite.config.ts
```

Na pasta ```src``` estão as pastas de ```components``` onde estão os arquivos contendo as funcionalidades dos componentes (documentos .tsx) e estilos dos componentes com Styled Components nos documentos ts, na pasta ```api``` foi configurado a API para salvar as alterações no banco de dados e o arquivo ```App.tsx``` ficou a aplicação principal.

Os demais arquivos são de configuração do Projeto, como o ```package.json``` que é de configuração do Servidor.

## Futuras melhorias 

Como futura melhoria irei ajustar o desing, layout e estilo do projeto, responsividade, bem como, a estrutura do projeto.
