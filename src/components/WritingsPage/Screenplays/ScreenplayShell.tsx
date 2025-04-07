import { useMemo } from "react";
import {
  screenplayIntro,
  screenplays,
} from "../../../data/writings/screen/screenplays";
import ScreenplayFrame from "./ScreenplayReelCard";
import BackButton from "../../Utility/BackButton";
import SEO from "../../Utility/SEO";

const ScreenplayShell = () => {
  const orderedScreenplay = useMemo(() => [...screenplays].reverse(), []);

  const baseUrl = "https://hughstoddart.co.uk";

  return (
    <>
      <SEO
        title="Hugh Stoddart - Screenplays and Films"
        description={screenplayIntro}
        url={`${baseUrl}/Writings/Screenplays`}
        imageUrl="/assets/seo-imgs/HS-website-img.png"
        keywords="Hugh Stoddart, screenwriter, screenplays, films, television, drama, British cinema"
        includeAllWorks={true}
      />
      <section id="screenplays-shell" className="pt-[90px] pb-20">
        <div className="flex justify-end pr-6 pt-4">
          <BackButton backUrl={"/Writings/"} />
        </div>
        <div
          id="screenplays-header"
          className="space-y-6 w-5/6 md:w-2/3 mx-auto mt-4 p-4"
        >
          <h1 className="text-3xl md:text-5xl text-center text-hs-title font-bold font-title">
            Screenplays
          </h1>
          <p className="text-justify md:text-xl text-hs-body font-medium font-body leading-relaxed">
            {screenplayIntro}
          </p>
        </div>

        <div className="w-5/6 mx-auto mt-12 md:mt-16">
          {/* Desktop View */}
          <div className="hidden md:block">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {orderedScreenplay.map((screen) => (
                <article
                  key={screen.id}
                  className="flex justify-center w-[30%] mb-16"
                >
                  <ScreenplayFrame
                    imagePath={screen.media.image}
                    title={screen.title}
                    id={screen.id}
                  />
                </article>
              ))}
            </div>
          </div>

          {/* Mobile View  */}
          <div className="md:hidden flex flex-col items-center space-y-14">
            {orderedScreenplay
              .filter((screen) => screen.id !== 10)
              .map((screen) => (
                <article key={screen.id} className="w-full flex justify-center">
                  <ScreenplayFrame
                    imagePath={screen.media.image}
                    title={screen.title}
                    id={screen.id}
                  />
                </article>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ScreenplayShell;
