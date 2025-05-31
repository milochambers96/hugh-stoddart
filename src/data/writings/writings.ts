import screenImg from "../../assets/screenplay-imgs/mill-on-the-floss-img.jpg";
import theatreImg from "../../assets/writing-page-imgs/gibaltar-straight-img.jpg";
import visualArtImg from "../../assets/writing-page-imgs/cornelia-parker.jpg";
import notShutUpImg from "../../assets/writing-page-imgs/not-shut-up-issue-7.jpg";

export const writingsIntro =
  "Hugh Stoddart’s writing spans film, theatre, and journalism. Learn about his screenplays and theatre projects, read selected art reviews, and discover his influential magazine project featuring interviews with creative voices who have experienced prison.";

export const writingsOverview = [
  {
    id: 1,
    title: "Screenplays",
    image: screenImg,
    imgAlt: "A still shot from one of Hugh's screenplays.",
    navPath: "/Writings/Screenplays",
    capTxt:
      "Explore Hugh's screenplays, from original scripts to creative adaptaions.",
  },

  {
    id: 2,
    title: "Theatre",
    image: theatreImg,
    imgAlt: "A photograph of a performance of Hugh's theatre scripts.",
    navPath: "/Writings/Theatre",
    capTxt:
      "Delve into Hugh's thought-provoking scripts, written for theatre stages.",
  },

  {
    id: 3,
    title: "Visual Arts",
    image: visualArtImg,
    imgAlt: "A photograph of a performance of Hugh's theatre scripts.",
    navPath: "/Writings/TheArts",
    capTxt:
      "Selected critiques, essays, and musings on artists, exhibitions, and creative practices.",
  },

  {
    id: 4,
    title: "Prison",
    image: notShutUpImg,
    imgAlt:
      "A cover of an edition of 'Not Shut Up'; a magazine developed by Hugh.",
    navPath: "/Writings/Prison",
    capTxt: "A magazine amplifying creative voices from prison.",
  },
];
