import { TheatreScript } from "../../../data/writings/theatre/theatre";

import ImageCard from "./TheatreCardComps/ImageCard";
import ImagelessCard from "./TheatreCardComps/ImagelessCard";

interface TheatreCardProp {
  script: TheatreScript;
}

const TheatreCard = ({ script }: TheatreCardProp) => {
  return (
    <div className="p-6 shadow-[0_4px_12px_rgba(0,0,0,0.9)] bg-hs-card rounded-lg border-t-2 border-hs-card-border">
      <div id={`theatre-card-${script.id}-header-container`} className="mb-4">
        <h2 className="text-2xl md:text-3xl text-hs-title font-title">
          {script.title}
        </h2>
      </div>

      {script.image ? (
        <>
          <div className="hidden md:block text-hs-body font-body">
            <ImageCard script={script} isMobile={false} />
          </div>

          <div className="md:hidden text-hs-body font-body">
            <ImageCard script={script} isMobile={true} />
          </div>
        </>
      ) : (
        <div className="text-hs-body font-body">
          <ImagelessCard script={script} />
        </div>
      )}
    </div>
  );
};

export default TheatreCard;
