interface MediaDisplayProps {
  media: {
    hasVideo?: boolean;
    image: string;
  };
  title: string;
}

const MediaDisplay = ({ media, title }: MediaDisplayProps) => {
  return media.hasVideo ? (
    <iframe
      src="https://player.vimeo.com/video/26933960"
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
