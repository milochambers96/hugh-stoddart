import alisonWilding from "./articles/alison_wilding.pdf";
import chrisBurden from "./articles/chris_burden.pdf";
import corneliaParker from "./articles/cornelia_parker.pdf";
import davidNash from "./articles/david_nash.pdf";
import enoPaladino from "./articles/eno_paladino.pdf";
import helenSear from "./articles/helen_sear.pdf";
import jackieWinsor from "./articles/jackie_winsor.pdf";
import martinBoyce from "./articles/martin_boyce.pdf";
import mikeNelson from "./articles/mike_nelson.pdf";
import peterKennard from "./articles/peter_kennard.pdf";
import seanScully from "./articles/sean_scully.pdf";
import terryFrost from "./articles/terry_frost.pdf";

export interface ArtText {
  id: number;
  fName?: string;
  lName: string;
  type: "article" | "review" | "essay" | "other";
  purpose: string;
  publishText?: string[];
  pdf?: string;
}

export interface ArtTexts {
  artTexts: ArtText[];
}

export const artTexts: ArtTexts = {
  artTexts: [
    {
      id: 1,
      fName: "Carl",
      lName: "Andre",
      type: "article",
      purpose: "Article in The Independent",
      publishText: ["Whitechapel Gallery July 7 | August 27 2000"],
    },
    {
      id: 2,
      fName: "George",
      lName: "Blacklock",
      type: "essay",
      purpose: "Catalogue essay | Solo show",
      publishText: ["Flowers Central | October 2003"],
    },
    {
      id: 3,
      fName: "Ansuya",
      lName: "Blom",
      type: "review",
      purpose: "Book Review for Contemporary Visual Arts no.30 2000",
      publishText: [
        "LET ME SEE IF THIS BE REAL NAi Rotterdam, 1999. ISBN 90-5662-137-8",
      ],
    },
    // {
    //   id: 4,
    //   fName: "Siân",
    //   lName: "Bowen",
    //   type: "other",
    //   purpose: "Commissioned prose work to accompany a suite of prints",
    //   publishText: ["Grizedale Residency May 2000"],
    // },
    {
      id: 5,
      fName: "Martin",
      lName: "Boyce",
      type: "review",
      purpose: "Review for Contemporary Visual Arts no.22 1999",
      publishText: ["Lotte Hammer Gallery London, 29 January - 6 March"],
      pdf: martinBoyce,
    },
    {
      id: 6,
      fName: "Ian",
      lName: "Breakwell",
      type: "review",
      purpose: "Review for Frieze Nov/Dec 1999 Auditorium",
    },
    {
      id: 7,
      fName: "Chris",
      lName: "Burden",
      type: "article",
      purpose: "Article in The Independent.",
      publishText: [
        "Tate Gallery March 2 - June 13 1999 ",
        "Book review, Art World, Feb-Mar 2009",
      ],
      pdf: chrisBurden,
    },
    {
      id: 8,
      fName: "Rosemary",
      lName: "Butcher",
      type: "essay",
      purpose: "Essay included in Rosemary Butcher - Choreography",
      publishText: [
        "Collisions and Collaborations Middlesex University Press ISBN: 1 904750 47 8",
      ],
    },
    {
      id: 10,
      fName: "Stephen",
      lName: "Chambers",
      type: "review",
      purpose: "Review for Contemporary Visual Arts no 21 1998",
      publishText: ["Kettles Yard, Cambridge September 26 - November 1"],
    },
    {
      id: 11,
      fName: "Brian",
      lName: "Eno / Mimmo Paladino",
      type: "review",
      purpose: "Review for Contemporary Visual Arts no 26 2000",
      publishText: ["Roundhouse, London September 9 - October 6"],
      pdf: enoPaladino,
    },
    {
      id: 12,
      fName: "Noel",
      lName: "Forster",
      type: "essay",
      purpose: "Catalogue essay 'Meridiano de Greenwich'",
      publishText: ["Madrid / London May 2002"],
    },
    {
      id: 13,
      fName: "Terry",
      lName: "Frost",
      type: "article",
      purpose: "Article for RA Magazine | Solo Show",
      publishText: ["Royal Academy Autumn 2000"],
      pdf: terryFrost,
    },
    {
      id: 14,
      fName: "Ron",
      lName: "Haselden",
      type: "review",
      purpose: "Review for Art & Architecture no 53 1999",
    },
    {
      id: 15,
      fName: "Peter",
      lName: "Kennard",
      type: "review",
      purpose: "Book review for Contemporary Visual Arts no.28 2000",
      publishText: ["Published by Manchester University Press"],
      pdf: peterKennard,
    },
    {
      id: 16,
      fName: "Sharon",
      lName: "Kivland",
      type: "review",
      purpose: "Book review for Contemporary Visual Arts no.26 2000",
    },
    {
      id: 17,
      fName: "David",
      lName: "Nash",
      type: "article",
      purpose: "Article for World of Interiors August 2002",
      pdf: davidNash,
    },
    {
      id: 18,
      fName: "Mike",
      lName: "Nelson",
      type: "review",
      purpose: "Review for Contemporary Visual Arts no.29 2000",
      publishText: [
        "THE CORAL REEF Matt's Gallery, London 26 January - 26 March 2000",
      ],
      pdf: mikeNelson,
    },
    {
      id: 19,
      fName: "Tony",
      lName: "O'Malley",
      type: "essay",
      purpose: "Contributing essay in book edited by Brian Lynch",
      publishText: ["Published by Scolar Press ISBN-10: 1859282350"],
    },
    {
      id: 20,
      lName: "Panamarenko",
      type: "article",
      purpose: "Article for the Independent",
      publishText: ["Hayward Gallery February 10 – April 2 2000"],
    },
    {
      id: 21,
      fName: "Cornelia",
      lName: "Parker",
      type: "article",
      purpose: "Article for Contemporary Visual Arts no.19 1998",
      publishText: ["Serpentine Gallery 12 May – 14 June"],
      pdf: corneliaParker,
    },
    {
      id: 22,
      fName: "Sean",
      lName: "Scully",
      type: "article",
      purpose: "Article for Contemporary Visual Arts no.23 1999",
      publishText: ["South London Gallery 16 June – 1 August"],
      pdf: seanScully,
    },
    {
      id: 23,
      fName: "Helen",
      lName: "Sear",
      type: "article",
      purpose: "Article for Contemporary Visual Arts no.24 1999",
      publishText: ["Angel Row Gallery 12 June – 12 July"],
      pdf: helenSear,
    },
    {
      id: 24,
      fName: "Trevor",
      lName: "Sutton",
      type: "essay",
      purpose: "Catalogue essay Flowers East April 1998",
    },
    {
      id: 25,
      fName: "Alison",
      lName: "Wilding",
      type: "article",
      purpose: "Article for Contemporary Visual Arts no.32 2001",
      publishText: [
        "Henry Moore Foundation Studio, Halifax 18 October - 31 January",
      ],
      pdf: alisonWilding,
    },
    {
      id: 26,
      fName: "Jackie",
      lName: "Winsor",
      type: "review",
      purpose: "Review for Contemporary Visual Arts P.S.1",
      publishText: ["New York 26 October 1997 - 1 March 1998"],
      pdf: jackieWinsor,
    },
  ],
};

// export type { ArtText };

export const artIntroOne =
  "Hugh wrote many catalogue essays when Director of the Ikon Gallery and continued to write about art when he could. By the early 1990's he had moved to London and was able to get to more exhibitions, and re-established contactwithartists he'd known from before. Between about 1997 and 2002 he wrote reviews for various magazines, his main outlet being Contemporaryvisual arts, then a bi-monthly under the editorship of Keith Patrick.";
