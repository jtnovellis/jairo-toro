import { Handlers, Status } from "$fresh/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

export const handler: Handlers = {
  async POST(request: Request) {
    console.log(
      Deno.env.get("HOSTNAME"),
      Deno.env.get("USERNAME"),
      Deno.env.get("PASSWORD"),
    );
    console.log(Deno.env.get("FROM"), Deno.env.get("TO"));
    const client = new SMTPClient({
      connection: {
        hostname: Deno.env.get("HOSTNAME")!,
        port: 465,
        tls: true,
        auth: {
          username: Deno.env.get("USERNAME")!,
          password: Deno.env.get("PASSWORD")!,
        },
      },
    });

    const payload: { mail: string; message: string } | undefined = await request
      .json();

    if (payload) {
      try {
        await client.send({
          from: Deno.env.get("from")!,
          to: Deno.env.get("to")!,
          subject: `New message from ${payload.mail}`,
          content: payload.message,
        });
        await client.close();
        return new Response("", { status: Status.OK });
      } catch {
        return new Response("Error with mailing", {
          status: Status.BadRequest,
        });
      }
    }
    return new Response("OK", { status: Status.OK });
  },
};
