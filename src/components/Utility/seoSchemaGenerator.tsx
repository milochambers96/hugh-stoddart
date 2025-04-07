import {
  screenplays,
  Screenplay,
} from "../../data/writings/screen/screenplays";
import {
  theatreScripts,
  TheatreScript,
} from "../../data/writings/theatre/theatre";
/**
 * Generates Schema.org JSON-LD structured data for Hugh Stoddart's work
 * @param currentUrl The current page URL
 * @param imageUrl The URL for the main image
 * @returns Schema.org JSON-LD structured data as a string
 */
export const seoSchemaGenerator = (
  currentUrl: string,
  imageUrl: string
): string => {
  // Convert screenplays to Schema.org CreativeWork format
  const screenplayWorks = screenplays.map((screenplay: Screenplay) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const work: any = {
      "@type": "Movie",
      name: screenplay.title,
      description: screenplay.synopsis,
      datePublished: screenplay.year.toString(),
    };

    // Add director
    if (screenplay.directors && screenplay.directors.length > 0) {
      work.director = screenplay.directors.map((director) => ({
        "@type": "Person",
        name: director,
      }));
    }

    // Add cast if available
    if (screenplay.cast && screenplay.cast.length > 0) {
      work.actor = screenplay.cast.map((actor) => ({
        "@type": "Person",
        name: actor,
      }));
    }

    // Add image if available (ensuring it's a full URL)
    if (screenplay.media && screenplay.media.image) {
      // This will need to be adjusted based on how images are served in your app
      work.image = `/assets/screenplay-imgs/${screenplay.media.image
        .split("/")
        .pop()}`;
    }

    // Add awards if available
    if (screenplay.awards && screenplay.awards.hasAward) {
      work.award = screenplay.awards.award;
    }

    return work;
  });

  // Convert theatre scripts to Schema.org CreativeWork format
  const theatreWorks = theatreScripts.map((script: TheatreScript) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const work: any = {
      "@type": "CreativeWork",
      name: script.title,
      description: script.synopsis || `Theatre script: ${script.title}`,
      author: {
        "@type": "Person",
        name: "Hugh Stoddart",
      },
    };

    // Add premiere date if available
    if (script.premiere && script.premiere.year) {
      work.datePublished = script.premiere.year.toString();
    }

    // Add venue if performed
    if (script.wasPerformed && script.premiere && script.premiere.venue) {
      work.performerIn = {
        "@type": "TheaterEvent",
        location: {
          "@type": "PerformingArtsTheater",
          name: script.premiere.venue,
          address: script.premiere.location,
        },
      };
    }

    // Add cast if available
    if (script.cast && script.cast.length > 0) {
      work.actor = script.cast.map((actor) => ({
        "@type": "Person",
        name: actor,
      }));
    }

    // Add image if available
    if (script.image) {
      // This will need to be adjusted based on how images are served in your app
      work.image = `/assets/writing-page-imgs/${script.image.split("/").pop()}`;
    }

    return work;
  });

  // Combine all creative works
  const allWorks = [...screenplayWorks, ...theatreWorks];

  // Main schema for Hugh Stoddart
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hugh Stoddart",
    jobTitle: "Screenwriter",
    url: currentUrl,
    image: imageUrl,
    sameAs: [
      "https://www.imdb.com/name/nm0830964/",
      "https://en.wikipedia.org/wiki/Hugh_Stoddart",
    ],
    description:
      "Hugh Stoddart is an acclaimed screenwriter with a career spanning award-winning feature films and television dramas.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": currentUrl,
    },
    workExample: allWorks,
  };

  return JSON.stringify(schema);
};

export default seoSchemaGenerator;
