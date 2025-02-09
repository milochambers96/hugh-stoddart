import {
  threatreIntro,
  theatreScripts,
} from "../../../data/writings/theatre/theatre";

import TheatreCard from "./TheatreCard";

const TheatreShell = () => {
  return (
    <section id="writings-shell" className="pt-[60px] bg-hs-background pb-20">
      <div
        id="theatre-header"
        className="bg-hs-accent space-y-6 w-5/6 md:w-2/3 mx-auto mt-4 p-4"
      >
        <h1 className="text-xl md:text-5xl text-center font-bold">
          Theatre Scripts
        </h1>
        <p className="md:text-justify text-sm md:text-xl font-semibold">
          {threatreIntro}
        </p>
      </div>

      <div className="w-5/6 md:w-2/3 mx-auto space-y-12 mt-12 p-4">
        {theatreScripts.map((script, index) => (
          <article key={index} className="text-justify">
            <TheatreCard script={script} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default TheatreShell;
