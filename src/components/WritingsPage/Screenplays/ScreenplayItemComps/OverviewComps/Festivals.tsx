import { Screenplay } from "../../../../../data/writings/screen/screenplays";

interface FestivalsProp {
  screen: Screenplay;
}

const Festivals = ({ screen }: FestivalsProp) => {
  return screen.release?.festivals ? (
    <div>
      <h3 className="font-semibold mb-2 italic underline">
        Festival Screenings:
      </h3>
      <ul className="ml-2 mt-2 space-y-1 list-disc list-inside text-sm">
        {screen.release.festivals.map((festival, index) => (
          <li key={index}>{festival}</li>
        ))}
      </ul>
    </div>
  ) : null;
};

export default Festivals;
