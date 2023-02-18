import { Translation } from "../utils/types.d.ts";

const Footer = (data: { translation: Translation["footer"] }) => (
  <div class="col-span-2 lg:col-span-1 flex gap-12 items-center justify-center mt-10">
    <a
      class="relative w-4"
      href="https://github.com/jtnovellis"
      rel="noopener"
      target="_blank"
    >
      <img class="w-full" src="vectors/github.svg" alt="Logo de GitHub" />
    </a>
    <a
      class="relative w-4"
      href="https://www.linkedin.com/in/jairotoronovellis/"
      rel="noopener"
      target="_blank"
    >
      <img class="w-full" src="vectors/linkedin.svg" alt="Logo de Linkedin" />
    </a>
    <p>
      Copyright (c) 2023 Jairo Jair Toro Novellis
    </p>
  </div>
);
export default Footer;
