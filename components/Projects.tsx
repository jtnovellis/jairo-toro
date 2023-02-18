import { Translation } from "../utils/types.d.ts";

const Project = (props: {
  link: string;
  domain: string;
  technologies: string;
  from: string;
  to: string;
  matteo?: boolean;
}) => (
  <a href={props.link} rel="noopener" target="_blank">
    <div
      class={`rounded-xl p-0.3 h-full bg-gradient-to-r from-[${props.from}] to-[${props.to}] cursor-pointer transition-transform hover:scale-105`}
    >
      <div class="bg-gray rounded-lg p-2 text-center h-full">
        <h4>{props.domain}</h4>
        <p>{props.technologies}</p>
      </div>
    </div>
  </a>
);

const Projects = (data: { translation: Translation["projects"] }) => (
  <>
    <h3>{data.translation.title}</h3>
    <div class="grid grid-cols-2 sm:grid-cols-1 gap-3">
      <Project
        link="https://sillevon.vercel.app/"
        domain="Sillevon"
        technologies="Next.js, Mantine, Socket.io, Node.js, Express, MongoDB"
        from="#1dbde6"
        to="#f1515e"
      />
      <Project
        link="https://latamairlines.vercel.app"
        domain="LATAM Airlines Clone"
        technologies="React, MaterialUI, Node.js, Express, MongoDB"
        from="#00ff87"
        to="#60efff"
      />
      <Project
        link="https://notes-app-six-gilt.vercel.app/"
        domain="Notes App"
        technologies="TypeScript, React, Tailwind CSS"
        from="#696eff"
        to="#f8acff"
      />
      <Project
        link="https://creandoyjugando.vercel.app/"
        domain="Creando y Jugando"
        technologies="TypeScript, React, Next.js, Tailwind CSS, Sanity.io, Styled Components"
        from="#84ffc9"
        to="#eca0ff"
      />
      <Project
        link="https://amazon-based.vercel.app/"
        domain="Amazon Clone"
        technologies="TypeScript, React, Next.js, Tailwind CSS, Firebase, Stripe"
        from="#e9b7ce"
        to="#d3f3f1"
      />
      <Project
        link="https://starwars-mu-umber.vercel.app/"
        domain="Star Wars Info App"
        technologies="TypeScript, React, Next.js, Tailwind CSS"
        from="#f5e6ad"
        to="#f13c77"
      />
    </div>
  </>
);

export default Projects;
