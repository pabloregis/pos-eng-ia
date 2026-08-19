import { config } from "./config.ts";
import { OpenRouterService } from "./openrouterService.ts";
import { createServer } from "./server.ts";

const routerService = new OpenRouterService(config);

const app = createServer(routerService);

await app.listen({ port: 3000, host: "0.0.0.0" });

// app
//   .inject({
//     method: "POST",
//     url: "/chat",
//     body: { question: "What it rate limit?" },
//   })
//   .then((response) => {
//     console.log("Response status code:", response.statusCode);
//     console.log("Response body:", response.body);
//   });
