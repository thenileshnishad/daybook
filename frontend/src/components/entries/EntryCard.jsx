const EntryCard = ({ date, title, mood, content, updatedAt }) => {
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
    content.length > 160 ? `${content.slice(0, 160)}...` : content;

  return (
    <div className="card bg-base-200 w-80 h-64 shadow-xl hover:shadow-2xl">
      <div className="flex justify-between p-3">
        <p className="text-sm">{formattedDate}</p>
        <p className="text-lg">{mood}</p>
      </div>

      <div className="card-body p-4">
        <h2 className="card-title">{title}</h2>
        <p className="break-words">{contentLimit}</p>
      </div>

      <div className="text-right text-sm p-2">Edited: {formattedUpdateAt}</div>
    </div>
  );
};
export default EntryCard;
