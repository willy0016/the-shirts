# the-shirts

### Grupo: Mateus Borges e Guimarães, Willy Brener e Hugo Leonardo

## Decrição do projeto:

O projeto "The-shirts" é uma aplicação web desenvolvida com o objetivo de oferecer aos usuários uma plataforma para visualização e compra de camisetas online. A aplicação é construída com base em tecnologias modernas, incluindo React no frontend e Node.js com Express.js no backend.

Os usuários podem navegar pelo catálogo de camisetas disponíveis, visualizar detalhes sobre cada produto, como imagem, descrição e preço, e adicionar itens ao carrinho de compras. Além disso, a aplicação oferece funcionalidades como carrosséis de imagens, navegação entre páginas e integração com um banco de dados MongoDB para armazenamento de produtos e informações do carrinho de compras.

O frontend da aplicação é responsável por fornecer uma experiência de usuário intuitiva e responsiva, com uma interface visualmente atraente e fácil de usar. O backend é responsável por processar as requisições dos clientes, fornecer os dados necessários para a interface do usuário e gerenciar o estado da aplicação, incluindo o gerenciamento do carrinho de compras e a persistência dos dados no banco de dados.

No geral, o projeto "The-shirts" visa proporcionar aos usuários uma experiência de compra online eficiente e agradável, oferecendo uma variedade de camisetas de alta qualidade e uma interface de usuário moderna e intuitiva.

## Tecnologias Utilizadas

### Frontend:

- **HTML (Hypertext Markup Language):** Linguagem de marcação utilizada para criar a estrutura e o conteúdo das páginas web. Define os elementos e sua organização na página.

- **CSS (Cascading Style Sheets):** Linguagem de estilo utilizada para controlar a apresentação visual das páginas web. Define o layout, cores, fontes e estilos de elementos HTML para criar uma experiência visual agradável e consistente.

- **JavaScript:** Linguagem de programação de alto nível e dinâmica utilizada no lado do cliente para adicionar interatividade às páginas, manipular o DOM (Document Object Model) e realizar operações assíncronas, como requisições HTTP.

- **React:** Biblioteca JavaScript de código aberto para criar interfaces de usuário, especialmente para single-page applications (SPAs). No projeto, o React é usado para construir a interface do usuário, criar componentes reutilizáveis e gerenciar o estado da aplicação.

- **Vite:** Construtor de aplicações web extremamente rápido e configurável que utiliza o ESM (ECMAScript Modules) para carregar os módulos. Usado para compilar o código JavaScript, fornecer um ambiente de desenvolvimento rápido e eficiente, e facilitar o desenvolvimento moderno de aplicações web.

- **Vite-plugin-svgr:** Plugin Vite que permite importar arquivos SVG diretamente como componentes React. Facilita a manipulação e o uso de imagens SVG no projeto.

- **React Router Dom:** Biblioteca que possibilita a navegação entre diferentes componentes em uma aplicação React. Usada para criar rotas e gerenciar a navegação entre as páginas da aplicação.

- **Swiper:** Biblioteca de slider/touch/swipe para React. Utilizada para criar carrosséis e galerias de imagens com funcionalidades de swipe.

- **"@studio-freight/Lenis": ^1.0.35:** Biblioteca responsável por implementar o scroll suave no site. Ela possibilita uma transição suave entre as seções da página, melhorando a experiência do usuário ao navegar pelo conteúdo do site.

### Backend:

- **Node.js:** Plataforma de desenvolvimento de aplicações em JavaScript, baseada no motor V8 do Google Chrome. Utilizada como ambiente de execução para o backend.

- **Express.js:** Framework web para Node.js que simplifica o processo de criação de APIs e aplicações web. Utilizado para criar e gerenciar rotas, lidar com requisições HTTP e realizar outras tarefas relacionadas ao servidor.

- **MongoDB:** Banco de dados NoSQL orientado a documentos. Utilizado para armazenar e gerenciar os dados da aplicação, como informações de produtos, usuários, e outras informações relevantes.

- **Mongoose:** Biblioteca do Node.js que facilita a interação com o MongoDB, fornecendo uma camada de modelagem de dados mais simples e intuitiva. Utilizado para definir os modelos de dados, criar esquemas e realizar operações de CRUD no banco de dados MongoDB.

## Como Utilizar:

### Passo 1:

- Instale o Node.js.
- Faça o download dos seguintes repositórios: [the-shirts](https://github.com/MateusBorgesGuimaraes/the-shirts) ( front-end ), [shop-api](https://github.com/MateusBorgesGuimaraes/shop-api) ( back-end ).

### Passo 2:

- Abra o arquivo .env no repositorio shop-api.
- Insira os segredos a seguir:
- MONGO_URL: secret
- PASS_SEC: secret
- JWT_SEC: secret
- Após inserir os segredos, dentro da pasta do repositório shop-api clique com o botão direito do mouse em uma área em branco, abra o terminal e use o comando ( npm start ) para iniciar a API.

### Passo 3:

- Dentro da pasta do repositório the-shirts clique com o botão direito do mouse em uma área em branco, abra o terminal e use o comando ( npm run dev ).

### Licença

MIT
