import { Link } from "react-router-dom";

const NextButton = ({ screenIdNum }: { screenIdNum: number }) => {
  const isDisabled = screenIdNum === 1;

  // Skip 10 logic (11 → 9 instead of 10)
  const nextId = screenIdNum === 11 ? 9 : screenIdNum - 1;

  return (
    <Link to={`/Writings/Screenplays/${nextId}`}>
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
        Next
      </button>
    </Link>
  );
};

export default NextButton;
