import { useState } from "react";
import { Link } from "react-router-dom";

interface ScreenFrameProps {
  imagePath: string;
  title: string;
  id: number;
}

const ScreenplayFrame = ({ imagePath, title, id }: ScreenFrameProps) => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div
      className="flex-none mr-4 shadow-lg cursor-pointer"
      onMouseEnter={() => setIsShowing(true)}
      onMouseLeave={() => setIsShowing(false)}
    >
      <Link to={`/Writings/Screenplays/${id}`}>
        <div className="relative w-64 md:w-80 h-48 md:h-60 border-4 border-gray-800/60 bg-gray-900/60">
          {/* Top Sprocket Strip */}
          <div className="absolute -top-3 left-0 w-full h-4 bg-gray-800/60">
            <div className="w-full h-full flex justify-between px-2 items-center">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-transparent border-2 border-transparent"
                  style={{
                    boxShadow: "0 0 0 2px transparent, inset 0 0 0 2px #1a1a1a",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content Area */}
          <figure className="flex items-center justify-center h-full px-4 overflow-hidden">
            <img
              src={imagePath}
              alt={`A still shot from ${title}.`}
              className={`max-w-full max-h-[95%] object-contain transition-all duration-300 ${
                isShowing ? "blur-sm scale-105" : ""
              }`}
            />
            <figcaption
              className={`absolute inset-0 flex items-center justify-center  bg-gray-800/70  text-hs-subtitle text-center text-xl md:text-3xl font-bold p-2 transition-opacity duration-300 ${
                isShowing ? "opacity-100" : "opacity-0"
              }`}
              style={{ zIndex: 10 }}
            >
              {title}
            </figcaption>
          </figure>

          {/* Bottom Sprocket Strip */}
          <div className="absolute -bottom-3 left-0 w-full h-4 bg-gray-800/60">
            <div className="w-full h-full flex justify-between px-2 items-center">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-transparent border-2 border-transparent"
                  style={{
                    boxShadow: "0 0 0 2px transparent, inset 0 0 0 2px #1a1a1a",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ScreenplayFrame;
