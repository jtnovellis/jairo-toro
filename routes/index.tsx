import { Handlers, PageProps } from "$fresh/server.ts";
import Education from "../components/Education.tsx";
import Experience from "../components/Experience.tsx";
import Footer from "../components/Footer.tsx";
import Jairo from "../components/Jairo.tsx";
import { Menu } from "../components/Menu.tsx";
import Projects from "../components/Projects.tsx";
import Skills from "../components/Skills.tsx";
import Contact from "../islands/Contact.tsx";
import { State } from "../utils/types.d.ts";

export const handler: Handlers = {
  GET(_req, ctx) {
    return ctx.render({
      translation: ctx.state.translation,
      lang: ctx.state.lang,
    });
  },
};

export default function Home({ data }: PageProps<State>) {
  return (
    <div class="grid grid-cols-desktop gap-x-5 lg:grid-cols-1  gap-y-10 lg:gap-y-0">
      <Menu lang={data.lang} />
      <Jairo translation={data.translation.me} />
      <Experience translation={data.translation.experience} />
      <Education translation={data.translation.education} />
      <Skills translation={data.translation.skills} />
      <Projects translation={data.translation.projects} />
      <Contact translation={data.translation.contact} />
      <Footer translation={data.translation.footer} />
    </div>
  );
}
