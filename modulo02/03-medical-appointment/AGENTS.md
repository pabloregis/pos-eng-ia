# Instruções para o Claude

## ⚠️ README.md is stale — do not trust it

`README.md` (and the `package.json` `name`/`description`/keywords) describe a *different* exercise — a "Prompt Chaining Article Generator" with `outline → research → write → review` nodes, an `npm run generate` script, and a `prompts/*.txt` template system. None of that exists in this codebase. This directory is a **medical appointment scheduling chatbot** built with LangGraph; the README is leftover from a template that was copied and repurposed without being rewritten. Rely on the source under `src/` (and this file), not the README, for anything about architecture or usage.

## Commands

```bash
npm test              # run all tests (tests/**/*.test.ts) via node's built-in test runner
npm run test:unit     # only *unit.test.ts
npm run test:e2e      # only *e2e.test.ts (currently the only test file: tests/router.e2e.test.ts)
npm run test:e2e:dev  # e2e tests in --watch mode with --inspect
npm run dev           # run src/index.ts with --watch --inspect, loading .env
npm start             # run src/index.ts once, loading .env
npm run langgraph:serve  # launch LangGraph Studio dev server (npx @langchain/langgraph-cli dev) using langgraph.json
```

To run a single test file directly: `node --env-file .env --test tests/router.e2e.test.ts`.

There is no build step (`tsconfig.json` has `noEmit: true`) and no lint script — TypeScript files run directly via Node's native type-stripping (requires Node >= 24.10.0, per `engines` in `package.json`). `.ts` imports use explicit `.ts` extensions (`allowImportingTsExtensions`).

## Architecture

This is a LangGraph `StateGraph` workflow, served over HTTP by Fastify (`src/server.ts`), that handles patient messages about scheduling or cancelling medical appointments.

- **Entry points**: `src/index.ts` starts the Fastify server on port 3000 with a single `POST /chat` endpoint (body: `{ question: string }`). `langgraph.json` separately exposes the compiled graph as `medical_appointments` for `langgraph:serve`/LangGraph Studio, pointing at `src/graph/factory.ts:graph`.
- **Graph shape** (`src/graph/graph.ts`): `START → identifyIntent`, then a conditional edge routes on `state.intent` to `schedule`, `cancel`, or straight to `message` (used both for the final response and for `unknown`/error short-circuiting). Both `schedule` and `cancel` funnel into `message → END`. State is a Zod object (`AppointmentStateAnnotation`) carrying `messages` (LangGraph `BaseMessage[]` via `withLangGraph`/`MessagesZodMeta`), extracted fields (`intent`, `professionalId`, `professionalName`, `datetime`, `reason`, `patientName`), and outcome fields (`actionSuccess`, `actionError`, `appointmentData`, `error`).
- **Nodes** (`src/graph/nodes/*.ts`) are currently **skeletons**: `identifyIntentNode`, `schedulerNode`, `cancellerNode`, and `messageGeneratorNode` all just pass the state through (or set an error/fallback message) without actually calling an LLM, without loading the prompt builders below, and without calling `AppointmentService`. When implementing a node, wire it to its corresponding prompt module and to `AppointmentService` — none of that wiring exists yet.
- **Prompts** (`src/prompts/v1/`): `identifyIntent.ts` defines `IntentSchema` (Zod, for structured-output intent classification against the `professionals` list) plus `getSystemPrompt`/`getUserPromptTemplate` builders. `messageGenerator.ts` defines `MessageSchema` plus prompt builders for turning an action outcome into a friendly Portuguese-first patient-facing message. Both build prompts as JSON strings embedding rules/examples rather than plain text templates.
- **Domain data/service** (`src/services/appointmentService.ts`): `AppointmentService` is an in-memory mock store (no DB) seeded with a fixed `professionals` list and two seed `appointments`. It exposes `checkAvailability`, `bookAppointment`, and `cancelAppointment`, matching by `professionalId` + exact `Date` equality (+ optional `patientName`). `professionals` is exported directly and used by tests.
- **LLM config** (`src/config.ts`): models are called through **OpenRouter** (not directly through OpenAI/Anthropic SDKs), with a preference list in `models` and provider routing sorted by throughput. Requires `OPENROUTER_API_KEY` in `.env` (see `.env.example`; `LANGSMITH_API_KEY`/`LANGCHAIN_TRACING_V2`/`LANGCHAIN_PROJECT` enable optional LangSmith tracing).
- **Tests** (`tests/router.e2e.test.ts`): exercise the real Fastify server via `app.inject()` end-to-end through the graph — no LLM/service mocking layer exists yet. Because the nodes are stubs, the current assertions only check for a `200` status; the intent/success assertions are commented out pending real node implementations.
