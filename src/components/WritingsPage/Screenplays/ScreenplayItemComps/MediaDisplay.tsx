interface MediaDisplayProps {
  media: {
    hasVideo?: boolean;
    image: string;
    videoPath?: string;
  };
  title: string;
}

const MediaDisplay = ({ media, title }: MediaDisplayProps) => {
  if (media.hasVideo && media.videoPath) {
    return (
      <iframe
        src={`${media.videoPath}?autoplay=0&title=0&byline=0&portrait=0`}
        width="640"
        height="360"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="max-w-full"
      ></iframe>
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
