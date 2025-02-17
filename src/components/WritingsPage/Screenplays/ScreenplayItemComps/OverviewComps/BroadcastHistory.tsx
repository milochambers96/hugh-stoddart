import { Screenplay } from "../../../../../data/writings/screen/screenplays";

interface BroadcastHistoryProp {
  screen: Screenplay;
}

const BroadcastHistory = ({ screen }: BroadcastHistoryProp) => {
  console.log("Broadcast data:", screen.release?.broadcast?.broadcastHistory);

  if (!screen.release?.broadcast?.broadcastHistory?.length) return null;

  return (
    <div>
      <ul className="space-y-6">
        {screen.release.broadcast.broadcastHistory.map((broadcast, index) => (
          <li key={index} className="text-white">
            {broadcast.type === "TV" ? (
              <>
                Broadcast on {broadcast.channel} in{" "}
                {Array.isArray(broadcast.date)
                  ? broadcast.date.join(", ")
                  : broadcast.date}
                .
                {broadcast.wasRepeated && broadcast.repeatFreq && (
                  <span>{` Repeated ${broadcast.repeatFreq}.`}</span>
                )}
                {broadcast.wasRepeated && broadcast.repeatDate && (
                  <span>{` Repeated in ${broadcast.repeatDate}.`}</span>
                )}
              </>
            ) : broadcast.type === "Special Re-run" ? (
              <>
                {broadcast.message} ({broadcast.location},{" "}
                {Array.isArray(broadcast.date)
                  ? broadcast.date.join(", ")
                  : broadcast.date}
                ).
              </>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BroadcastHistory;
