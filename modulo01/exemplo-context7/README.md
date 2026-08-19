# Demo simples: Next.js + Better Auth + GitHub + SQLite

Projeto demo com:

- Next.js App Router (TypeScript)
- Better Auth com login social GitHub
- SQLite local com better-sqlite3 (`better-auth.sqlite`)
- Home com estado de autenticacao

## 1) Configurar variaveis de ambiente (env)

Copie `.env.example` para `.env.local` e preencha:

```bash
cp .env.example .env.local
```

Variaveis obrigatorias:

- `BETTER_AUTH_URL` (ex.: `http://localhost:3000`)
- `BETTER_AUTH_SECRET` (string longa e aleatoria)
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`

Exemplo de `.env.local`:

```env
BETTER_AUTH_URL=http://localhost:3000
BETTER_AUTH_SECRET=troque-por-uma-string-longa-e-aleatoria
GITHUB_CLIENT_ID=seu_client_id
GITHUB_CLIENT_SECRET=seu_client_secret
```

Sugestao para gerar secret local:

```bash
openssl rand -base64 32
```

## 2) Configurar OAuth no GitHub

No GitHub, crie um OAuth App em:

- Settings > Developer settings > OAuth Apps > New OAuth App

Preencha:

- Application name: qualquer nome (ex.: Demo Better Auth Local)
- Homepage URL: `http://localhost:3000`
- Authorization callback URL: `http://localhost:3000/api/auth/callback/github`

Depois de criar:

- Copie o Client ID para `GITHUB_CLIENT_ID`
- Gere/copie o Client Secret para `GITHUB_CLIENT_SECRET`

## 3) Rodar migracao do Better Auth

```bash
npx @better-auth/cli migrate
```

Isso cria as tabelas de auth no arquivo `better-auth.sqlite`.

## 4) Subir o projeto

```bash
npm run dev
```

Acesse `http://localhost:3000`.

## 5) Validar fluxo de login

- Home mostra `Voce nao esta logado` quando sem sessao.
- Em `/login`, clicar `Entrar com GitHub` inicia o OAuth.
- Depois do login, Home mostra `Logado como <email/nome>`.
- Botao `Sair` encerra a sessao.

## 6) Erros comuns

- Callback incorreto no GitHub:
  confirme exatamente `http://localhost:3000/api/auth/callback/github`.
- Secret nao definido:
  confirme `BETTER_AUTH_SECRET` no `.env.local`.
- URL base incorreta:
  confirme `BETTER_AUTH_URL=http://localhost:3000` no ambiente local.
