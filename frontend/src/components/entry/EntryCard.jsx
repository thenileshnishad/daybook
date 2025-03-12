import ReadMore from "./ReadMore";
import EditEntry from "./EditEntry";
import DeleteEntry from "./DeleteEntry";

const EntryCard = ({ id, date, title, mood, content, updatedAt }) => {
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
    content.length > 300 ? `${content.slice(0, 300)}...` : content;

  return (
    <div className="card bg-base-200 w-100 h-70 shadow-xl hover:shadow-2xl rounded-3xl">
      <div className="flex justify-between items-center pt-4 px-3">
        <p className="text-sm">{formattedDate}</p>
        <div className="flex gap-2">
          <EditEntry id={id} />
          <DeleteEntry id={id} />
        </div>
      </div>

      <div className="card-body p-4">
        <h2 className="card-title">
          {mood} {title}
        </h2>
        <p className="break-words">{contentLimit}</p>
      </div>

      <div className="flex justify-between items-center pb-4 px-3">
        <div className="text-left text-sm">Edited: {formattedUpdateAt}</div>
        <div className="text-left text-sm">
          <ReadMore
            formattedDate={formattedDate}
            title={title}
            mood={mood}
            content={content}
            formattedUpdateAt={formattedUpdateAt}
          />
        </div>
      </div>
    </div>
  );
};
export default EntryCard;
