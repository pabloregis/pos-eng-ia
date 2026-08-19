import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "../src/server.ts";
import { config } from "../src/config.ts";
import {
  type LLMResponse,
  OpenRouterService,
} from "../src/openrouterService.ts";

console.assert(
  process.env.OPENROUTER_API_KEY,
  "OPENROUTER_API_KEY is not set in the env ",
);

test("Routes to fastest model by default", async () => {
  const customConfig = {
    ...config,
    provider: {
      ...config.provider,
      sort: {
        ...config.provider.sort,
        by: "latency",
      },
    },
  };

  const routerService = new OpenRouterService(customConfig);
  const app = createServer(routerService);

  const response = await app.inject({
    method: "POST",
    url: "/chat",
    body: { question: "What is rate limit?" },
  });
  assert.equal(response.statusCode, 200);
  const body = response.json() as LLMResponse;
  assert.equal(body.model, "poolside/laguna-xs-2.1:free");
});

test("Routes to highest throughput model by default", async () => {
  const customConfig = {
    ...config,
    provider: {
      ...config.provider,
      sort: {
        ...config.provider.sort,
        by: "throughput",
      },
    },
  };

  const routerService = new OpenRouterService(customConfig);
  const app = createServer(routerService);

  const response = await app.inject({
    method: "POST",
    url: "/chat",
    body: { question: "What is rate limit?" },
  });
  assert.equal(response.statusCode, 200);
  const body = response.json() as LLMResponse;
  assert.equal(body.model, "dots-studio/dots-3-note-preview:free");
});
