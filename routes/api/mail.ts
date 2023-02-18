import { Status } from "$fresh/server.ts";
import { SmtpClient } from "smtp";
import { load } from "https://deno.land/std@0.177.0/dotenv/mod.ts";

const env = await load();
const password = env["PASSWORD"];
const username = env["USERNAME"];
const hostname = env["HOSTNAME"];
const from = env["FROM"];
const to = env["TO"];

export async function handler(request: Request): Promise<Response> {
  const client = new SmtpClient();

  await client.connectTLS({
    hostname: Deno.env.get("HOSTNAME") || hostname,
    port: 465,
    username: Deno.env.get("USERNAME") || username,
    password: Deno.env.get("PASSWORD") || password,
  });

  const payload: { mail: string; message: string } | undefined = await request
    .json();

  await client.send({
    from: Deno.env.get("FROM") || from,
    to: Deno.env.get("TO") || to,
    subject: `New message from ${payload?.mail}`,
    content: payload?.message || "No mesaage content",
  });

  await client.close();
  return new Response("OK", { status: Status.OK });
}
