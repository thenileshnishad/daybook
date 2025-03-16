import { useSelector } from "react-redux";
import { Navigate, useSearchParams } from "react-router-dom";
import {
  useGetEntriesQuery,
  useSearchEntryQuery,
} from "../redux/api/entriesApiSlice";
import EntryCard from "../components/entry/EntryCard";
import AddEntry from "../components/entry/AddEntry";
import Loader from "../components/Loader";

const Entries = () => {
  const user = useSelector((state) => state.user);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const { data: getEntries, isLoading: isLoadingEntries } = useGetEntriesQuery(
    undefined,
    { skip: searchQuery.length > 0 }
  );

  const { data: searchResult, isLoading: isLoadingSearch } =
    useSearchEntryQuery(searchQuery, {
      skip: searchQuery.length === 0,
    });

  if (isLoadingEntries || isLoadingSearch) {
    <div className="min-h-100svh">
      return <Loader />
    </div>;
  }

  const entries =
    searchQuery.length > 0 ? searchResult?.data || [] : getEntries?.data || [];

  if (entries.length === 0) {
    if (searchResult) {
      return (
        <div className="text-center mt-10 mx-7 min-h-[calc(100svh-64px-52px-40px)]">
          <p className="text-2xl font-semibold mb-2">
            Sorry, {user.data.firstName}, I couldn't find any entries matching
            your search!
          </p>
          <p className="text-lg">
            It looks like there are no entries that match your search criteria.
            Try searching with different keywords!
          </p>
          <div className="fixed bottom-20 z-10 left-[calc(100vw-7rem)]">
            <AddEntry />
          </div>
        </div>
      );
    } else {
      return (
        <div className="text-center mt-10 mx-7 min-h-[calc(100svh-64px-52px-40px)]">
          <p className="text-2xl font-semibold mb-2">
            Welcome, {user.data.firstName}
          </p>
          <p className="text-lg mb-2">
            It looks like you haven't added any entries yet.
          </p>
          <p className="text-lg">
            Start your journey by creating your very first entry by clicking the
            bottom '+' button!
          </p>
          <div className="fixed bottom-20 z-10 left-[calc(100vw-7rem)]">
            <AddEntry />
          </div>
        </div>
      );
    }
  }

  return (
    <div>
      <div className="fixed bottom-20 z-10 left-[calc(100vw-7rem)]">
        <AddEntry />
      </div>
      <div className="flex flex-wrap gap-10 justify-center mt-10 min-h-[calc(100svh-64px-52px-40px)] mx-7">
        {entries.map((entry) => (
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
