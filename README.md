# 🔑 Sistema de Login & Autenticação Full-Stack

Aplicação Full-Stack completa de autenticação de usuários desenvolvida com **React**, **Node.js**, **Express**, **Prisma ORM**, **MongoDB** e **JSON Web Token (JWT)**.

---

> ℹ️ **Nota sobre o Design / Interface**: O design visual da interface do usuário (UI) e a estilização dos componentes com Tailwind CSS foram desenvolvidos com auxílio de Inteligência Artificial, visto que a estilização gráfica não era a proposta principal deste treinamento/estudo, cujo foco foi a arquitetura Full-Stack, fluxo de autenticação, componentização e integração de API.

---

## 🛠️ Tecnologias Utilizadas

### Front-End
- **React 19** - Biblioteca para construção da interface.
- **React Router v7** - Roteamento dinâmico das páginas.
- **Tailwind CSS v4** - Estilização utilitária e responsiva (Glassmorphism design).
- **Axios** - Cliente HTTP para consumo da API do servidor.

### Back-End
- **Node.js & Express 5** - Servidor e rotas da API RESTful.
- **Prisma ORM** - Modelagem e integração com o banco de dados.
- **MongoDB** - Banco de dados NoSQL.
- **Bcrypt** - Criptografia de senhas em hash (10 salt rounds).
- **JSON Web Token (JWT)** - Geração e autenticação de tokens de sessão.
- **Cors** - Habilitação de requisições cross-origin entre o front e o back.

---

## ✨ Funcionalidades

- [x] **Cadastro de Usuários**: Validação de dados (tamanho de nome, e-mail válido, senha mínima de 6 caracteres) e sanitização com `.trim()`.
- [x] **Login com Autenticação**: Validação de credenciais e comparação segura de hash com `bcrypt.compare`.
- [x] **Tokens de Sessão (JWT)**: Emissão de token assinado no login/registro e armazenamento seguro no `localStorage` do navegador.
- [x] **Área Protegida de Membros**: Verificação de token na rota restrita e redirecionamento automático para a tela de login caso não esteja autenticado.
- [x] **Logout da Conta**: Destruição do token no `localStorage` e encerramento da sessão.
- [x] **Feedback de Carregamento**: Botões interativos com estados de *Loader / Spinner* durante requisições assíncronas.

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
- **Node.js** instalado na máquina.
- Instância do **MongoDB** rodando (localmente ou via MongoDB Atlas).

### 1. Clonar o repositório
```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
cd "login crud"
```

### 2. Configurar e rodar o Back-End
```bash
# Entrar na pasta do backend
cd back-end

# Instalar as dependências
npm install

# Criar o arquivo .env com as variáveis de ambiente
# Defina o DATABASE_URL e JWT_SECRET no arquivo .env

# Executar o servidor em ambiente de desenvolvimento
npm run dev
```
O servidor iniciará em `http://localhost:3000`.

### 3. Configurar e rodar o Front-End
Em uma nova janela de terminal:
```bash
# Entrar na pasta do frontend
cd front-end

# Instalar as dependências
npm install

# Executar a aplicação
npm run dev
```
A aplicação iniciará em `http://localhost:5173`.

---

## 📂 Estrutura de Arquivos

```text
├── back-end/
│   ├── prisma/
│   │   └── schema.prisma    # Modelagem do Banco de Dados
│   ├── .env                 # Variáveis de ambiente (ignorado no git)
│   ├── server.js            # Rotas e regras de autenticação da API
│   └── package.json
│
└── front-end/
    ├── src/
    │   ├── Components/
    │   │   ├── forms/       # Componentes de formulário (Form, Input, Submit)
    │   │   ├── layout/      # Componentes de layout (Card, Container, Navbar)
    │   │   └── pages/       # Páginas (Login, Register, MemberSpace)
    │   ├── App.jsx          # Configuração das rotas da aplicação
    │   └── main.jsx         # Ponto de entrada com BrowserRouter
    └── package.json
```
