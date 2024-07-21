# User Creation API

Esta é uma API de criação de usuários que permite gerenciar dados como id, nome, email e idade. A API foi construída utilizando Node.js, Express, Prisma e MongoDB.

## Ferramentas Utilizadas

- **Node.js**: Plataforma de desenvolvimento JavaScript.
- **Express**: Framework para Node.js que facilita a criação de APIs RESTful.
- **Prisma**: ORM (Object-Relational Mapping) para facilitar a interação com o banco de dados.
- **MongoDB**: Banco de dados NoSQL orientado a documentos.

## Instalação

Siga os passos abaixo para configurar e executar a API em sua máquina local:

1. Clone o repositório:
    ```bash
    git clone https://github.com/code-matheus/api-create-user-backend.git
    cd seu-repositorio
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure as variáveis de ambiente:

    Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
    ```env
    DATABASE_URL="mongodb+srv://<usuario>:<senha>@cluster0.mongodb.net/meubanco?retryWrites=true&w=majority"
    ```

4. Execute as migrações do Prisma:
    ```bash
    npx prisma migrate dev
    ```

5. Inicie o servidor:
    ```bash
    npm start
    ```

## Endpoints

### Criar Usuário

- **URL**: `/users`
- **Método**: `POST`
- **Descrição**: Cria um novo usuário.
- **Body**:
    ```json
    {
        "nome": "string",
        "email": "string",
        "idade": "number"
    }
    ```

- **Resposta de Sucesso**:
    - **Código**: `201 Created`
    - **Conteúdo**:
        ```json
        {
            "id": "string",
            "nome": "string",
            "email": "string",
            "idade": "number"
        }
        ```

### Listar Usuários

- **URL**: `/users`
- **Método**: `GET`
- **Descrição**: Lista todos os usuários.
- **Resposta de Sucesso**:
    - **Código**: `200 OK`
    - **Conteúdo**:
        ```json
        [
            {
                "id": "string",
                "nome": "string",
                "email": "string",
                "idade": "number"
            }
        ]
        ```

### Obter Usuário por ID

- **URL**: `/users/:id`
- **Método**: `GET`
- **Descrição**: Obtém um usuário pelo ID.
- **Resposta de Sucesso**:
    - **Código**: `200 OK`
    - **Conteúdo**:
        ```json
        {
            "id": "string",
            "nome": "string",
            "email": "string",
            "idade": "number"
        }
        ```

### Atualizar Usuário

- **URL**: `/users/:id`
- **Método**: `PUT`
- **Descrição**: Atualiza um usuário pelo ID.
- **Body**:
    ```json
    {
        "nome": "string",
        "email": "string",
        "idade": "number"
    }
    ```

- **Resposta de Sucesso**:
    - **Código**: `200 OK`
    - **Conteúdo**:
        ```json
        {
            "id": "string",
            "nome": "string",
            "email": "string",
            "idade": "number"
        }
        ```

### Deletar Usuário

- **URL**: `/users/:id`
- **Método**: `DELETE`
- **Descrição**: Deleta um usuário pelo ID.
- **Resposta de Sucesso**:
    - **Código**: `204 No Content`


## Contribuição

Sinta-se à vontade para contribuir com o projeto, seja reportando problemas, enviando sugestões ou fazendo pull requests.
