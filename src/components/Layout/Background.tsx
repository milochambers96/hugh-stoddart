import { ReactNode } from "react";

interface BackgroundProps {
  children: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="min-h-screen bg-hs-background relative overflow-hidden">
      {/* Noise overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-75 mix-blend-overlay">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.45"
              numOctaves="2"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0.1" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* Page Content */}
      <div className="relative">{children}</div>
    </div>
  );
};

export default Background;
