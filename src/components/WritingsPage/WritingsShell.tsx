import { writingsIntro, writingsOverview } from "../../data/writings/writings";
import WritingShellCard from "./WritingsShellCard";
import SEO from "../Utility/SEO";

const WritingsShell = () => {
  const baseUrl = "https://hughstoddart.co.uk";

  return (
    <>
      <SEO
        title="Hugh Stoddart's Writings - Screenplays, Theatre, Arts & Prison Work"
        description="Explore Hugh Stoddart's diverse body of work including screenplays for film and television, theatre scripts, writings about visual arts, and his work with prison communities."
        url={`${baseUrl}/Writings`}
        imageUrl="/assets/seo-imgs/HS-website-img.png"
        type="website"
        keywords="Hugh Stoddart, screenplays, theatre scripts, visual arts, prison writings, British screenwriter, playwright, creative writing"
        includeAllWorks={true}
      />

      <section id="writings-shell" className="pt-[90px] pb-20">
        <div
          id="writings-header"
          className="space-y-6 w-5/6 md:w-2/3  2xl:w-1/2 mx-auto mt-4 p-4"
        >
          <h1 className="text-3xl md:text-5xl text-center text-hs-title font-bold font-title">
            Written Work
          </h1>
          <p className="text-justify md:text-xl text-hs-body font-medium font-body leading-relaxed">
            {writingsIntro}
          </p>
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
    </>
  );
};

export default WritingsShell;
