import { Handlers, Status } from "$fresh/server.ts";
import { sendSimpleMail } from "https://deno.land/x/sendgrid@0.0.3/mod.ts";

export const handler: Handlers = {
  async POST(request: Request) {
    const payload: { mail: string; message: string } | undefined = await request
      .json();

    if (!payload) {
      return new Response("Bad Request", { status: Status.BadRequest });
    }
    await sendSimpleMail({
      subject: "New message from your website",
      to: [{ email: Deno.env.get("TO")! }],
      from: { email: Deno.env.get("FROM")! },
      content: [
        {
          type: "text/plain",
          value: `Mail: ${payload?.mail}\nMessage: ${payload?.message}`,
        },
        {
          type: "text/html",
          value:
            `<p>Mail: ${payload?.mail}</p><p>Message: ${payload?.message}</p>`,
        },
      ],
    }, {
      apiKey: Deno.env.get("SENDGRID_API_KEY")!,
    });

    return new Response("OK", { status: Status.OK });
  },
};
