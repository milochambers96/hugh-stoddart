import { writingsIntro, writingsOverview } from "../../data/writings/writings";
import WritingShellCard from "./WritingsShellCard";

const WritingsShell = () => {
  return (
    <section id="writings-shell" className="pt-[60px] bg-hs-background pb-20">
      <div className="space-y-6 w-5/6 md:w-2/3 lg:w-1/2 mx-auto mt-4 py-4 text-white">
        <h1 className="text-3xl md:text-5xl text-center font-bold">
          Hugh's Writings
        </h1>
        <p className="text-justify md:text-xl font-semibold">{writingsIntro}</p>
      </div>

      {/* Desktop/Laptop View */}
      <div className="hidden md:block">
        <div className="mt-12 md:w-4/6 mx-auto">
          <div className="flex flex-wrap justify-between gap-9">
            {writingsOverview.map((writing, id) => (
              <article key={id} className="w-[48%]">
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
