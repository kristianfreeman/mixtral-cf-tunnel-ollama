**Ollama + Mixtral + Langchain example (deployed to Cloudflare)**

You can use [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) to open a secure HTTPS tunnel to a running [Ollama](https://ollama.ai) instance on your local computer.

Using [Cloudflare Workers](https://workers.cloudflare.com), you can connect the Ollama instance to [Langchain](https://js.langchain.com/docs) and use cutting-edge models like [Mixtral](https://mistral.ai/news/mixtral-of-experts/).

## Usage

1. Configure your Workers project and deploy it (see ["Get started"](https://developers.cloudflare.com/workers/get-started/guide/) if you don't know how)
2. [Install cloudflared](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/install-and-setup/tunnel-guide/local/#1-download-and-install-cloudflared).
3. Start a new tunnel with `tunnel.sh`.
4. Find the output of your new Cloudflare Tunnel and set it as the `TUNNEL` secret in your Workers project: `echo "YOURURL" | npx wrangler secret put TUNNEL`.
5. Request `GET $workersURL/` with an optional query param `query` to directly query the model on your local machine. The response is streaming!

This is not recommended for production use, but shows how you can use local tooling to generate embeddings instead of relying on a third-party API.
