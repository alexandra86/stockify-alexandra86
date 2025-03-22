<h1 align="center" font-family="pattaya">Stockify</h1><br>

<h2 font-family="pattaya">Tecnologias utilizadas</h2>
<div style="display: inline_block"><br>
<img align="center" alt="Alexandra-Ts" height="30" width="40" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
   <img align="center" alt="Alexandra-Node" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg">
  <img align="center" alt="Alexandra-mariaDB" height="30" width="40" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mariadb/mariadb-original.svg">  
</div><br>

<h2 font-family="pattaya">Descrição</h2><br>
<p font-family="robotto" font-size="16px" line-height="34px" align="justify">
A API é referente a uma aplicação de controle de estoque, que possui algumas funcionalidades como criar, editar, listar e deletar produtos e fornecedores, por exemplo.
</p><br>

<h2 font-family="pattaya">Libs utilizadas</h2><br>
<ul style="display: inline_block">
<li font-family="robotto" font-size="16px">cors: "^2.8.5",</li>
<li font-family="robotto" font-size="16px">dotenv: "^16.4.5"</li>
<li font-family="robotto" font-size="16px">express: "^4.19.2"</li>
<li font-family="robotto" font-size="16px">express-async-errors: "^3.1.1"</li>
<li font-family="robotto" font-size="16px">multer: "^1.4.4"</li>
<li font-family="robotto" font-size="16px">mysql: "^2.18.1"</li>
<li font-family="robotto" font-size="16px">pg: "^8.12.0"</li>
<li font-family="robotto" font-size="16px">reflect-metadata: "^0.2.2">
<li font-family="robotto" font-size="16px">typeorm: "0.3.14"</li>
<li font-family="robotto" font-size="16px">zod: "^3.23.8"</li>
</ul><br>

# Documentação da API

## Tabela de Conteúdos

- [Visão Geral](#1-visão-geral)
- [Diagrama ER](#2-diagrama-er)
- [Início Rápido](#3-início-rápido)
  - [Instalando Dependências](#31-instalando-dependências)
  - [Variáveis de Ambiente](#32-variáveis-de-ambiente)
  - [Migrations](#33-migrations)
- [Autenticação](#4-autenticação)
- [Endpoints](#5-endpoints)

---

## 1. Visão Geral

Visão geral do projeto, um pouco das tecnologias usadas.

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [MariaDB](https://mariadb.com/kb/pt-br/documentacao-mariadb/)
- [TypeORM](https://typeorm.io/)
- [Zod](https://yarnpkg.com/package/zod)

A URL base da aplicação:
http://localhost:3000

---

## 2. Diagrama de Entidade de Relacionamentos (DER)

[ Voltar para o topo ](#tabela-de-conteúdos)

## 3. Início Rápido

[ Voltar para o topo ](#tabela-de-conteúdos)

### 3.1. Instalando Dependências

Clone o projeto em sua máquina e instale as dependências com o comando:

```
yarn
```

### 3.2. Variáveis de Ambiente

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
PORT=application_run_port_must_be_an_integer

SECRET_KEY=jwt_secret_key
EXPIRES_IN=jwt_expires_in

NODE_ENV=dev

DATABASE_URL=mariadb://<user>:<password>@<host>:<port>/<database>

```

Configure suas variáveis de ambiente com suas credenciais do MariaDB e uma nova database da sua escolha.

### 3.3. Migrations

Execute as migrations com o comando:

```
yarn typeorm migration:generate src/migrations/create<nome-da-class> -d src/data-source.ts
yarn typeorm migration:run -d src/data-source.ts
```

## 4. Endpoints

[ Voltar para o topo ](#tabela-de-conteúdos)

## **products**

A tabela products é definida como:

| Campo        | Tipo   | Descrição                           |
| ------------ | ------ | ----------------------------------- |
| id           | number | Identificador único do produto      |
| nameproduct  | string | O nome do produto.                  |
| codbarras    | string | O código de barras do produto.      |
| description  | string | A descrição do produto.             |
| qdestoque    | string | A quantidade em estoque do produto. |
| category     | string | A categoria do produto.             |
| datavalidade | string | A data de validade do produto.      |
| imgproduct   | string | A imagem do produto.                |

### Endpoints

| Método | Rota                 | Descrição                                         |
| ------ | -------------------- | ------------------------------------------------- |
| POST   | /products            | Criação de um produto.                            |
| GET    | /products            | Lista todos os produtos.                          |
| GET    | /products/:productId | Lista um produto, usando seu ID como parâmetro    |
| PUT    | /products/:productId | Atualiza um produto, usando seu ID como parâmetro |
| DELETE | /products/:productId | Deleta um produto, usando seu ID como parâmetro   |

---

### 1.1. **Criar produto**

[ Voltar para os Endpoints ](#5-endpoints)

### `/products`

### Exemplo de Request:

```
POST /products
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "nameproduct": "Termogênico 60 cápsulas",
  "codbarras": "01425631425861",
  "description": "Produto à base de cafeína",
  "qdestoque": "10",
  "category": "Suplementos",
  "datavalidade": "20/07/2029",
  "imgproduct": ""
}
```

### Resposta da Requisição:

```json
{
  "nameproduct": "Termogênico 60 cápsulas",
  "codbarras": "01425631425861",
  "description": "Produto à base de cafeína",
  "qdestoque": "10",
  "category": "Suplementos",
  "datavalidade": "20/07/2029",
  "imgproduct": "",
  "id": 3
}
```

### 1.2. **Listar todos produtos**

```
GET /products
Host: http://localhost:3000
Content-type: application/json
```

### Corpo da Requisição:

```
Não possui body.
```

### Resposta da Requisição:

```json
[
  {
    "nameproduct": "Termogênico 60 cápsulas",
    "codbarras": "78945612384581",
    "description": "Produto à base de cafeína para atividade física.",
    "qdestoque": "12",
    "category": "Suplementos",
    "datavalidade": "12/12/0277",
    "imgproduct": "http://localhost:3000/uploads/1742675411107-1.jpg",
    "id": 1
  },
  {
    "nameproduct": "Incendo Nsa. Da Conceição",
    "codbarras": "78945612384581",
    "description": "Palitos perfumados de madeira.",
    "qdestoque": "8",
    "category": "Outros",
    "datavalidade": "12/12/2025",
    "imgproduct": "http://localhost:3000/uploads/1742675588302-2.png",
    "id": 2
  }
]
```

### 1.3. **Listar Produto por id**

### Exemplo de Request:

```
GET /products/:productId
Host: http://localhost:3000
Content-type: application/json
```

### Corpo da Requisição:

```
Não possui body.
```

### Resposta da Requisição:

```json
{
  "nameproduct": "Termogênico 60 cápsulas",
  "codbarras": "78945612384581",
  "description": "Produto à base de cafeína para atividade física.",
  "qdestoque": "12",
  "category": "Suplementos",
  "datavalidade": "12/12/0277",
  "imgproduct": "http://localhost:3000/uploads/1742675411107-1.jpg",
  "id": 1
}
```

### 1.4. **Atualizar produto por id**

### Exemplo de Request:

```
PUT /products/:productId
Host: http://localhost:3000
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "qdestoque": "12"
}
```

### Resposta da Requisição:

```json
{
  "nameproduct": "Termogênico 60 cápsulas",
  "codbarras": "78945612384581",
  "description": "Produto à base de cafeína para atividade física.",
  "qdestoque": "12",
  "category": "Suplementos",
  "datavalidade": "12/12/0277",
  "imgproduct": "http://localhost:3000/uploads/1742675411107-1.jpg",
  "id": 1
}
```

### 1.5. **Deletar produto por id**

### Exemplo de Request:

```
DELETE /products/:productId
Host: http://localhost:3000
Content-type: application/json
```

### Corpo da Requisição:

```
Não possui body
```

### Resposta da Requisição:

```
Retorna apenas o status 204.
```

## **suppliers**

A tabela suppliers é definida como:

| Campo            | Tipo   | Descrição                          |
| ---------------- | ------ | ---------------------------------- |
| id               | number | Identificador único do fornecedor. |
| nameempresa      | string | O nome do fornecedor.              |
| cnpj             | string | O CNPJ do fornecedor.              |
| address          | string | O endereço do fornecedor.          |
| telephone        | string | O telefone do fornecedor.          |
| email            | string | O email do fornecedor.             |
| contactprincipal | string | O contato principal do fornecedor. |

### Endpoints

| Método | Rota                  | Descrição                                                    |
| ------ | --------------------- | ------------------------------------------------------------ |
| POST   | /supplier             | Criação de um fornecedor.                                    |
| GET    | /supplier             | Lista todos os fornecedores.                                 |
| GET    | /supplier/:supplierId | Lista um fornecedor, usando seu supplierId como parâmetro    |
| PUT    | /supplier/:supplierId | Atualiza um fornecedor, usando seu supplierId como parâmetro |
| DELETE | /supplier/:supplierId | Deleta um fornecedor, usando seu ID como parâmetro           |

---

### 3.1. **Criar fornecedor**

[ Voltar para os Endpoints ](#5-endpoints)

### `/supplier`

### Exemplo de Request:

```
POST /supplier
Host: http://localhost:3000
Authorization: None
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  {
  "nameempresa": "Asa Norte Ltda",
  "cnpj": "31121412000123",
  "address": "Rua Vida Boa, nº24",
  "telephone": "212856-4221",
  "email": "atendimento@asanorte.com.br",
  "contactprincipal": "Jaciara"
}
}
```

### Resposta da Requisição:

```json
{
  "nameempresa": "Asa Norte Ltda",
  "cnpj": "31121412000123",
  "address": "Rua Vida Boa, nº24",
  "telephone": "212856-4221",
  "email": "atendimento@asanorte.com.br",
  "contactprincipal": "Jaciara",
  "id": 2
}
```

### 1.2. **Listar todos os fornecedores**

```
GET /supplier
Host: http://localhost:3000
Content-type: application/json
```

### Corpo da Requisição:

```
Não possui body.
```

### Resposta da Requisição:

```json
[
  {
    "nameempresa": "Casa da Vida LTDA",
    "cnpj": "33779380000163",
    "address": "Rua da Vida, nº 38",
    "telephone": "(21) 9854-6238",
    "email": "atendimento@casadavida.com.br",
    "contactprincipal": "Ana",
    "id": 1
  },
  {
    "nameempresa": "Asa Norte Ltda",
    "cnpj": "31121412000123",
    "address": "Rua Vida Boa, nº24",
    "telephone": "212856-4221",
    "email": "atendimento@asanorte.com.br",
    "contactprincipal": "Jaciara",
    "id": 2
  }
]
```

### 3.3. **Listar fornecedor por id**

### Exemplo de Request:

```
GET /supplier/:supplierId
Host: http://localhost:3000
Content-type: application/json
```

### Corpo da Requisição:

```
Não possui body.
```

### Resposta da Requisição:

```json
{
  "nameempresa": "Casa da Vida LTDA",
  "cnpj": "33779380000163",
  "address": "Rua da Vida, nº 38",
  "telephone": "(21) 9854-6238",
  "email": "atendimento@casadavida.com.br",
  "contactprincipal": "Ana",
  "id": 1
}
```

### 3.4. **Atualizar fornecedor por id**

### Exemplo de Request:

```
PUT /supplier/:supplierId
Host: http://localhost:3000
Content-type: application/json
```

### Corpo da Requisição:

```json
{
  "nameempresa": "Casa da Vida Boa Ltda"
}
```

### Resposta da Requisição:

```json
{
  "nameempresa": "Casa da Vida Boa Ltda",
  "cnpj": "33779380000163",
  "address": "Rua da Vida, nº 38",
  "telephone": "(21) 9854-6238",
  "email": "atendimento@casadavida.com.br",
  "contactprincipal": "Ana",
  "id": 1
}
```

### 3.5. **Deletar fornecedor por id**

### Exemplo de Request:

```
DELETE /supplier/:supplierId
Host: http://localhost:3000
Content-type: application/json
```

### Corpo da Requisição:

```
Não possui body
```

### Resposta da Requisição:

```
Retorna apenas o status 204.
```

### Exemplo de possíveis erros de request.

### Parâmetros da Requisição:

| Parâmetro | Tipo   | Descrição                                |
| --------- | ------ | ---------------------------------------- |
| id        | number | Identificador único do produto (Product) |

### Corpo da Requisição:

```json
Vazio
```

### Exemplo de Response:

```
200 OK
```

```json
[
  {
    "nameempresa": "Casa da Vida LTDA",
    "cnpj": "33779380000163",
    "address": "Rua da Vida, nº 38",
    "telephone": "(21) 9854-6238",
    "email": "atendimento@casadavida.com.br",
    "contactprincipal": "Ana",
    "id": 1
  },
  {
    "nameempresa": "Asa Norte Ltda",
    "cnpj": "31121412000123",
    "address": "Rua Vida Boa, nº24",
    "telephone": "212856-4221",
    "email": "atendimento@asanorte.com.br",
    "contactprincipal": "Jaciara",
    "id": 2
  }
]
```

### Possíveis Erros:

| Código do Erro | Descrição                            |
| -------------- | ------------------------------------ |
| 404 Not Found  | "message": "Produto não encontrado!" |
