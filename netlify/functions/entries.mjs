import { getStore } from "@netlify/blobs";

export default async (req) => {
  const store = getStore("diario");
  const headers = { "Cache-Control": "no-store" };

  if (req.method === "GET") {
    const data = await store.get("entries", { type: "json" });
    return Response.json(data || null, { headers });
  }

  if (req.method === "POST") {
    let body;
    try { body = await req.json(); } catch { return new Response("Pedido inválido", { status: 400 }); }
    const pass = process.env.ADMIN_PASSWORD;
    if (!pass || body.password !== pass) {
      await new Promise((r) => setTimeout(r, 800));
      return new Response("Palavra-passe errada", { status: 401 });
    }
    if (body.check) return Response.json({ ok: true });
    if (!Array.isArray(body.entries)) return new Response("Dados inválidos", { status: 400 });
    await store.setJSON("entries", { entries: body.entries });
    return Response.json({ ok: true });
  }

  return new Response("Método não permitido", { status: 405 });
};

export const config = { path: "/api/entries" };
