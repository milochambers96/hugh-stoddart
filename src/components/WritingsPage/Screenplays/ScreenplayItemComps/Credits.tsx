import { Screenplay } from "../../../../data/writings/screen/screenplays";

import { listPeople } from "../../../Utility/utils";

interface CreditProp {
  screen: Screenplay;
}

const Credits = ({ screen }: CreditProp) => {
  const formatCredits = (people: string[] | undefined, role: string) => {
    if (!people) return null;

    if (people.length === 1) {
      return (
        <p>
          {role} {people[0]}.
        </p>
      );
    } else if (people.length === 2) {
      return (
        <p>
          {role} {people[0]} and {people[1]}.
        </p>
      );
    } else {
      return (
        <p>
          {role} {listPeople(people)}.
        </p>
      );
    }
  };

  return (
    <article className="space-y-6">
      {formatCredits(screen.writters, "Written by")}
      {formatCredits(screen.directors, "Directed by")}
      {formatCredits(screen.cast, "Starring")}
      {formatCredits(screen.producer, "Produced by")}
      {formatCredits(screen.musicians, "Music and score from")}
      {formatCredits(screen.artist, "With artwork by")}
    </article>
  );
};

export default Credits;
