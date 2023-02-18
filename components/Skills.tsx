import { Translation } from "../utils/types.d.ts";

export default function Skills(data: { translation: Translation["skills"] }) {
  return (
    <>
      <h3>{data.translation.title}</h3>
      <div class="space-y-3">
        {data.translation.sections.map((section) => <Section {...section} />)}
      </div>
    </>
  );
}

function Section(props: { title: string; skills: string[] }) {
  return (
    <>
      <h4>{props.title}</h4>
      <div class="grid grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-y-1 ">
        {props.skills.map((skill) => <p key={skill}>{skill}</p>)}
      </div>
    </>
  );
}
