import { Handlers, Status } from "$fresh/server.ts";
import { SmtpClient } from "smtp";

export const handler: Handlers = {
  async POST(request: Request) {
    const client = new SmtpClient();

    await client.connectTLS({
      hostname: Deno.env.get("HOSTNAME")!,
      port: 465,
      username: Deno.env.get("USERNAME")!,
      password: Deno.env.get("PASSWORD")!,
    });

    const payload: { mail: string; message: string } | undefined = await request
      .json();

    await client.send({
      from: Deno.env.get("FROM")!,
      to: Deno.env.get("TO")!,
      subject: `New message from ${payload?.mail}`,
      content: payload?.message || "No mesaage content",
    });
    await client.close();
    return new Response("OK", { status: Status.OK });
  },
};
