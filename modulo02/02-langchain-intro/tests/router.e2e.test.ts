import test from "node:test";
import assert from "node:assert/strict";
import { createServer } from "../src/server.ts";

test("Command upper transforms message into UPPERCASE", async () => {
  const app = createServer();
  const msg = "make this message UPPER please!";
  const expected = msg.toUpperCase();

  const response = await app.inject({
    method: "POST",
    url: "/chat",
    body: { question: msg },
  });
  assert.equal(response.statusCode, 200);
  assert.equal(response.body, expected);
});

test("Command lower transforms message into LOWERCASE", async () => {
  const app = createServer();
  const msg = "make this message LOWER please!";
  const expected = msg.toLowerCase();

  const response = await app.inject({
    method: "POST",
    url: "/chat",
    body: { question: msg },
  });
  assert.equal(response.statusCode, 200);
  assert.equal(response.body, expected);
});

test("Command unknown triggers FALLBACK response", async () => {
  const app = createServer();
  const msg = "HEY THERE!";
  const expected =
    'Unknown command. Try "make this lower case" or "convert to uppercase".';

  const response = await app.inject({
    method: "POST",
    url: "/chat",
    body: { question: msg },
  });
  assert.equal(response.statusCode, 200);
  assert.equal(response.body, expected);
});
