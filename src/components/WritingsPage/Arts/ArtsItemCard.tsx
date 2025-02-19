import { ArtText } from "../../../data/writings/art/arts";

interface ArtsItemCardProp {
  art: ArtText;
}

const ArtsItemCard = ({ art }: ArtsItemCardProp) => {
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
    <div className="space-y-2 p-4 h-full shadow-lg rounded-lg border border-md bg-hs-accent text-lg font-medium">
      <h3 className="text-xl font-semibold">{artistsName}</h3>
      <p>{art.purpose}</p>
      <p>{formatPublishText(art.publishText)}</p>
      {/* <p>
        <a href={art.pdf}>Read.</a>
      </p> */}
    </div>
  );
};

export default ArtsItemCard;
