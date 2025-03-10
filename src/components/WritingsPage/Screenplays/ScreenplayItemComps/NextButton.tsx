import { Link } from "react-router-dom";

const NextButton = ({ screenIdNum }: { screenIdNum: number }) => {
  const isDisabled = screenIdNum === 1;

  // Skip 10 logic (11 → 9 instead of 10)
  const nextId = screenIdNum === 11 ? 9 : screenIdNum - 1;

  return (
    <Link to={`/Writings/Screenplays/${nextId}`}>
      <button
        className={`px-4 py-2 rounded-lg font-semibold   text-hs-button-text uppercase transition-all min-w-[112.03px]
          ${
            isDisabled
              ? "border border-hs-ghost-border text-hs-ghost-text hover:bg-hs-ghost-hover-bg hover:text-hs-ghost-hover-text hover:border-hs-ghost-hover-border active:scale-95 cursor-not-allowed"
              : "border border-hs-button bg-hs-button hover:bg-hs-button-hover active:scale-95 shadow-md"
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
