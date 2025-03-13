import { Screenplay } from "../../../../../data/writings/screen/screenplays";

interface PurchaseProp {
  screen: Screenplay;
}

const Purchase = ({ screen }: PurchaseProp) => {
  const purchaseInfo = screen.release?.broadcast?.broadcastHistory.filter(
    (broadcastItem) => broadcastItem.type === "Purchase"
  );

  if (purchaseInfo?.length === 0) return null;

  return (
    <ul className="space-y-4">
      {purchaseInfo?.map((info, index) => (
        <li key={index}>
          {info.message}{" "}
          <a
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-hs-link  hover:text-hs-link-hover font-medium"
          >
            {info["link-text"]}
          </a>
          .
        </li>
      ))}
    </ul>
  );
};

export default Purchase;
