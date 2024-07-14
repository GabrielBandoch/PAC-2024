
# Juracy Maria Brosig - PAC 2024/06

## Alunos
- Eric Gabriel Caetano
- Felipe da Silva Chawischi
- Gabriel Felipe Alves Bandoch
- Gabriel Henrique Ferreira
- Gustavo Felipe Cachoeira
- Lucas Grime Ceola

## Demonstração

![Demo GIF](Demonstração/Juracy.gif)

## Descrição
Este projeto é uma aplicação web desenvolvida utilizando Node.js, Express, MySQL e outras tecnologias auxiliares. A aplicação permite upload de arquivos, gerenciamento de posts, e serve páginas estáticas. 

## Estrutura do Projeto
A estrutura de diretórios do projeto é a seguinte:

```
config/
  db.js
public/
  css/
    styles.css
  img/
    images/
  js/
    scripts.js
views/
  admin/
    admin-pages.ejs
  pages.ejs
routes/
  index.js
app.js
README.md
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

   Certifique-se de que você tem o MySQL instalado e rodando em sua máquina. Baixe o database.sql na sua máquina. 
   
   Mova o database.sql para os arquivos do xampp.
   use o comando:
   ```sql
   CREATE DATABASE database
   ```

   Use o comando exit.

   E usa o seguinte comando:

   ```sql
   mysql -u root database < database.sql
   ```

   Verifique e atualize a string de conexão no arquivo `config/db.js` se necessário:

   ```js
   const connection = await mysql.createConnection("mysql://root:@localhost:3306/database");
   ```


4. **Inicialize o Servidor**

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

## Alterações Pendentes:

No frontend, ainda precisamos finalizar o cadastro.html e a responsividade das páginas. No backend, estamos trabalhando na implementação do login e aprimorando o editor de publicações.

## Banco de Dados:

O banco de dados foi estruturado em duas tabelas principais: post e users. Cada uma delas foi projetada para armazenar informações específicas, conforme descrito abaixo:

Tabela post
A tabela post é responsável por armazenar os artigos ou postagens. A estrutura dessa tabela inclui os seguintes campos:

id_post: Um identificador único para cada post, definido como chave primária e gerado automaticamente.

title: O título da postagem, armazenado como uma string de até 255 caracteres.

tags: Tags associadas à postagem, armazenadas como uma string de até 255 caracteres, permitindo categorização e busca eficiente.

synopsis: Uma sinopse ou resumo do conteúdo do post, armazenado como um campo de texto.

content: O conteúdo completo da postagem, armazenado como um campo de texto.

createdAt: A data e hora de criação do post, definida automaticamente para o momento da inserção.
Tabela users

A tabela users armazena informações sobre os usuários do sistema. A estrutura dessa tabela inclui os seguintes campos:

id: Um identificador único para cada usuário, definido como chave primária e gerado automaticamente.

username: O nome de usuário, armazenado como uma string de até 100 caracteres.

email: O e-mail do usuário, armazenado como uma string de até 100 caracteres.

idade: A idade do usuário, armazenada como um número inteiro.

pass: A senha do usuário, armazenada como um número inteiro (embora seja uma prática recomendada armazenar senhas de forma segura, como hashes).