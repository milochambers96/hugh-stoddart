import { writingsIntro, writingsOverview } from "../../data/writings/writings";

import WritingShellCard from "./WritingsShellCard";

const WritingsShell = () => {
  return (
    <section id="writings-shell" className="pt-[60px] bg-hs-background pb-20">
      <div
        id="writings-header"
        className="bg-hs-accent space-y-4 w-5/6 md:w-2/3 mx-auto mt-4 p-4"
      >
        <h1 className="text-xl md:text-5xl text-center font-bold">
          Hugh's Writings
        </h1>
        <p className="md:text-justify text-sm md:text-xl font-semibold">
          {writingsIntro}
        </p>
      </div>

      <div className="hidden md:block">
        <div className="mt-12 w-4/6 mx-auto">
          <div className="grid grid-cols-4 gap-20">
            {writingsOverview.map((writing, id) => (
              <article key={id} className="col-span-2 py-4">
                <WritingShellCard writing={writing} />
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="mt-8 w-5/6 mx-auto">
          {writingsOverview.map((writing, id) => (
            <article key={id} className="col-span-2 py-4">
              <WritingShellCard writing={writing} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingsShell;
