import { useGetEntriesQuery } from "../redux/api/entriesApiSlice";
import EntryCard from "../components/entries/EntryCard";

const Entries = () => {
  const { data: getEntries, isLoading } = useGetEntriesQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (getEntries.data <= 0) {
    return <p>No entries found!</p>;
  }

  return (
    <div className="flex flex-wrap gap-5 justify-center my-10 min-h-[calc(100vh-64px-52px)]">
      {getEntries.data.map((entry) => (
        <EntryCard
          key={entry._id}
          date={entry.date}
          title={entry.title}
          mood={entry.mood}
          content={entry.content}
          updatedAt={entry.updatedAt}
        />
      ))}
    </div>
  );
};
export default Entries;
