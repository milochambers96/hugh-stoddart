import { Screenplay } from "../../../../data/writings/screen/screenplays";
import Synopsis from "./OverviewComps/Synopsis";
import Awards from "./OverviewComps/Awards";
import Reviews from "./OverviewComps/Reviews";
import BroadcastHistory from "./OverviewComps/BroadcastHistory";
import TheatricalRelease from "./OverviewComps/TheatricalRelease";
import StreamingAvailability from "./OverviewComps/StreamingAvailability";
import Festivals from "./OverviewComps/Festivals";
import HardCopy from "./OverviewComps/HardCopy";

interface OverviewProp {
  screen: Screenplay;
}

const Overview = ({ screen }: OverviewProp) => {
  return (
    <article className="space-y-4">
      <Synopsis screen={screen} />
      <Awards screen={screen} />
      <Reviews screen={screen} />
      <BroadcastHistory screen={screen} />
      <TheatricalRelease screen={screen} />
      <StreamingAvailability screen={screen} />
      <Festivals screen={screen} />
      <HardCopy screen={screen} />
    </article>
  );
};

export default Overview;
