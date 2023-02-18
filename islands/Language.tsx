import { State } from "../utils/types.d.ts";

export default function Language(data: { lang: State["lang"] }) {
  return (
    <button
      onClick={() => {
        (data.lang === "en")
          ? document.cookie = "lang=es"
          : document.cookie = "lang=en";
        location.reload();
      }}
      class="h-4 w-4 text-gray-light font-bold bg-gray-dark rounded-xl p-0.5 cursor-pointer group border-2 transition-colors border-transparent hover:border-gray-light"
    >
      {data.lang === "en" ? "EN" : "ES"}
    </button>
  );
}
