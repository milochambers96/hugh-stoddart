import { Link } from "react-router-dom";
import { screenplays } from "../../../../data/writings/screen/screenplays";

interface PreviousButtonProps {
  screenIdNum: number;
}

const PreviousButton: React.FC<PreviousButtonProps> = ({ screenIdNum }) => {
  const screenIds = screenplays.map((s) => s.id);
  const lastScreenId = screenIds[screenIds.length - 1];
  const isDisabled = screenIdNum === lastScreenId;

  let prevScreenId = screenIdNum + 1;
  if (screenIdNum === 9) prevScreenId = 11;
  if (screenIdNum === 11) prevScreenId = 12;

  return (
    <Link to={`/Writings/Screenplays/${prevScreenId}`}>
      <button
        className={`px-4 py-2 rounded-lg font-semibold text-white uppercase transition-all
          ${
            isDisabled
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-hs-accent hover:bg-opacity-80 active:scale-95 shadow-md"
          }
        `}
        disabled={isDisabled}
      >
        Previous
      </button>
    </Link>
  );
};

export default PreviousButton;
