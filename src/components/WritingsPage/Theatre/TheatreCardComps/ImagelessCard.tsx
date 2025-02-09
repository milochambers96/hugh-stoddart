import { TheatreScript } from "../../../../data/writings/theatre/theatre";

interface ImglessCardProp {
  script: TheatreScript;
}

const ImagelessCard = ({ script }: ImglessCardProp) => {
  return (
    <div>
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
                <span className="italic">"{review.comment}"</span> -{" "}
                <span className="font-semibold">{review.author}</span>,{" "}
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
