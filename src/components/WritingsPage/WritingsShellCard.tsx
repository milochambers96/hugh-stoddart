import { useState } from "react";
import { Link } from "react-router-dom";

import { IWritingOverview } from "../../interfaces/writings";

interface WritingShellCardProp {
  writing: IWritingOverview;
}

export const WritingShellCard = ({ writing }: WritingShellCardProp) => {
  const [isShowing, setIsShowing] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`overflow-hidden border-t-2 border-hs-card-border  rounded-lg transition-all duration-500 ${
        isHovering
          ? "shadow-[0_4px_12px_rgba(0,0,0,0.9)] bg-[#3A3A3A] -translate-y-2"
          : "shadow-[0_2px_8px_rgba(0,0,0,0.55)] bg-hs-card"
      }`}
    >
      <Link to={writing.navPath}>
        <div
          id={`writing-card-${writing.id}-header-container`}
          className=" p-4 text-center transition-colors duration-300"
        >
          <h3 className="text-lg md:text-xl text-hs-subtitle font-semibold">
            {writing.title}
          </h3>
        </div>
        <div
          id={`writing-card-${writing.id}-body-container`}
          className="relative cursor-pointer"
          onMouseEnter={() => setIsShowing(true)}
          onMouseLeave={() => setIsShowing(false)}
        >
          <figure
            className="w-full h-[250px]"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <img
              src={writing.image}
              alt={writing.imgAlt}
              className="w-full h-full object-cover"
            />
            <figcaption
              className={`absolute bottom-0 left-0 right-0 bg-hs-card/70 p-2 text-justify text-hs-body transition-opacity duration-500 ${
                isShowing ? "opacity-100" : "opacity-0"
              }`}
            >
              {writing.capTxt}
            </figcaption>
          </figure>
        </div>
      </Link>
    </div>
  );
};

export default WritingShellCard;
