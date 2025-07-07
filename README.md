Desafio Fullstack: Sistema de Gerenciamento de Veículos
Este é um projeto de aplicação web fullstack construído como parte de um desafio técnico. A aplicação permite o gerenciamento de uma frota de veículos, incluindo autenticação de usuários, cadastro de novos usuários e um painel de controle com funcionalidades de CRUD (Criar, Ler, Atualizar, Deletar) para os veículos.

✨ Funcionalidades
Autenticação de Usuários: Sistema de login seguro utilizando JSON Web Tokens (JWT).

Cadastro de Usuários: Página de registro para que novos usuários possam criar suas contas.

Dashboard Interativo: Painel de controle principal com:

Cards com dados resumidos (total de veículos, ativos e inativos).

Tabela com listagem de todos os veículos cadastrados.

CRUD Completo de Veículos:

Criar: Adicionar novos veículos através de um modal.

Ler: Visualizar todos os veículos e seus status.

Atualizar: Editar os dados de um veículo existente.

Arquivar/Desarquivar: Mudar o status de um veículo entre "Ativo" e "Inativo".

Deletar: Remover permanentemente um veículo do sistema.

🛠️ Tecnologias Utilizadas
Back-end
Node.js com Express.js para a criação da API RESTful.

PostgreSQL como banco de dados relacional.

Prisma como ORM para a comunicação com o banco de dados.

JSON Web Token (JWT) para o sistema de autenticação.

Bcrypt.js para a criptografia de senhas.

Zod para validação de esquemas de dados.

Front-end
React para a construção da interface de usuário.

React Router para o gerenciamento de rotas e navegação.

Styled Components para a estilização dos componentes.

Axios para as requisições à API.

React Hook Form e Zod para a validação de formulários.

React Icons para a utilização de ícones.

🖼️ Telas da Aplicação
(Aqui você pode adicionar as screenshots do seu projeto. No GitHub, você pode arrastar e soltar as imagens diretamente no editor do README.md)

Tela de Login

Dashboard Principal

Modal de Cadastro

🚀 Como Executar o Projeto
Para rodar este projeto localmente, siga os passos abaixo:

Clone o repositório:

Bash

git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
Configuração do Back-end:

Navegue até a pasta do back-end: cd backend

Instale as dependências: npm install

Crie um arquivo .env na raiz da pasta backend e configure sua DATABASE_URL do PostgreSQL:

Snippet de código

DATABASE_URL="postgresql://USUARIO:SENHA@HOST:PORTA/NOME_DO_BANCO"
JWT_SECRET="SUA_CHAVE_SECRETA"
Aplique as migrações do banco de dados: npx prisma migrate dev

Inicie o servidor do back-end: npm run dev (ele estará rodando em http://localhost:3333)

Configuração do Front-end:

Abra um novo terminal.

Navegue até a pasta do front-end: cd frontend

Instale as dependências: npm install

Crie um arquivo .env na raiz da pasta frontend com o seguinte conteúdo:

Snippet de código

REACT_APP_API_URL=http://localhost:3333
Inicie a aplicação React: npm start (ela abrirá em http://localhost:3000)

🔑 Credenciais para Teste
Você pode criar um novo usuário através da página de cadastro ou usar o usuário administrador padrão que é criado ao iniciar o servidor pela primeira vez.

E-mail: admin@admin.com

Senha: admin123
