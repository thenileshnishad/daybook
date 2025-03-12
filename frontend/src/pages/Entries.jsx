import { useGetEntriesQuery } from "../redux/api/entriesApiSlice";
import EntryCard from "../components/entry/EntryCard";
import AddEntry from "../components/entry/AddEntry";

const Entries = () => {
  const { data: getEntries, isLoading } = useGetEntriesQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (getEntries.data <= 0) {
    return <p>No entries found!</p>;
  }

  return (
    <div>
      <div className="fixed bottom-20 z-10 left-[calc(100vw-7rem)]">
        <AddEntry />
      </div>
      <div className="flex flex-wrap gap-10 justify-center items-center my-10 min-h-[calc(100vh-64px-52px)]">
        {getEntries.data.map((entry) => (
          <EntryCard
            key={entry._id}
            id={entry._id}
            date={entry.date}
            title={entry.title}
            mood={entry.mood}
            content={entry.content}
            updatedAt={entry.updatedAt}
          />
        ))}
      </div>
    </div>
  );
};
export default Entries;
