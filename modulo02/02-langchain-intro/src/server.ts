import Fastify from "fastify";

export const createServer = () => {
  const app = Fastify();

  app.post(
    "/chat",
    {
      schema: {
        body: {
          type: "object",
          required: ["question"],
          properties: {
            question: { type: "string", minLength: 5 },
          },
        },
      },
    },
    async (request, reply) => {
      try {
        const { question } = request.body as { question: string };
        reply.send("ok");
      } catch (error) {
        console.error("Error handling /chat request:", error);
        reply.status(500).send("Internal Server Error");
      }
    },
  );

  return app;
};
