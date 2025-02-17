import { Screenplay } from "../../../../../data/writings/screen/screenplays";

interface HardCopyProp {
  screen?: Screenplay;
}

const HardCopy = ({ screen }: HardCopyProp) => {
  return (
    <>
      {screen?.release?.hardCopy?.hasHardCopy && (
        <p>Available on {screen.release.hardCopy.format}.</p>
      )}
    </>
  );
};

export default HardCopy;
