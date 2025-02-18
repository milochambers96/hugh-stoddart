import { Screenplay } from "../../../../../data/writings/screen/screenplays";

interface BroadcastHistoryProp {
  screen: Screenplay;
}

const BroadcastHistory = ({ screen }: BroadcastHistoryProp) => {
  if (!screen.release?.broadcast?.broadcastHistory?.length) return null;

  // Filter for TV broadcasts
  const tvBroadcasts = screen.release.broadcast.broadcastHistory.filter(
    (broadcast) => broadcast.type === "TV"
  );

  // Other broadcast types
  const otherBroadcasts = screen.release.broadcast.broadcastHistory.filter(
    (broadcast) => broadcast.type !== "TV"
  );

  if (!tvBroadcasts.length && !otherBroadcasts.length) return null;

  const formatBroadcasts = () => {
    if (tvBroadcasts.length === 0) return null;

    if (tvBroadcasts.length === 1) {
      const broadcast = tvBroadcasts[0];
      return `Broadcast on ${broadcast.channel} in ${broadcast.date}${
        broadcast.wasRepeated
          ? broadcast.repeatFreq
            ? ` and repeated ${broadcast.repeatFreq}`
            : broadcast.repeatDate
            ? ` and repeated in ${broadcast.repeatDate}`
            : ""
          : ""
      }.`;
    }

    // Multiple broadcasts
    const broadcastTexts = tvBroadcasts.map((broadcast, i) => {
      return `${broadcast.channel} in ${broadcast.date}${
        broadcast.wasRepeated
          ? broadcast.repeatFreq
            ? ` (repeated ${broadcast.repeatFreq})`
            : broadcast.repeatDate
            ? ` (repeated in ${broadcast.repeatDate})`
            : ""
          : ""
      }`;
    });

    if (broadcastTexts.length === 2) {
      return `Broadcast on: ${broadcastTexts[0]} and ${broadcastTexts[1]}.`;
    }

    const lastBroadcast = broadcastTexts.pop();
    return `Broadcast on: ${broadcastTexts.join("; ")}; and ${lastBroadcast}.`;
  };

  return (
    <div>
      {tvBroadcasts.length > 0 && (
        <p className="text-white">{formatBroadcasts()}</p>
      )}

      {otherBroadcasts.length > 0 && (
        <ul className="space-y-2 mt-2">
          {otherBroadcasts.map((broadcast, index) => (
            <li key={index} className="text-white">
              {broadcast.type === "Special Re-run" ? broadcast.message : null}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BroadcastHistory;
