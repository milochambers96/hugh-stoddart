import { Screenplay } from "../../../../../data/writings/screen/screenplays";

interface StreamingAvailabilityProp {
  screen: Screenplay;
}

const StreamingAvailability = ({ screen }: StreamingAvailabilityProp) => {
  if (!screen.streaming?.isStreaming) return null;

  return (
    <div>
      {screen.streaming.available.length === 1 ? (
        <p>
          Available to watch on{" "}
          <a href={screen.streaming.available[0].path}>
            {screen.streaming.available[0].service}
          </a>
          .
        </p>
      ) : (
        <>
          <p>Streaming on: </p>
          <ul className="ml-2 mt-2 space-y-1 list-disc list-inside">
            {screen.streaming.available.map((platform, index) => (
              <li key={index}>
                <a href={platform.path}>{platform.service}</a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default StreamingAvailability;
