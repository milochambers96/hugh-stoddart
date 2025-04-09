/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, useEffect, useState } from "react";

interface MediaDisplayProps {
  media: {
    hasVideo?: boolean;
    image: string;
    videoPath?: string;
  };
  title: string;
}

const MediaDisplay = ({ media, title }: MediaDisplayProps) => {
  const [vimeoReady, setVimeoReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const videoIdRef = useRef<string | null>(null);

  // Extract Vimeo ID from path
  useEffect(() => {
    if (media.videoPath) {
      const match = media.videoPath.match(/video\/(\d+)/);
      if (match && match[1]) {
        videoIdRef.current = match[1];
      }
    }
  }, [media.videoPath]);

  // Load Vimeo API
  useEffect(() => {
    if (!media.hasVideo || !media.videoPath) return;

    // Check if script already exists
    if (
      !document.querySelector('script[src*="player.vimeo.com/api/player.js"]')
    ) {
      const script = document.createElement("script");
      script.src = "https://player.vimeo.com/api/player.js";
      script.async = true;
      script.onload = () => setVimeoReady(true);
      document.body.appendChild(script);
    } else {
      setVimeoReady(true);
    }

    // Cleanup
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
    };
  }, [media.hasVideo, media.videoPath]);

  // Initialize player when Vimeo API is ready
  useEffect(() => {
    if (!vimeoReady || !containerRef.current || !videoIdRef.current) return;

    // Clear container first to prevent duplicates
    if (containerRef.current) {
      containerRef.current.innerHTML = "";
    }

    // Destroy existing player if any
    if (playerRef.current) {
      playerRef.current.destroy();
      playerRef.current = null;
    }

    try {
      // Create a single iframe element for Vimeo to use
      const iframe = document.createElement("iframe");
      containerRef.current.appendChild(iframe);

      // Create player with options
      playerRef.current = new (window as any).Vimeo.Player(iframe, {
        id: parseInt(videoIdRef.current),
        width: 640,
        height: 360,
        title: false,
        byline: false,
        portrait: false,
        transparent: false,
        allowfullscreen: true,
      });

      // Special Safari fullscreen handling
      const isSafari = /^((?!chrome|android).)*safari/i.test(
        navigator.userAgent
      );
      if (isSafari) {
        // Store the original iframe for reference
        const originalIframe = iframe;

        // Safari-specific fullscreen handler
        const handleFullscreenChange = () => {
          const isFullscreen =
            !!document.fullscreenElement ||
            !!(document as any).webkitFullscreenElement;

          if (!isFullscreen && playerRef.current) {
            // Capture time so we can restore it
            playerRef.current.getCurrentTime().then((time: number) => {
              // Capture playing state
              playerRef.current.getPaused().then((paused: boolean) => {
                const wasPlaying = !paused;

                // Create temporary overlay
                if (containerRef.current) {
                  const overlay = document.createElement("div");
                  overlay.style.position = "absolute";
                  overlay.style.top = "0";
                  overlay.style.left = "0";
                  overlay.style.width = "100%";
                  overlay.style.height = "100%";
                  overlay.style.backgroundColor = "#000";
                  overlay.style.backgroundImage = `url(${media.image})`;
                  overlay.style.backgroundSize = "contain";
                  overlay.style.backgroundPosition = "center";
                  overlay.style.backgroundRepeat = "no-repeat";
                  overlay.style.zIndex = "10";

                  // Add overlay to container
                  containerRef.current.style.position = "relative";
                  containerRef.current.appendChild(overlay);

                  // After a small delay, recreate the player
                  setTimeout(() => {
                    // Remove the original iframe and overlay
                    if (originalIframe.parentNode) {
                      originalIframe.parentNode.removeChild(originalIframe);
                    }

                    if (overlay.parentNode) {
                      overlay.parentNode.removeChild(overlay);
                    }

                    // Destroy the old player
                    if (playerRef.current) {
                      playerRef.current.destroy();
                      playerRef.current = null;
                    }

                    // Create a new iframe
                    const newIframe = document.createElement("iframe");
                    if (containerRef.current) {
                      containerRef.current.appendChild(newIframe);
                    }

                    // Create a new player
                    playerRef.current = new (window as any).Vimeo.Player(
                      newIframe,
                      {
                        id: parseInt(videoIdRef.current as string),
                        width: 640,
                        height: 360,
                        title: false,
                        byline: false,
                        portrait: false,
                        transparent: false,
                        allowfullscreen: true,
                      }
                    );

                    // Set the playback position and resume if needed
                    playerRef.current.setCurrentTime(time).then(() => {
                      if (wasPlaying) {
                        playerRef.current.play();
                      }
                    });
                  }, 200);
                }
              });
            });
          }
        };

        document.addEventListener("fullscreenchange", handleFullscreenChange);
        document.addEventListener(
          "webkitfullscreenchange",
          handleFullscreenChange
        );

        return () => {
          document.removeEventListener(
            "fullscreenchange",
            handleFullscreenChange
          );
          document.removeEventListener(
            "webkitfullscreenchange",
            handleFullscreenChange
          );
        };
      }
    } catch (error) {
      console.error("Error initializing Vimeo player:", error);

      // Fallback to basic iframe
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
        const iframe = document.createElement("iframe");
        iframe.src = media.videoPath || "";
        iframe.width = "640";
        iframe.height = "360";
        iframe.style.maxWidth = "100%";
        iframe.allow = "autoplay; fullscreen; picture-in-picture";
        iframe.allowFullscreen = true;
        containerRef.current.appendChild(iframe);
      }
    }
  }, [vimeoReady, media.videoPath, media.image]);

  if (media.hasVideo && media.videoPath) {
    return (
      <div
        ref={containerRef}
        className="vimeo-container"
        style={{
          width: "640px",
          maxWidth: "100%",
          height: "360px",
          background: "#000",
        }}
      ></div>
    );
  } else {
    return (
      <img
        src={media.image}
        alt={`A still shot from ${title}`}
        className="max-w-full h-auto"
      />
    );
  }
};

export default MediaDisplay;
