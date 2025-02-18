interface MediaDisplayProps {
  media: {
    hasVideo?: boolean;
    image: string;
    videoPath: string;
  };
  title: string;
}

const MediaDisplay = ({ media, title }: MediaDisplayProps) => {
  return media.hasVideo ? (
    <iframe
      src={`${media.videoPath}?autoplay=0&title=0&byline=0&portrait=0`}
      width="640"
      height="360"
      allow="autoplay; fullscreen"
      allowFullScreen
    ></iframe>
  ) : (
    <img src={media.image} alt={`A still shot from ${title}`} />
  );
};

export default MediaDisplay;
