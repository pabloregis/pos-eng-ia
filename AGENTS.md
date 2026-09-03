# Instruções do repositório

## Pull requests

Ao criar uma branch ou preparar, revisar ou atualizar um pull request, siga esta convenção.

### Contexto curricular

Antes de montar uma branch ou um PR relacionado a uma aula:

1. Consulte `docs/grade-curricular.md` para obter o número e o nome oficial da disciplina.
2. Consulte `docs/aulas.md` para obter o módulo, a aula e o nome apresentado na plataforma do curso.
3. Use somente informações registradas nessas fontes ou fornecidas pelo usuário. Quando um dado necessário estiver ausente, solicite-o ao usuário em vez de inferi-lo.

O contexto curricular está confirmado quando disciplina, módulo, aula e nome da aula correspondem às fontes disponíveis.

### Branch

Para mudanças relacionadas a uma aula, use:

```text
<tipo>/d<disciplina>-m<módulo>-a<aula>-<resumo>
```

Exemplo:

```text
feat/d02-m02-a03-langchain-flow
```

Para mudanças gerais do repositório, sem vínculo com uma aula, use:

```text
<tipo>/<resumo>
```

Use `feat`, `fix`, `docs`, `refactor`, `test` ou `chore` como tipo. Escreva o resumo em inglês ou português conforme os termos já usados no projeto, sempre em minúsculas, sem acentos e separado por hífens. O resumo deve descrever a entrega, não repetir o título oficial da aula.

Não renomeie uma branch que já tenha sido publicada ou associada a um PR sem solicitação explícita do usuário.

### Título

Use Conventional Commits:

```text
<tipo>(<escopo>): <ação>
```

Exemplo:

```text
feat(langchain): estruturar fluxo inicial de nodes e edges
```

- Escreva em sentence case, sem ponto final.
- Use verbo no infinitivo para descrever a principal mudança.
- Escolha um escopo técnico ou do projeto, como `langchain`, `gateway` ou `repo`.
- Mantenha disciplina, módulo, aula e o título oficial da aula fora do título do PR.

### Descrição

Para mudanças relacionadas a uma aula, use esta estrutura:

```md
## Contexto da aula

> **<nome da disciplina>** · Módulo <número> · Aula <número>

Conteúdo da aula: **<nome da aula em sentence case, sem o prefixo “MÓDULO NN -”>**.

## Alterações

- <alteração relevante>;
- <alteração relevante>.

## Validação

- `<comando executado>`: passou;
- <outra verificação>: passou.
```

Para mudanças gerais, substitua `Contexto da aula` por `Contexto` e explique o objetivo em uma ou duas frases. Omita metadados acadêmicos.

Registre somente validações realmente executadas. Quando algo falhar, informe o resultado e a causa conhecida de forma direta. Acrescente `## Observações` apenas quando houver uma limitação, decisão ou trabalho futuro relevante.

Antes de criar ou atualizar o PR, confirme que branch, título e descrição seguem todas as regras aplicáveis acima.
