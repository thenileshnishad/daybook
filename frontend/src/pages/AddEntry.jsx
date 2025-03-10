import { useState } from "react";
import { useAddEntryMutation } from "../redux/api/entriesApiSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddEntry = () => {
  const [formData, setFormData] = useState({
    title: "",
    mood: "🙂",
    content: "",
    date: new Date().toISOString().slice(0, 10),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [addEntry] = useAddEntryMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addEntry(formData).unwrap();
      navigate("/entries");
      toast.success(response.message);
    } catch (error) {
      toast.error(error.data.message);
    }
  };

  return (
    <>
      <h1>Add New Entry</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
            className="input"
          />
        </div>

        <div>
          <label htmlFor="mood">Mood</label>
          <select
            name="mood"
            id="mood"
            value={formData.mood}
            onChange={handleChange}
          >
            <option value="🙂">🙂 Happy</option>
            <option value="😔">😔 Sad</option>
            <option value="😡">😡 Angry</option>
          </select>
        </div>

        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            className="input"
            required
          />
        </div>

        <div>
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            id="content"
            value={formData.content}
            onChange={handleChange}
            className="textarea"
            required
          />
        </div>

        <div>
          <button type="submit" className="btn btn-primary">
            Save Entry
          </button>
        </div>
      </form>
    </>
  );
};

export default AddEntry;
