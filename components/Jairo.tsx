import { Translation } from "../utils/types.d.ts";

export default function Jairo(data: { translation: Translation["me"] }) {
  return (
    <div class="flex md:flex-col justify-between gap-10 md:gap-y-3 items-center md:items-start">
      <div class="md:order-2">
        <h1>Jairo Toro</h1>
        <h2 class="my-1">
          Full Stack Web Developer
        </h2>
        <p class="whitespace-pre-wrap">
          {data.translation.text}
        </p>
      </div>
      <img
        class="rounded-full flex-shrink-0 md:order-1 md:w-8"
        src="jairo.webp"
        height="150"
        width="150"
        alt="Portrait Jairo Jair Toro Novellis"
      />
    </div>
  );
}
