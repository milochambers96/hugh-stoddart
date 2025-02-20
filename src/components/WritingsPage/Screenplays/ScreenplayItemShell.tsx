import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

import DualPillTab from "../../Utility/DualPillTab";
import BackButton from "../../Utility/BackButton";
import DetailsSubtitle from "./ScreenplayItemComps/DetailsSubtitle";
import Overview from "./ScreenplayItemComps/Overview";
import Credits from "./ScreenplayItemComps/Credits";
import MediaDisplay from "./ScreenplayItemComps/MediaDisplay";
import PreviousButton from "./ScreenplayItemComps/PreviousButton";
import NextButton from "./ScreenplayItemComps/NextButton";

import {
  Screenplay,
  screenplays,
} from "../../../data/writings/screen/screenplays";

const ScreenplayItemShell = () => {
  const { id } = useParams();
  const screenIdNum = Number(id);

  const [screenItem, setScreenItem] = useState<null | Screenplay>(null);
  const [display, setDisplay] = useState("overview");

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
    <section className="pt-[90px] pb-20">
      <div className="flex justify-end pr-6 pt-4">
        <BackButton backUrl={"/Writings/Screenplays"} />
      </div>
      <div className="w-5/6 md:w-3/4 2xl:w-3/5 mx-auto mt-4 md:mt-10 2xl:mt-20">
        <div className="relative">
          {/* Title */}
          <div className="text-center">
            <h1 className="text-3xl text-hs-title md:text-5xl font-bold">
              {screenItem?.title}
            </h1>
            {screenItem && (
              <div className="mx-auto text-center text-hs-subtitle mt-2">
                <DetailsSubtitle screen={screenItem} />
              </div>
            )}
          </div>

          {/* Navigation buttons positioned absolutely */}
          <div
            className="flex justify-between items-center w-full absolute"
            style={{ top: "50%", transform: "translateY(-50%)" }}
          >
            <PreviousButton screenIdNum={screenIdNum} />
            <NextButton screenIdNum={screenIdNum} />
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        <div className="mt-6 md:w-3/4 2xl:w-3/5 mx-auto">
          <div className="flex justify-between gap-x-10 relative">
            {/* Text column */}
            <div className="flex-1 leading-relaxed px-2 text-hs-body">
              <div className="mt-2 py-2 flex justify-center mb-2">
                <DualPillTab
                  display={display}
                  setDisplay={setDisplay}
                  option1={"overview"}
                  option2={"credits"}
                />
              </div>
              {screenItem && display === "overview" && (
                <Overview screen={screenItem} />
              )}
              {screenItem && display === "credits" && (
                <Credits screen={screenItem} />
              )}
            </div>

            {/* Media column  */}
            <div className="flex-2 self-start sticky top-[40%]">
              {screenItem && screenItem.media && (
                <MediaDisplay
                  media={{
                    hasVideo: screenItem.media.hasVideo ?? false,
                    image: screenItem.media.image,
                    videoPath: screenItem.media.videoPath ?? "",
                  }}
                  title={screenItem.title}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenplayItemShell;
