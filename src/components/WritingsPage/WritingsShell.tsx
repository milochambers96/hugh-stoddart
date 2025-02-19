import { writingsIntro, writingsOverview } from "../../data/writings/writings";
import WritingShellCard from "./WritingsShellCard";

const WritingsShell = () => {
  return (
    <section id="writings-shell" className="pt-[60px] pb-20">
      <div className="space-y-6 w-5/6  2xl:w-1/2 mx-auto mt-4 py-4 text-white">
        <h1 className="text-3xl md:text-5xl text-center font-bold">
          Written Work
        </h1>
        <p className="text-justify md:text-xl font-semibold">{writingsIntro}</p>
      </div>

      {/* Desktop/Laptop View */}
      <div className="hidden md:block">
        <div className="mt-12 md:w-2/3 2xl:w-1/2 mx-auto">
          <div className="flex flex-wrap justify-between gap-y-20">
            {writingsOverview.map((writing, id) => (
              <article key={id} className="md:w-[45%]">
                <WritingShellCard writing={writing} />
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="mt-4 w-5/6 mx-auto space-y-6">
          {writingsOverview.map((writing, id) => (
            <article key={id} className="py-4">
              <WritingShellCard writing={writing} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WritingsShell;
