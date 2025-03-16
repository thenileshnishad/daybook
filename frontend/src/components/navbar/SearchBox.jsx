import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBox = ({ toggle }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      navigate(`/entries?search=${searchQuery.trim()}`);
      setSearchQuery("");
    } else {
      navigate("/entries");
    }
    toggle && toggle();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="join">
        <input
          name="search"
          className="input join-item bg-base-100"
          placeholder="Search Entries..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          autoComplete="off"
        />
        <button
          type="submit"
          className="btn join-item rounded-r-full bg-base-100"
        >
          Search
        </button>
      </div>
    </form>
  );
};
export default SearchBox;
