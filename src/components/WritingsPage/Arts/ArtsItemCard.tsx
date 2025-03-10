import { useState } from "react";
import { ArtText } from "../../../data/writings/art/arts";

interface ArtsItemCardProp {
  art: ArtText;
}

const ArtsItemCard = ({ art }: ArtsItemCardProp) => {
  const [isHovering, setIsHovering] = useState(false);
  const hasPdf = Boolean(art.pdf);

  let artistsName = "";

  if ("fName" in art) {
    artistsName = art.fName + " " + art.lName;
  } else {
    artistsName = art.lName;
  }

  const formatPublishText = (textArr: string[] | undefined) => {
    if (!textArr || textArr.length === 0) return null;
    if (textArr.length === 1) {
      return textArr[0];
    } else {
      return textArr.join("| ");
    }
  };

  const handleCardClick = () => {
    if (hasPdf && art.pdf) {
      window.open(art.pdf, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={`h-full space-y-2 p-4 rounded-lg border-t-2 border-hs-card-border bg-hs-card text-lg font-medium transition-all duration-500 ${
        isHovering && hasPdf
          ? "shadow-[0_4px_12px_rgba(0,0,0,0.9)] bg-[#3A3A3A] -translate-y-2 cursor-pointer"
          : "shadow-[0_2px_8px_rgba(0,0,0,0.55)] bg-hs-card"
      }`}
      onMouseEnter={() => hasPdf && setIsHovering(true)}
      onMouseLeave={() => hasPdf && setIsHovering(false)}
      onClick={handleCardClick}
      role={hasPdf ? "button" : "presentation"}
      tabIndex={hasPdf ? 0 : undefined}
      onKeyDown={(e) => {
        if (hasPdf && (e.key === "Enter" || e.key === " ")) {
          handleCardClick();
          e.preventDefault();
        }
      }}
    >
      <h3 className="text-xl text-hs-subtitle font-semibold font-interactive">
        {artistsName}
      </h3>
      <p className="text-hs-body font-body">{art.purpose}</p>
      <p className="text-hs-body font-body">
        {formatPublishText(art.publishText)}
      </p>
      {hasPdf && (
        <div
          className={`mt-2 transition-opacity duration-300 ${
            isHovering ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-hs-accent font-interactive text-sm">View PDF</p>
        </div>
      )}
    </div>
  );
};

export default ArtsItemCard;
