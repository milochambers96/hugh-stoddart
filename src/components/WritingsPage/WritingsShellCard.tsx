import { useState } from "react";
import { Link } from "react-router-dom";

import { IWritingOverview } from "../../interfaces/writings";

interface WritingShellCardProp {
  writing: IWritingOverview;
}

export const WritingShellCard = ({ writing }: WritingShellCardProp) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg shadow-lg">
      <Link to={writing.navPath}>
        <div
          id={`writing-card-${writing.id}-header-container`}
          className="p-4 bg-black/70 opacity-70 text-white text-center"
        >
          <h3 className="text-lg md:text-xl font-semibold">{writing.title}</h3>
        </div>
        <div
          id={`writing-card-${writing.id}-body-container`}
          className="relative cursor-pointer"
          onMouseEnter={() => setIsShowing(true)}
          onMouseLeave={() => setIsShowing(false)}
        >
          <figure className="aspect-ratio h-[270px] mx-auto">
            <img
              src={writing.image}
              alt={writing.imgAlt}
              className="w-full h-full object-cover"
            />
            <figcaption
              className={`absolute bottom-0 left-0 right-0 bg-black/70 text-white md:text-justify p-2 transition-opacity duration-300 ${
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
