import beggingRingImg from "../../../assets/screenplay-imgs/begging-the-ring-img.jpg";
import trespasserImg from "../../../assets/screenplay-imgs/the-trespasser-img.jpg";
import rememberanceImg from "../../../assets/screenplay-imgs/remembrance-img.jpg";
import lighthouseImg from "../../../assets/screenplay-imgs/lighthouse-img.jpg";
import hardTravellingImg from "../../../assets/screenplay-imgs/hard-traveling-img.jpg";
import worldOfYouImg from "../../../assets/screenplay-imgs/we-think-the-world-of-you-img.jpg";
import bigBatImg from "../../../assets/screenplay-imgs/big-bittalions-img.jpg";
import millFlossImg from "../../../assets/screenplay-imgs/mill-on-the-floss-img.jpg";
import dialoguesDeadImg from "../../../assets/screenplay-imgs/dialogues-of-the-dead-img.jpg";
import myPassageImg from "../../../assets/screenplay-imgs/my-passage-img.jpg";
import lifetimeImg from "../../../assets/screenplay-imgs/lifetime-thumb-img.jpg";
import mothImg from "../../../assets/screenplay-imgs/moth-dust-thumb-img.jpg";
import waitingForYouImg from "../../../assets/screenplay-imgs/waiting-for-you-img.jpg";

export const screenplayIntro =
  "Hugh Stoddart’s screenwriting career spans acclaimed feature films and television dramas. Explore his body of work, including powerful stories brought to life on screen, from character-driven narratives to adaptations of literary classics.";

interface Release {
  broadcast?: {
    wasLiveBroadcasted: boolean;
    broadcastHistory: {
      type?: string;
      channel?: string;
      date?: number | number[];
      wasRepeated?: boolean;
      repeatDate?: number;
      repeatFreq?: string;
      repeatMessage?: string;
      regions?: string[];
      event?: string;
      location?: string;
      link?: string;
      message?: string;
      "link-text"?: string;
    }[];
  };
  hardCopy?: {
    hasHardCopy: boolean;
    format: string;
  };
  festivals?: string[];
}

interface Review {
  comment: string;
  author: string;
}

interface Reviews {
  hasReview: boolean;
  reviews: Review[];
}

interface Media {
  image: string;
  hasVideo?: boolean;
  videoPath?: string;
}

export interface Streaming {
  isStreaming: boolean;
  available: {
    service: string;
    path: string;
  }[];
}

export interface Screenplay {
  id: number;
  title: string;
  type: string;
  duration?: number;
  episodes?: number;
  year: number;
  release?: Release;
  cast?: string[];
  isCowritten?: boolean;
  writters: string[];
  directors: string[];
  producer?: string[];
  execProduction?: string[];
  synopsis: string;
  media: Media;
  reviews?: Reviews;
  awards?: {
    hasAward: boolean;
    award: string[];
  };
  streaming?: Streaming;
  watchExcerpt?: {
    link: string;
    where: string;
  };
  artist?: string[];
  musicians?: string[];
}

export const screenplays: Screenplay[] = [
  {
    id: 1,
    title: "Begging the Ring",
    type: "Film",
    duration: 55,
    year: 1978,
    release: {
      broadcast: {
        wasLiveBroadcasted: true,
        broadcastHistory: [
          {
            type: "TV",
            channel: "BBC 2",
            date: 1978,
          },
        ],
      },
    },
    cast: ["Danny Simpson", "Jon Croft", "Janette Legge"],
    isCowritten: true,
    writters: ["Hugh Stoddart", "Colin Gregg"],
    directors: ["Colin Gregg"],
    producer: ["Colin Gregg"],
    synopsis:
      "An original screenplay, filmed in Cornwall on a tiny budget, then purchased for TV. A young man is faced with conscription, introduced for the first time in 1916.",
    media: {
      image: beggingRingImg,
    },
    reviews: {
      hasReview: true,
      reviews: [
        {
          comment:
            "A symbolic and sensitive study of individual conscience during the First World War",
          author: "Adrian Turner (NFT Programme)",
        },
      ],
    },
    awards: {
      hasAward: true,
      award: ["Grierson Award, London Film Festival 1978"],
    },
  },

  {
    id: 2,
    title: "The Trespasser",
    type: "Film",
    duration: 90,
    year: 1981,

    release: {
      broadcast: {
        wasLiveBroadcasted: true,
        broadcastHistory: [
          {
            type: "TV",
            channel: "ITV",
            date: 1981,
          },

          {
            type: "Special Screening",
            event: "Screened at NFT",
            location: "NFT",
            date: 2016,
          },
        ],
      },
    },
    cast: ["Alan Bates", "Pauline Moran"],
    writters: ["Hugh Stoddart"],
    directors: ["Colin Gregg"],
    producer: ["Polygram"],
    synopsis:
      "Based on an early novel by D.H.Lawrence: a married man has a doomed love affair with his violin pupil.",
    media: {
      image: trespasserImg,
    },
    reviews: {
      hasReview: true,
      reviews: [
        {
          comment:
            "The Trespasser exploited a rich vein of lyrical sensuousness",
          author: "Richard Last (Daily Telegraph)",
        },
      ],
    },
  },

  {
    id: 3,
    title: "Remembrance",
    type: "Film",
    duration: 114,
    year: 1982,

    release: {
      broadcast: {
        wasLiveBroadcasted: true,
        broadcastHistory: [
          {
            type: "Cinema",
            regions: ["UK"],
            date: 1982,
            wasRepeated: true,
            message:
              "Sold-out screenings at the Peninsula Arts Cinema, Plymouth, in 2017 and 2024",
          },

          {
            type: "TV",
            channel: "Channel 4",
            date: 1982,
            wasRepeated: true,
            repeatMessage:
              "Repeated on Channel 4 in 2018 to celebrate Gary Oldman",
          },

          {
            type: "Special Screening",
            event: "Screened at Peninsula Arts Cinema, Plymouth, sold-out",
            location: "Peninsual Arts Cinema",
            date: [2017, 2024],
            link: "https://plymouthartscinema.org/remembrance-a-film-that-will-mean-a-lot-to-anybody-from-plymouth/",
          },

          // {
          //   type: "Special Re-run",
          //   message: "Repeated on Channel 4 in 2018 to celebrate Gary Oldman.",
          //   location: "TV Screening",
          //   date: [2018],
          // },

          {
            type: "Restoration",
            message:
              "This film has been restored and is now available as a blu-ray from",
            "link-text": "BFI Shop",
            link: "placeholder",
          },
        ],
      },
    },
    cast: ["Gary Oldman", "Tim Spall", "John Altman", "Nick Dunning"],
    writters: ["Hugh Stoddart"],
    directors: ["Colin Gregg"],
    producer: ["Colin Gregg"],
    execProduction: ["David Rose (Channel 4)"],
    synopsis:
      "An original script: a group of young RN seamen spend their last 24 hours ashore in Plymouth. Although set in peacetime, the film was inspired by the monument there to those 'lost at sea' in war.",
    media: {
      image: rememberanceImg,
    },
    streaming: {
      isStreaming: true,
      available: [
        {
          service: "Prime Video",
          path: "amazon.co.uk/gp/video/detail/B09276XKG3/ref=atv_sr_fle_c_srce7a38_1_1_1?sr=1-1&pageTypeIdSource=ASIN&pageTypeId=B0D81K6LYV&qid=1741616055741",
        },
      ],
    },
    reviews: {
      hasReview: true,
      reviews: [
        {
          comment: "An accomplished, original and important movie",
          author: "Derek Malcolm (Guardian)",
        },
      ],
    },
    awards: {
      hasAward: true,
      award: [
        "Grand Prize, Taormina Film Festival",
        "Shortlisted for Best Screenplay, Evening Standard Awards",
      ],
    },
  },

  {
    id: 4,
    title: "To The Lighthouse",
    type: "Film",
    duration: 115,
    year: 1983,

    release: {
      broadcast: {
        wasLiveBroadcasted: true,
        broadcastHistory: [
          {
            type: "TV",
            channel: "BBC 1",
            date: 1983,
            wasRepeated: true,
            repeatFreq: "twice",
          },

          {
            type: "Special Screening",
            event:
              "Screened at the Chichester Film Festival to link with an exhibition at the Pallant House Gallery of art inspired by Woolf's writing",
            location: "Chichester Film Festival",
            date: 2018,
          },
        ],
      },
    },
    cast: ["Michael Gough", "Rosemary Harris", "Kenneth Branagh"],
    writters: ["Hugh Stoddart"],
    directors: ["Colin Gregg"],
    producer: ["David N. Wilkinson"],
    execProduction: ["Alan Shallcross (BBC)"],
    synopsis:
      "Based on the novel by Virginia Woolf. A family spends a last summer in Cornwall in 1912; ten years on, shattered by war and loss, the survivors return.",
    media: {
      image: lighthouseImg,
    },
    reviews: {
      hasReview: true,
      reviews: [
        {
          comment: "This is a rewarding, richly textured dramatization.",
          author: "Gail Williams (Holywood Reporter)",
        },
      ],
    },
    awards: {
      hasAward: true,
      award: ["Shortlisted for a BAFTA Award (Best single drama)"],
    },
  },

  {
    id: 5,
    title: "Hard Travelling",
    type: "Film",
    duration: 90,
    year: 1986,
    release: {
      broadcast: {
        wasLiveBroadcasted: true,
        broadcastHistory: [
          {
            type: "TV",
            channel: "BBC 2",
            date: 1986,
          },
        ],
      },
    },

    cast: ["Suzanne Burden", "Tom Bell", "Michael Gough"],
    writters: ["Hugh Stoddart"],
    directors: ["Colin Gregg"],
    producer: ["Andrée Jandelli"],
    synopsis:
      "An original screenplay drawing on Hugh Stoddart's ten years in the world of contemporary art: an artist has to cope with her father's suicide.",
    media: {
      image: hardTravellingImg,
    },

    reviews: {
      hasReview: true,
      reviews: [
        {
          comment:
            "The sense of loss was everywhere. Difficult to enjoy… impossible to forget.",
          author: "Gerard Dempsey (Daily Express)",
        },
      ],
    },
  },

  {
    id: 6,
    title: "We Think The World of You",
    type: "Film",
    duration: 91,
    year: 1988,
    release: {
      broadcast: {
        wasLiveBroadcasted: true,
        broadcastHistory: [
          {
            type: "Cinema",
            regions: ["US", "UK"],
            date: 1988,
          },

          {
            type: "TV",
            channel: "Channel 4",
            date: 1988,
          },

          {
            type: "Special Screening",
            event: "Screened at the Cinema Museum to celebrate Max Wall",
            location: "Cinema Museum",
            date: 2018,
            link: "http://www.cinemamuseum.org.uk/2018/the-max-wall-society-presents-we-think-the-world-of-you-1988/",
          },
        ],
      },

      hardCopy: {
        hasHardCopy: true,
        format: "VHS / DVD",
      },
    },
    cast: [
      "Alan Bates",
      "Gary Oldman",
      "Max Wall",
      "Liz Smith",
      "Frances Barber",
    ],
    writters: ["Hugh Stoddart"],
    directors: ["Colin Gregg"],
    producer: ["Tommaso Jandelli"],
    synopsis:
      "Based on the novel by J.R. Ackerley, set in London just after World War 2. It is a black comedy about a love triangle - between two men and a dog. Following a cinema release in the U.S, the video continued on sale there for fifteen years.",
    media: {
      image: worldOfYouImg,
    },
    streaming: {
      isStreaming: true,
      available: [
        {
          service: "Prime Video",
          path: "https://www.amazon.co.uk/Think-World-You-Alan-Bates/dp/B09L6PN84Y/ref=tmm_aiv_swatch_0?_encoding=UTF8&qid=1459290535&sr=1-1",
        },
      ],
    },
    reviews: {
      hasReview: true,
      reviews: [
        {
          comment: "Immaculately adapted, this is a self-effacing treasure.",
          author: "Sheila Benson (Los Angeles Times)",
        },
      ],
    },
  },

  {
    id: 7,
    title: "The Big Battalions",
    type: "TV Series",
    episodes: 6,
    year: 1992,
    release: {
      broadcast: {
        wasLiveBroadcasted: true,
        broadcastHistory: [{ type: "TV", channel: "Channel 4", date: 1997 }],
      },
    },
    cast: [
      "Brian Cox",
      "Jane Lapotaire",
      "Juliet Aubrey",
      "Sid El Fadil (Alexander Siddig)",
    ],
    writters: ["Hugh Stoddart"],
    directors: ["Andrew Grieve"],
    producer: ["Brian Eastman (Carnival Films)"],
    synopsis:
      "Set in the UK, Israel and Ethiopia, this interlocking story of three families is centred on religious faith, its values and its dangers. Prophetic when it was shown, it remains relevant now.",
    media: {
      image: bigBatImg,
    },
    streaming: {
      isStreaming: true,
      available: [
        {
          service: "All 4",
          path: "https://www.channel4.com/programmes/the-big-battalions",
        },
      ],
    },
    reviews: {
      hasReview: true,
      reviews: [
        {
          comment: "An intelligent and beautiful drama.",
          author: "David Aaronovitch (Daily Mail)",
        },
      ],
    },
  },

  {
    id: 8,
    title: "The Mill on the Floss",
    type: "Film",
    duration: 116,
    year: 1997,
    release: {
      broadcast: {
        wasLiveBroadcasted: true,
        broadcastHistory: [
          {
            type: "TV",
            channel: "BBC 1",
            date: 1997,
          },
          {
            type: "TV",
            channel: "PBS",
            date: 1997,
          },
          {
            type: "TV",
            channel: "BBC 4",
            date: 2004,
          },
        ],
      },

      hardCopy: {
        hasHardCopy: true,
        format: "VHS / DVD",
      },
    },
    cast: ["Emily Watson", "Bernard Hill", "Cheryl Campbell", "James Frain"],
    writters: ["Hugh Stoddart"],
    directors: ["Graham Teakston"],
    producer: ["Brian Eastman (Carnival Films)"],
    execProduction: ["David Thompson (BBC)"],
    synopsis:
      "Based on the novel by George Eliot, this feature-length film was shown on New Year's Day 1997 to an audience of 11 million.",
    media: {
      image: millFlossImg,
    },
    reviews: {
      hasReview: true,
      reviews: [
        {
          comment: "Almost Flawless",
          author: "David Aaronovitch (Independent on Sunday)",
        },
      ],
    },
    awards: {
      hasAward: true,
      award: ["Nominated Best Single Drama, Writers Guild Awards"],
    },
  },

  {
    id: 9,
    title: "Dialogues of the Dead",
    type: "TV Series",
    episodes: 2,
    duration: 60,
    year: 2002,
    release: {
      broadcast: {
        wasLiveBroadcasted: true,
        broadcastHistory: [
          {
            type: "TV",
            channel: "BBC 1",
            date: 2002,
            wasRepeated: true,
            repeatDate: 2005,
          },
        ],
      },
    },
    cast: ["Warren Clarke", "Colin Buchanan", "Dervia Kirwan", "Jack Dee"],
    writters: ["Hugh Stoddart"],
    directors: ["Patrick Lau"],
    producer: ["Ann Tricklebank"],
    synopsis:
      "Based on the 'Dalziel & Pascoe' novel by Reginald Hill, this is a 'whodunnit' around the theme of revenge.",
    media: {
      image: dialoguesDeadImg,
    },
    streaming: {
      isStreaming: true,
      available: [
        {
          service: "BBC iPlayer",
          path: "https://www.bbc.co.uk/iplayer/episode/p0j0xh16/dalziel-and-pascoe-series-7-5-dialogues-of-the-dead-part-1?seriesId=b006xv5n-7",
        },
      ],
    },
    reviews: {
      hasReview: true,
      reviews: [
        {
          comment: "Superb",
          author: "The Observer",
        },
      ],
    },
    awards: {
      hasAward: true,
      award: ["Winner of the Midlands RTS Best Drama Award"],
    },
  },

  {
    id: 10,
    title: "My Passage Through a Brieft Unity",
    type: "Art Film",
    year: 2010,
    duration: 13,
    directors: ["Janet Hodgson"],
    writters: ["Hugh Stoddart"],
    synopsis:
      "Artist Janet was awarded a 'residency' at an archaeological dig; her film is reflective, looking back at the time she spent there.",
    media: {
      image: myPassageImg,
    },
    watchExcerpt: {
      link: "https://vimeo.com/14752041",
      where: "Vimeo",
    },
  },

  {
    id: 11,
    title: "Lifetime",
    type: "Short Film",
    duration: 9,
    year: 2011,
    release: {
      hardCopy: {
        hasHardCopy: true,
        format: "DVD-HD",
      },
      festivals: [
        "Bodega Bay, California",
        "Movies and Music, Chicago",
        "Galway, Ireland",
        "Bryon Bay, New South Wales",
        "Fastnet, Schull, Ireland",
        "This Is England, Rouen",
      ],
    },
    cast: ["Peter Marinker", "Kelly Hotten"],
    writters: ["Hugh Stoddart"],
    directors: ["Hugh Stoddart", "Nichola Bruce"],
    musicians: ["Julian Jacobson", "Jessica Burroughs"],
    synopsis:
      "Old Dan's dream is both about his past and his imminent end, yet reaches out to the new lives that are always beginning; Bach's music for piano and cello counterpoints the poem shared between Dan and Beatrice. The film was shot in Hastings, England.",
    media: {
      hasVideo: true,
      videoPath: "https://player.vimeo.com/video/26933960",
      image: lifetimeImg,
    },
  },

  {
    id: 12,
    title: "Moth Dust",
    type: "Short Film",
    duration: 9,
    year: 2013,
    release: {
      hardCopy: {
        hasHardCopy: true,
        format: "DVD-HD",
      },
    },
    cast: ["Kieran Brennan", "Tessa Nicholson"],
    artist: ["Paul Hazelton"],
    writters: ["Hugh Stoddart"],
    directors: ["Hugh Stoddart"],
    execProduction: ["Sligeach Films"],
    musicians: ["Julian Jacobson", "Camilia Li"],
    synopsis:
      "A crisis between lovers Mark and Sarah is revealed by dreams and a poem, echoed by Debussy's beautiful but sombre music. The film was shot in Sligo, Ireland.",
    media: {
      hasVideo: true,
      videoPath: "https://player.vimeo.com/video/128259086",
      image: mothImg,
    },
  },

  {
    id: 13,
    title: "Waiting For You",
    type: "Film",
    duration: 91,
    year: 2017,
    cast: ["Colin Morgan", "Fanny Ardant"],
    isCowritten: true,
    writters: ["Hugh Stoddart", "Charles Garrad"],
    directors: ["Charles Garrad"],
    producer: ["Simon Bosanquet"],
    synopsis:
      "Clues left by his father send a young man on a journey to France in search of truths that have been hidden from him.",
    media: {
      image: waitingForYouImg,
    },
    streaming: {
      isStreaming: true,
      available: [
        {
          service: "Prime Video",
          path: "https://www.amazon.co.uk/gp/video/detail/amzn1.dv.gti.68ba58d0-5d71-1427-c268-8dcb0a46ab59?tag=amazon-gb-ro-mac-chr-21&token=CA3774BA60135AD0409D07C24960D3F9C54D532C",
        },
        {
          service: "Apple Tv",
          path: "https://tv.apple.com/gb/movie/waiting-for-you/umc.cmc.5h4w6i2n6df8uwzlafolmy0yo?playableId=tvs.sbd.9001%3A1526619980",
        },
      ],
    },
  },
];
