import { Screenplay } from "../../../../data/writings/screen/screenplays";

interface DetailsProp {
  screen: Screenplay;
}

const DetailsSubtitle = ({ screen }: DetailsProp) => {
  const formatHeaderDetails = () => {
    const details = [];

    // Type and year
    details.push(`${screen.type} (${screen.year})`);

    // Duration/Episodes
    if (screen.duration) {
      details.push(`${screen.duration} minutes`);
    }
    if (screen.episodes) {
      details.push(`${screen.episodes} episodes`);
    }

    return details.join("  |  ");
  };

  return <h2 className="text-xl">{formatHeaderDetails()}</h2>;
};

export default DetailsSubtitle;
