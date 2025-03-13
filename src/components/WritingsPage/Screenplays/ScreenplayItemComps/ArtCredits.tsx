import { Screenplay } from "../../../../data/writings/screen/screenplays";

interface ArtCreditsProp {
  screen: Screenplay;
}

const ArtCredits = ({ screen }: ArtCreditsProp) => {
  if (screen.type !== "Art Film") return null;

  return (
    <article className="space-y-4">
      <p>A film by {screen.directors}.</p>
      <p>Script by {screen.writters}.</p>
    </article>
  );
};

export default ArtCredits;
