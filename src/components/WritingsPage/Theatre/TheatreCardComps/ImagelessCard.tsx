import { TheatreScript } from "../../../../data/writings/theatre/theatre";
import { listPeople } from "../../../Utility/utils";

interface ImglessCardProp {
  script: TheatreScript;
}

const ImagelessCard = ({ script }: ImglessCardProp) => {
  return (
    <div className="space-y-2">
      {!script.isCoWritten ? (
        <p>
          Written by <span className="font-semibold">{script.writters[0]}</span>
          .
        </p>
      ) : (
        <p className="">
          Co-written by <span className="">{listPeople(script.writters)}</span>.
        </p>
      )}
      {script.wasPerformed && (
        <div className="space-y-2">
          <p>
            Premierred in{" "}
            <span className="font-semibold">{script.premiere?.location}</span>{" "}
            in {script.premiere?.year}.
          </p>
          <p>
            Re-staged in {script.reStaged?.theatreLocations[0]} and{" "}
            {script.reStaged?.theatreLocations[1]}. Published in the{" "}
            {script.reStaged?.publishedLocations}.
          </p>
          <ul>
            {script.reviews?.map((review, index) => (
              <li key={index}>
                <span className="italic text-hs-accent">
                  "{review.comment}."
                </span>{" "}
                - <span className="font-semibold">{review.author}</span>,{" "}
                {review.publisher}.
              </li>
            ))}
          </ul>
        </div>
      )}

      {!script.wasPerformed && (
        <div className="space-y-2">
          <p>{script.productionStage}.</p>
          <p>{script.synopsis}.</p>
        </div>
      )}
    </div>
  );
};

export default ImagelessCard;
