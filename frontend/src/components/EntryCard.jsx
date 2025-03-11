import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EntryCard = ({ id, date, title, mood, content, updatedAt }) => {
  const navigate = useNavigate();

  const formattedDate = new Date(date).toLocaleDateString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedUpdateAt = new Date(updatedAt).toLocaleDateString("default", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const contentLimit =
    content.length > 215 ? `${content.slice(0, 215)}...` : content;

  return (
    <div className="card bg-base-200 w-80 h-64 shadow-xl hover:shadow-2xl">
      <div className="flex justify-between items-center pt-2 px-3">
        <p className="text-sm">{formattedDate}</p>
        <p
          className="hover:text-primary"
          onClick={() => navigate(`/entries/${id}/edit`)}
        >
          <FaPencilAlt />
        </p>
      </div>

      <div className="card-body p-4">
        <h2 className="card-title">
          {mood} {title}
        </h2>
        <p className="break-words">{contentLimit}</p>
      </div>

      <div className="flex justify-between items-center pb-1 px-3">
        <div className="text-left text-sm">Edited: {formattedUpdateAt}</div>
        <p>Uoo</p>
      </div>
    </div>
  );
};
export default EntryCard;
