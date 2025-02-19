import { TheatreScript } from "../../../data/writings/theatre/theatre";

import ImageCard from "./TheatreCardComps/ImageCard";
import ImagelessCard from "./TheatreCardComps/ImagelessCard";

interface TheatreCardProp {
  script: TheatreScript;
}

const TheatreCard = ({ script }: TheatreCardProp) => {
  return (
    <div className="border-2 rounded-lg p-6 shadow-lg bg-hs-secondary">
      <div id={`theatre-card-${script.id}-header-container`} className="mb-4">
        <h2 className="text-2xl md:text-3xl text-hs-subtitle">
          {script.title}
        </h2>
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
