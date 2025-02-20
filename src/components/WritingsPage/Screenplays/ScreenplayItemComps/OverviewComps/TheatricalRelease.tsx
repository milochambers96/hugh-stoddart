import { Screenplay } from "../../../../../data/writings/screen/screenplays";

interface TheatricalReleaseProp {
  screen: Screenplay;
}

const TheatricalRelease = ({ screen }: TheatricalReleaseProp) => {
  console.log("Theatrical data:", screen.release?.broadcast?.broadcastHistory);

  if (!screen.release?.broadcast?.broadcastHistory?.length) return null;

  const theatricalScreenings = screen.release.broadcast.broadcastHistory.filter(
    (broadcast) =>
      broadcast.type === "Cinema" || broadcast.type === "Special Screening"
  );

  if (!theatricalScreenings.length) return null;

  return (
    <div>
      <ul className="space-y-4">
        {theatricalScreenings.map((broadcast, index) => (
          <li key={index}>
            {broadcast.type === "Cinema"
              ? `Released in cinemas (${broadcast.regions?.join(", ")}) in ${
                  Array.isArray(broadcast.date)
                    ? broadcast.date.join(", ")
                    : broadcast.date
                }.`
              : `${broadcast.event} (${
                  Array.isArray(broadcast.date)
                    ? broadcast.date.join(", ")
                    : broadcast.date
                }).`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TheatricalRelease;
