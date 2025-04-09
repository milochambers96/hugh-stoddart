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
  const [showPlaceholder, setShowPlaceholder] = useState(false);

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
      }
    };
  }, [media.hasVideo, media.videoPath]);

  // Initialize player when Vimeo API is ready
  useEffect(() => {
    if (!vimeoReady || !containerRef.current || !videoIdRef.current) return;

    // Hide any placeholder that might be showing
    setShowPlaceholder(false);

    try {
      // Create player with options
      playerRef.current = new (window as any).Vimeo.Player(
        containerRef.current,
        {
          id: parseInt(videoIdRef.current),
          width: 640,
          height: 360,
          title: false,
          byline: false,
          portrait: false,
          transparent: false,
          allowfullscreen: true,
          autopause: false,
          background: false,
          playsinline: true,
        }
      );

      // Special Safari fullscreen handling
      const isSafari = /^((?!chrome|android).)*safari/i.test(
        navigator.userAgent
      );
      if (isSafari) {
        // Pre-capture the poster image for smoother transition
        let posterUrl = "";
        playerRef.current
          .getVideoThumbnail()
          .then((thumbnail: any) => {
            if (thumbnail && thumbnail.url) {
              posterUrl = thumbnail.url;
            }
          })
          .catch(() => {
            // Use provided image as fallback
            posterUrl = media.image;
          });

        // Safari-specific fullscreen handler
        const handleFullscreenChange = () => {
          const isFullscreen =
            !!document.fullscreenElement ||
            !!(document as any).webkitFullscreenElement;

          if (!isFullscreen && playerRef.current) {
            let currentTime = 0;
            let isPlaying = false;

            // Get current state before destroying
            playerRef.current
              .getCurrentTime()
              .then((time: number) => {
                currentTime = time;
                return playerRef.current.getPaused();
              })
              .then((paused: boolean) => {
                isPlaying = !paused;

                // Show placeholder to hide the transition
                setShowPlaceholder(true);

                // On Safari, we need to recreate the player
                setTimeout(() => {
                  if (!containerRef.current || !videoIdRef.current) return;

                  // Destroy existing player
                  if (playerRef.current) {
                    playerRef.current.destroy();
                  }

                  // Clear container
                  containerRef.current.innerHTML = "";

                  // Create a new player
                  playerRef.current = new (window as any).Vimeo.Player(
                    containerRef.current,
                    {
                      id: parseInt(videoIdRef.current),
                      width: 640,
                      height: 360,
                      title: false,
                      byline: false,
                      portrait: false,
                      transparent: false,
                      allowfullscreen: true,
                      autopause: false,
                      background: false,
                      playsinline: true,
                    }
                  );

                  // Restore position and play state
                  playerRef.current.setCurrentTime(currentTime).then(() => {
                    if (isPlaying) {
                      playerRef.current.play().then(() => {
                        // Hide placeholder after player is playing
                        setTimeout(() => {
                          setShowPlaceholder(false);
                        }, 100);
                      });
                    } else {
                      setShowPlaceholder(false);
                    }
                  });
                }, 100);
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
        style={{
          position: "relative",
          width: "640px",
          maxWidth: "100%",
          height: "360px",
        }}
      >
        <div
          ref={containerRef}
          className="vimeo-container"
          style={{
            width: "100%",
            height: "100%",
            background: "#000",
          }}
        ></div>

        {/* Placeholder to hide transition */}
        {showPlaceholder && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "#000",
              backgroundImage: `url(${media.image})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: 10,
            }}
          />
        )}
      </div>
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
