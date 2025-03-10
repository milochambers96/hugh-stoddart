import { useState, useEffect } from "react";

interface QuadPillProps {
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  display?: string;
  setDisplay: (arg: string) => void;
}

const QuadPillTab = ({
  display,
  setDisplay,
  option1,
  option2,
  option3,
  option4,
}: QuadPillProps) => {
  const [opt1Text, setOpt1Text] = useState("");
  const [opt2Text, setOpt2Text] = useState("");
  const [opt3Text, setOpt3Text] = useState("");
  const [opt4Text, setOpt4Text] = useState("");

  const [infoToRender, setInfoToRender] = useState(option1);

  useEffect(() => {
    const capitaliseFirst = (str: string) => {
      if (str !== "") {
        const capitalLet = str[0].toUpperCase();
        return str.replace(str[0], capitalLet);
      }
      return str;
    };

    setOpt1Text(capitaliseFirst(option1));
    setOpt2Text(capitaliseFirst(option2));
    setOpt3Text(capitaliseFirst(option3));
    setOpt4Text(capitaliseFirst(option4));

    setDisplay(infoToRender);
  }, [infoToRender]);

  return (
    <div className="relative bg-hs-accent/70 rounded-full px-2 py-3 flex w-80">
      {/* Sliding background */}
      <div
        className={`absolute top-1 h-[calc(100%-8px)] w-[calc(25%-4px)] rounded-full transition-all duration-300 ease-in-out bg-hs-button
              ${
                display === option2
                  ? "translate-x-full"
                  : display === option3
                  ? "translate-x-[200%]"
                  : display === option4
                  ? "translate-x-[300%]"
                  : "translate-x-0"
              }`}
      />

      {/* Buttons */}
      <button
        onClick={() => setInfoToRender(option1)}
        className="w-1/4 rounded-full py-1 text-sm font-medium transition-colors relative z-10"
      >
        <span
          className={
            display === option1 ? "text-hs-title" : "text-hs-button-text"
          }
        >
          {opt1Text}
        </span>
      </button>
      <button
        onClick={() => setInfoToRender(option2)}
        className="w-1/4 rounded-full py-1 text-sm font-medium transition-colors relative z-10"
      >
        <span
          className={
            display === option2 ? "text-hs-title" : "text-hs-button-text"
          }
        >
          {opt2Text}
        </span>
      </button>
      <button
        onClick={() => setInfoToRender(option3)}
        className="w-1/4 rounded-full py-1 text-sm font-medium transition-colors relative z-10"
      >
        <span
          className={
            display === option3 ? "text-hs-title" : "text-hs-button-text"
          }
        >
          {opt3Text}
        </span>
      </button>
      <button
        onClick={() => setInfoToRender(option4)}
        className="w-1/4 rounded-full py-1 text-sm font-medium transition-colors relative z-10"
      >
        <span
          className={
            display === option4 ? "text-hs-title" : "text-hs-button-text"
          }
        >
          {opt4Text}
        </span>
      </button>
    </div>
  );
};

export default QuadPillTab;
