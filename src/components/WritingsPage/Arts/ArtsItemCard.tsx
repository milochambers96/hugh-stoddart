import { useState } from "react";

import { ArtText } from "../../../data/writings/art/arts";

interface ArtsItemCardProp {
  art: ArtText;
}

const ArtsItemCard = ({ art }: ArtsItemCardProp) => {
  const [isHovering, setIsHovering] = useState(false);

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
  return (
    <div
      className={`h-full space-y-2 p-4  rounded-lg border-t-2 border-hs-card-border bg-hs-card text-lg font-medium transition-all duration-500 ${
        isHovering
          ? "shadow-[0_4px_12px_rgba(0,0,0,0.9)] bg-[#3A3A3A] -translate-y-2"
          : "shadow-[0_2px_8px_rgba(0,0,0,0.55)] bg-hs-card"
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <h3 className="text-xl text-hs-subtitle font-semibold">{artistsName}</h3>
      <p className="text-hs-body">{art.purpose}</p>
      <p className="text-hs-body">{formatPublishText(art.publishText)}</p>
      {/* <p>
        <a href={art.pdf}>Read.</a>
      </p> */}
    </div>
  );
};

export default ArtsItemCard;
