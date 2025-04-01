import { Screenplay } from "../../../../data/writings/screen/screenplays";
import Synopsis from "./OverviewComps/Synopsis";
import Awards from "./OverviewComps/Awards";
import Reviews from "./OverviewComps/Reviews";
import BroadcastHistory from "./OverviewComps/BroadcastHistory";
import TheatricalRelease from "./OverviewComps/TheatricalRelease";
import StreamingAvailability from "./OverviewComps/StreamingAvailability";
import Excerpt from "./OverviewComps/Excerpt";
import Festivals from "./OverviewComps/Festivals";
import HardCopy from "./OverviewComps/HardCopy";
import Purchase from "./OverviewComps/Purchase";

interface OverviewProp {
  screen: Screenplay;
}

const Overview = ({ screen }: OverviewProp) => {
  return (
    <article className="space-y-4">
      <Synopsis screen={screen} />
      <Awards screen={screen} />
      <Reviews screen={screen} />
      <TheatricalRelease screen={screen} />
      <BroadcastHistory screen={screen} />
      <StreamingAvailability screen={screen} />
      <Excerpt screen={screen} />
      <Festivals screen={screen} />
      <HardCopy screen={screen} />
      <Purchase screen={screen} />
    </article>
  );
};

export default Overview;
