import { useMemo } from "react";

import {
  screenplayIntro,
  screenplays,
} from "../../../data/writings/screen/screenplays";
import ScreenplayFrame from "./ScreenplayReelCard";

import BackButton from "../../Utility/BackButton";

const ScreenplayShell = () => {
  const orderedScreenplay = useMemo(() => [...screenplays].reverse(), []);

  return (
    <section className="pt-[60px] bg-hs-background pb-20">
      <div className=" flex justify-end pr-6 pt-4">
        <BackButton backUrl={"/Writings/"} />
      </div>
      <div
        id="screenplays-header"
        className="space-y-4 w-5/6 md:w-2/3 mx-auto p-4 text-white"
      >
        <h1 className="text-xl md:text-5xl text-center font-bold">
          Screenplays
        </h1>
        <p className="text-justify text-sm md:text-xl font-semibold">
          {screenplayIntro}
        </p>
      </div>

      <div className="w-5/6 mx-auto mt-16">
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-x-4 gap-y-20">
            {orderedScreenplay
              .filter((screen) => screen.id !== 10)
              .map((screen) => (
                <article key={screen.id} className="col-span-1 mx-auto">
                  <ScreenplayFrame
                    imagePath={screen.media.image}
                    title={screen.title}
                    id={screen.id}
                  />
                </article>
              ))}
          </div>
        </div>

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
  );
};

export default ScreenplayShell;
