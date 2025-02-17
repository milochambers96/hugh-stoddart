import { Screenplay } from "../../../../../data/writings/screen/screenplays";

interface ReviewsProp {
  screen: Screenplay;
}

const Reviews = ({ screen }: ReviewsProp) => {
  if (!screen.reviews?.hasReview) return null;

  return (
    <ul>
      {screen.reviews.reviews.map((review, index) => (
        <li key={index}>
          <span className="italic">"{review.comment}"</span> - {review.author}.
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
