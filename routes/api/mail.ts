import { Handlers, Status } from "$fresh/server.ts";
import { SmtpClient } from "smtp";

export const handler: Handlers = {
  async POST(request: Request) {
    const client = new SmtpClient();

    await client.connectTLS({
      hostname: 'smtp.gmail.com!',
      port: 465,
      username: 'jtnovellis88@gmail.com',
      password: 'hsvwsuponbegvnto',
    });

    const payload: { mail: string; message: string } | undefined = await request
      .json();

    await client.send({
      from: 'jtnovellis88@gmail.com',
      to: 'jtnovellis88@icloud.com',
      subject: `New message from ${payload?.mail}`,
      content: payload?.message || "No mesaage content",
    });
    await client.close();
    return new Response("OK", { status: Status.OK });
  },
};
