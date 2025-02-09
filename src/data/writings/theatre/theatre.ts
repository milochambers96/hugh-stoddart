import gibStrait from "../../../assets/writing-page-imgs/gibaltar-straight-img.jpg";

export const threatreIntro =
  "A collection of original theatre scripts exploring diverse themes and characters. Each piece reflects a unique narrative voice, crafted for the stage with a focus on storytelling, dialogue, and performance.";

export interface TheatreScript {
  id: number;
  title: string;
  writters: string[];
  synopsis?: string;
  wasPerformed: boolean;
  premiere?: Premiere;
  rePresentation?: RePresentation;
  revival?: Revival;
  reviews?: Review[];
  image?: string;
  cast?: string[];
  isCoWritten?: boolean;
  reStaged?: ReStaged;
  productionStage?: string;
}

interface Premiere {
  venue?: string;
  location: string;
  year: number;
  director?: string;
}

interface RePresentation {
  wasRepresented: boolean;
  information: string;
  director?: string;
}

interface Revival {
  information: string;
}

interface Review {
  comment: string;
  author: string;
  city?: string;
  when?: string;
  publisher?: string;
}

interface ReStaged {
  theatreLocations: string[];
  publishedLocations: string;
}

export const theatreScripts: TheatreScript[] = [
  {
    id: 1,
    title: "Gibraltar Strait",
    writters: ["Hugh Stoddart"],
    synopsis:
      "The play concerns the killing of three members of the IRA by the British Army in 1988. Based on the work of journalist Ian Jack and additional research by Hugh and members of the company.",
    wasPerformed: true,
    premiere: {
      venue: "Theatre Upstairs, Royal Court",
      location: "London",
      year: 1990,
      director: "Simon Curtis",
    },
    rePresentation: {
      wasRepresented: true,

      information:
        "Re-presented in 1990 by Tinderbox in Belfast, where it was nominated as Best New Play",
      director: "Stephen Wright",
    },
    revival: {
      information:
        "Revived in Belfast - rehearsed reading March 2018 and then a sold-out week's run at MAC October 2018",
    },
    reviews: [
      {
        comment:
          "An outstanding example of the theatre's power to revitalise an event suspended between news and history",
        author: "Irving Wardle",
        city: "London",
        when: "May 1990",
        publisher: "Independent on Sunday",
      },
      {
        comment:
          "Divisive in its opinions but unifying in its impact, Gibraltar Strait has endured and will continue to endure as an especially powerful exposé of how individual beliefs can shape the personal and public perception of historic events - and how valuable open-mindedness always is in fully grasping their truthful, humane undercurrents",
        author: "Simon Fallaha",
        city: "Belfast",
        when: "October 2018",
      },
    ],
    image: gibStrait,
    cast: [
      "Jonathan Cullen",
      "Ewan Hooper",
      "Melee Hutton",
      "Susan Brown",
      "John Salthouse",
    ],
  },
  {
    id: 2,
    title: "Layby",
    isCoWritten: true,
    writters: [
      "Hugh Stoddart",
      "Howard Brenton",
      "Brain Clark",
      "Trevor Griffiths",
      "David Hare",
      "Stephen Poliakoff",
      "Snoo Wilson",
    ],
    wasPerformed: true,
    premiere: {
      location: "Edinburgh",
      year: 1971,
    },
    reStaged: {
      theatreLocations: ["London", "Germany"],
      publishedLocations: "UK",
    },
    reviews: [
      {
        comment:
          "Its sustained view of exploitation… makes Layby a major event of this Festival or any festival",
        author: "Nicholas de Jongh",
        publisher: "The Guardian",
      },
    ],
  },
  {
    id: 3,
    title: "Barchester",
    writters: ["Hugh Stoddart"],
    wasPerformed: false,
    productionStage: "Rehearsed reading at the Richmond Theatre 2009",
    synopsis:
      "Commissioned by Batway Productions, the script proposes a fast-moving staging to retain the exuberant satire of the original – Trollope's church politics seem closer to the parliamentary kind we witness daily with all the colliding egos and hidden agendas",
  },
  {
    id: 4,
    title: "The Last Tape",
    writters: ["Hugh Stoddart"],
    wasPerformed: false,
    productionStage: "Developed first draft script",
    synopsis:
      "Max Wall has died and is up in front of the Seat of Judgement. He has only his theatre skills to save him - though perhaps Samuel Beckett, who arrived not long before, will put in a good word",
  },
];
