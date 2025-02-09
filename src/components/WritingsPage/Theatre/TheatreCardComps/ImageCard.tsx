import { TheatreScript } from "../../../../data/writings/theatre/theatre";
import { listPeople } from "../../../Utility/Utils";

interface ImgCardProps {
  script: TheatreScript;
  isMobile: boolean;
}

const ImageCard = ({ script, isMobile }: ImgCardProps) => {
  if (!isMobile) {
    return (
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-x-4">
          <div className="col-span-1 mx-auto my-auto">
            <img
              src={script.image}
              alt={`A photograph of a performance of ${script.title}`}
            />
          </div>
          <div className="col-span-2 space-y-3 text-sm my-auto">
            {script.wasPerformed && (
              <div>
                <p>
                  Premiere at the{" "}
                  <span className="font-semibold">
                    {script.premiere?.venue}
                  </span>
                  , {script.premiere?.location}, {script.premiere?.year}.
                </p>
                <p>
                  Cast: <span>{listPeople(script.cast)}</span>.
                </p>
                <p>
                  Directed by{" "}
                  <span className="font-semibold">
                    {script.premiere?.director}
                  </span>
                  .
                </p>
              </div>
            )}

            {script.rePresentation?.wasRepresented && (
              <div>
                <p>
                  {script.rePresentation?.information}. Directed by{" "}
                  <span className="font-semibold">
                    {script.rePresentation?.director}
                  </span>
                  .
                </p>
              </div>
            )}
            {script.revival?.information && (
              <div>
                <p>{script.revival.information}.</p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <p>{script.synopsis}</p>
          <ul className="space-y-2">
            {script.reviews?.map((review, index) => (
              <li key={index}>
                <span className="italic">"{review.comment}."</span> -{" "}
                <span className="font-semibold">{review.author}</span>,{" "}
                {review.publisher ? review.publisher + "," : ""} {review.city}{" "}
                {review.when}.
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="space-y-4">
        <img
          src={script.image}
          alt={`A photograph of a performance of ${script.title}`}
        />
        {script.wasPerformed && (
          <div className="mt-4 space-y-1">
            <p>
              Premiere at the{" "}
              <span className="font-semibold">{script.premiere?.venue}</span>,{" "}
              {script.premiere?.location}, {script.premiere?.year}.
            </p>
            <p>
              Cast: <span>{listPeople(script.cast)}</span>.
            </p>
            <p>
              Directed by{" "}
              <span className="font-semibold">{script.premiere?.director}</span>
              .
            </p>
          </div>
        )}

        {script.rePresentation?.wasRepresented && (
          <div>
            <p>
              {script.rePresentation?.information}. Directed by{" "}
              <span className="font-semibold">
                {script.rePresentation?.director}
              </span>
              .
            </p>
          </div>
        )}
        {script.revival?.information && (
          <div>
            <p>{script.revival.information}.</p>
          </div>
        )}
        <div className="space-y-4">
          <p>{script.synopsis}</p>
          <ul className="space-y-4">
            {script.reviews?.map((review, index) => (
              <li key={index}>
                <span className="italic">"{review.comment}."</span> -{" "}
                <span className="font-semibold">{review.author}</span>,{" "}
                {review.publisher ? review.publisher + "," : ""} {review.city}{" "}
                {review.when}.
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default ImageCard;
