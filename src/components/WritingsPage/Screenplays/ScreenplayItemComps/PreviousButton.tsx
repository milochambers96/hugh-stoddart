import { Link } from "react-router-dom";
import { screenplays } from "../../../../data/writings/screen/screenplays";

interface PreviousButtonProps {
  screenIdNum: number;
}

const PreviousButton: React.FC<PreviousButtonProps> = ({ screenIdNum }) => {
  const screenIds = screenplays.map((s) => s.id);
  const lastScreenId = screenIds[screenIds.length - 1];
  const isDisabled = screenIdNum === lastScreenId;

  const prevScreenId = screenIdNum + 1;
  // if (screenIdNum === 9) prevScreenId = 11;
  // if (screenIdNum === 11) prevScreenId = 12;

  return (
    <Link to={`/Writings/Screenplays/${prevScreenId}`}>
      <button
        className={`px-4 py-2 rounded-lg font-semibold text-hs-button-text uppercase transition-all min-w-[112.03px]
          ${
            isDisabled
              ? "border border-hs-ghost-border text-hs-ghost-text hover:bg-hs-ghost-hover-bg hover:text-hs-ghost-hover-text hover:border-hs-ghost-hover-border active:scale-95 cursor-not-allowed"
              : "border border-hs-button bg-hs-button hover:bg-hs-button-hover active:scale-95 shadow-md"
          }
        `}
        disabled={isDisabled}
      >
        Back
      </button>
    </Link>
  );
};

export default PreviousButton;
