import { AppProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <title>Jairo Toro - FullStack Web Developer</title>
        <meta
          name="description"
          content="Jairo Toro - FullStack Web Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <div class="max-w-xl my-5 mx-auto lg:mx-2 sm:mx-1 text-sm text-white font-plex leading-none tracking-wide md:my-3">
        <Component />
      </div>
    </>
  );
}
