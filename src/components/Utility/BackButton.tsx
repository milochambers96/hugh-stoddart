import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface BackButtonProp {
  backUrl: string;
}

const BackButton: React.FC<BackButtonProp> = ({ backUrl }) => {
  return (
    <Link to={backUrl}>
      <button
        className="p-2 rounded-full transition-all bg-gray-500 hover:bg-red-900 text-white shadow-md"
        aria-label="Close"
      >
        <X size={18} />
      </button>
    </Link>
  );
};

export default BackButton;
