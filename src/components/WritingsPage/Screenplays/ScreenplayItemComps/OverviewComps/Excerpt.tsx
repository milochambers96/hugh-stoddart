import { Screenplay } from "../../../../../data/writings/screen/screenplays";

interface ExcerptProp {
  screen: Screenplay;
}

const Excerpt = ({ screen }: ExcerptProp) => {
  if (!screen.watchExcerpt) return null;

  return (
    <div>
      <p>
        Watch an excerpt of the film on{" "}
        <a
          href={screen.watchExcerpt?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-hs-link  hover:text-hs-link-hover font-medium"
        >
          {screen.watchExcerpt?.where}
        </a>
        .
      </p>
    </div>
  );
};

export default Excerpt;
