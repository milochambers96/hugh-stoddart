import { TheatreScript } from "../../../data/writings/theatre/theatre";

import ImageCard from "./TheatreCardComps/ImageCard";
import ImagelessCard from "./TheatreCardComps/ImagelessCard";

import { listPeople } from "../../Utility/Utils";

interface TheatreCardProp {
  script: TheatreScript;
}

const TheatreCard = ({ script }: TheatreCardProp) => {
  return (
    <div className="border rounded-lg p-6 shadow-lg bg-hs-secondary">
      <div
        id={`theatre-card-${script.id}-header-container`}
        className="space-y-2 mb-4"
      >
        <h2 className="text-3xl">{script.title}</h2>
        {!script.isCoWritten ? (
          <p className="ml-2 text-sm">
            Written by <span className="italic">{script.writters[0]}</span>.
          </p>
        ) : (
          <p className="ml-2 italic text-sm">
            Co-written by{" "}
            <span className="italic">{listPeople(script.writters)}</span>.
          </p>
        )}
      </div>

      {script.image ? (
        <>
          <div className="hidden md:block">
            <ImageCard script={script} isMobile={false} />
          </div>

          <div className="md:hidden">
            <ImageCard script={script} isMobile={true} />
          </div>
        </>
      ) : (
        <ImagelessCard script={script} />
      )}
    </div>
  );
};

export default TheatreCard;
