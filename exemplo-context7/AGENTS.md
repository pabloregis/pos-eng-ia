<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Projeto

Demo simples com Next.js App Router + Better Auth + GitHub OAuth + SQLite local.

- Framework: Next.js 16 (App Router, TypeScript)
- Auth: better-auth
- Banco: better-sqlite3 em arquivo local `better-auth.sqlite`
- Estilo: Tailwind CSS v4

## Arquivos-chave

- Auth server: `lib/auth.ts`
- Auth client: `lib/auth-client.ts`
- Route handler: `app/api/auth/[...all]/route.ts`
- Home: `app/page.tsx`
- Login: `app/login/page.tsx`
- Botões de auth: `components/auth-buttons.tsx`
- Guia operacional: `README.md`

## Variaveis de ambiente

Use `.env.local` (copiando de `.env.example`) com:

- `BETTER_AUTH_URL` (local: `http://localhost:3000`)
- `BETTER_AUTH_SECRET` (string longa e aleatoria)
- `GITHUB_CLIENT_ID`
- `GITHUB_CLIENT_SECRET`

Observacoes:

- Nao commitar `.env.local`.
- Evitar placeholders em execucao real (`demo-*`, `seu_*`).

## Configuracao OAuth GitHub

No OAuth App do GitHub:

- Homepage URL: `http://localhost:3000`
- Authorization callback URL: `http://localhost:3000/api/auth/callback/github`

## Comandos padrao

- Instalar deps: `npm install`
- Migrar schema auth: `npx @better-auth/cli migrate`
- Desenvolvimento: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`

## Checklist de validacao

1. Abrir `/` e confirmar estado deslogado.
2. Ir para `/login` e clicar em "Entrar com GitHub".
3. Confirmar redirecionamento para GitHub OAuth.
4. Apos login, voltar para `/` com usuario exibido.
5. Clicar "Sair" e confirmar encerramento da sessao.

## Diretrizes de alteracao

1. Preservar a estrutura minima do demo.
2. Preferir mudancas pequenas e objetivas.
3. Nao trocar stack (auth/db/framework) sem solicitacao explicita.
4. Ao mexer em auth, sempre validar `npm run lint` e `npm run build`.
5. Manter este arquivo atualizado quando comandos, env ou fluxo mudarem.
