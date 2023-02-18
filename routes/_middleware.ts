import { MiddlewareHandlerContext } from "$fresh/server.ts";
import en from "../utils/i18n/en.json" assert { type: "json" };
import es from "../utils/i18n/es.json" assert { type: "json" };
import { State } from "../utils/types.d.ts";
import SecurityHeaders from "../utils/securityHeaders.ts";

export const handler = [
  async function setLanguage(req: Request, ctx: MiddlewareHandlerContext) {
    const cookie = req.headers.get("cookie");
    if (cookie && cookie.includes("lang")) {
      ctx.state.lang = cookie.split("=")[1] as "en" | "es";
      ctx.state.translation = ctx.state.lang === "en" ? en : es;
      return await ctx.next();
    } else {
      ctx.state.land = req.headers.get("accept-language")?.includes("es")
        ? "es"
        : "en";
      ctx.state.translation = ctx.state.lang === "en" ? en : es;
      const res = await ctx.next();
      res.headers.set("Set-Cookie", `lang=${ctx.state.lang}`);
      return res;
    }
  },
  async function setSecurityHeaders(
    _req: Request,
    ctx: MiddlewareHandlerContext<State>,
  ) {
    const resp = await ctx.next();
    SecurityHeaders.map((header) => {
      resp.headers.set(header.key, header.value);
    });
    return resp;
  },
];
