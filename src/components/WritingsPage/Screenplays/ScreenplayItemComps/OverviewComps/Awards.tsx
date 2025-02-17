import { Screenplay } from "../../../../../data/writings/screen/screenplays";

interface AwardsProp {
  screen: Screenplay;
}

const Awards = ({ screen }: AwardsProp) => {
  if (!screen.awards?.hasAward) return null;

  return (
    <ul className="text-hs-accent space-y-4">
      {screen.awards.award.map((award, index) => (
        <li key={index}>{award}.</li>
      ))}
    </ul>
  );
};

export default Awards;
