import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  Screenplay,
  screenplays,
} from "../../../data/writings/screen/screenplays";

const ScreenplayItemShell = () => {
  const { id } = useParams();
  const screenIdNum = Number(id);

  const [screenItem, setScreenItem] = useState<null | Screenplay>(null);
  //   const [infoToRender, setInfoToRender] = useState<"overview" | "credits">(
  //     "overview"
  //   );

  const getScreenplay = useCallback(() => {
    const foundScreenplay = screenplays.filter(
      (screenplay) => screenplay.id === screenIdNum
    );
    if (foundScreenplay.length >= 1) {
      setScreenItem(foundScreenplay[0]);
    } else {
      setScreenItem(null);
    }
  }, [screenIdNum]);

  useEffect(() => {
    getScreenplay();
  }, [getScreenplay]);

  return (
    <section className="pt-[60px] pb-20">
      <div className="space-y-6 w-5/6 md:w-2/3 2xl:w-1/2 mx-auto mt-8 py-4 text-white">
        <h1 className="text-3xl md:text-5xl text-center font-bold">
          {screenItem?.title}
        </h1>
      </div>

      <div className="hidden md:block">
        <div className="mt-12 md:w-2/3 2xl:w-1/2 mx-auto">
          <div className="flex flex-wrap justify-between gap-y-20">
            <div className="flex-1">
              <img
                src={screenItem?.media.image}
                alt={`A still shot from ${screenItem?.title}`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenplayItemShell;
