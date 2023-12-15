import { Hono } from "hono";
import { Ollama } from "langchain/llms/ollama";

const app = new Hono();

app.get("/", async (c) => {
  const ollama = new Ollama({
    baseUrl: c.env.TUNNEL,
    model: "mixtral",
  });

	const message = c.req.query("message") || "Write a story about a mixture of experts"
  const stream = await ollama.stream(message);

  return c.stream(async (s) => {
		for await (const chunk of stream) {
			s.write(chunk)
		}
  });
});

app.onError((err, c) => {
  return c.text(err.toString(), 500);
});

export default app;
