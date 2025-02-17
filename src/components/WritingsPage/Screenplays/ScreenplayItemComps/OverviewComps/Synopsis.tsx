import { Screenplay } from "../../../../../data/writings/screen/screenplays";

interface SynopsisProp {
  screen: Screenplay;
}

const Synopsis = ({ screen }: SynopsisProp) => {
  return <p className="text-justify">{screen.synopsis}</p>;
};

export default Synopsis;
