import { Handlers, Status } from "$fresh/server.ts";
import { SmtpClient } from "smtp";
/* import { load } from "https://deno.land/std@0.177.0/dotenv/mod.ts";

const env = await load();
const password = env["PASSWORD"];
const username = env["USERNAME"];
const hostname = env["HOSTNAME"];
const from = env["FROM"];
const to = env["TO"]; */

export const handler: Handlers = {
  async POST(request: Request) {
    const client = new SmtpClient();

    await client.connectTLS({
      hostname: "smtp.gmail.com",
      port: 465,
      username: "jtnovellis88@gmail.com",
      password: "hsvwsuponbegvnto",
    });

    const payload: { mail: string; message: string } | undefined = await request
      .json();

    await client.send({
      from: "jtnovellis88@gmail.com",
      to: "jtnovellis88@icloud.com",
      subject: `New message from ${payload?.mail}`,
      content: payload?.message || "No mesaage content",
    });

    await client.close();
    return new Response("OK", { status: Status.OK });
  },
};
