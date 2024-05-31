
# Juracy Maria Brosig - PAC 2024/06

## Alunos
- Eric Gabriel Caetano
- Felipe da Silva Chawischi
- Gabriel Felipe Alves Bandoch
- Gabriel Henrique Ferreira
- Gustavo Felipe Cachoeira
- Lucas Grime Ceola


## Descrição
Este projeto é uma aplicação web desenvolvida utilizando Node.js, Express, MySQL e outras tecnologias auxiliares. A aplicação permite upload de arquivos, gerenciamento de posts, e serve páginas estáticas. 

## Estrutura do Projeto
A estrutura de diretórios do projeto é a seguinte:

```
config/
  db.js
Controller/
  controller.js
css/
FrontJS/
img/
Páginas/
routes/
  routes.js
app.js
```

## Configuração do Ambiente

### Pré-requisitos
- Node.js (versão 14 ou superior)
- MySQL

### Passos para Configuração

1. **Clone o Repositório**
   
   ```bash
   git clone https://github.com/Gabrielbandoch/PAC-2024.git
   cd PAC-2024
   ```

2. **Instale as Dependências**

   Execute o comando abaixo para instalar todas as dependências necessárias:

   ```bash
   npm install
   ```

3. **Configure o Banco de Dados**

   Certifique-se de que você tem o MySQL instalado e rodando em sua máquina. Crie um banco de dados chamado `testeQuill`.

   ```sql
   CREATE DATABASE testeQuill;
   ```

   Verifique e atualize a string de conexão no arquivo `config/db.js` se necessário:

   ```js
   const connection = await mysql.createConnection("mysql://root:@localhost:3306/testeQuill");
   ```

4. **Crie a Estrutura de Tabelas**

   ```sql
   CREATE TABLE posts (
       id INT AUTO_INCREMENT PRIMARY KEY,
       title VARCHAR(255) NOT NULL,
       content TEXT,
       imagePath VARCHAR(255),
       videoPath VARCHAR(255),
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

5. **Inicialize o Servidor**

   Execute o comando abaixo para iniciar o servidor:

   ```bash
   npm start
   ```

   O servidor estará rodando na porta 3000.

## Funcionalidades

- **Upload de Arquivos**
  - Upload de imagens e vídeos na rota `/salvar-dados`.

- **Gerenciamento de Posts**
  - Criar, ler, atualizar e deletar posts nas respectivas rotas (`/obter-posts`, `/obter-post/:id`, `/atualizar-post/:id`, `/deletar-post/:id`).

- **Servir Arquivos Estáticos**
  - Servir arquivos CSS, JavaScript e imagens estáticas.


## Configuração do Multer

O Multer é utilizado para upload de arquivos. A configuração está em `routes/routes.js` e `app.js`. Certifique-se de que as pastas `img_bd/` e `uploads/` existem no diretório raiz do projeto ou crie-as manualmente.

## Problemas Comuns e Soluções

- **Erro de Conexão com o Banco de Dados**
  - Verifique se o MySQL está rodando e se as credenciais estão corretas em `config/db.js`.

- **Erro ao Salvar Dados**
  - Certifique-se de que as pastas `img_bd/` e `uploads/` possuem permissões de escrita.
