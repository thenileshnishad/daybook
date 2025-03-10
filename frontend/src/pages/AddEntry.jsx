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

  const [addEntry, { isLoading }] = useAddEntryMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addEntry(formData).unwrap();
      navigate("/entries");
      toast.success(response.message);
    } catch (error) {
      toast.error(error.data?.message || "An error occurred");
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px-52px-40px)]">
      <div className="flex justify-center px-7 my-10">
        <div className="bg-base-200 max-w-lg w-full p-10 rounded-2xl shadow-lg hover:shadow-2xl">
          <h1 className="text-2xl font-semibold text-center mb-6">
            Add New Entry
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="date" className="text-sm">
                Select Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="date"
                id="date"
                value={formData.date}
                onChange={handleChange}
                className="input w-full mt-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="mood" className="text-sm">
                How Was Your Mood? <span className="text-red-500">*</span>
              </label>
              <select
                name="mood"
                id="mood"
                value={formData.mood}
                onChange={handleChange}
                className="select w-full mt-2"
              >
                <option value="🙂">🙂 Happy</option>
                <option value="😔">😔 Sad</option>
                <option value="😡">😡 Angry</option>
              </select>
            </div>

            <div className="mb-4">
              <label htmlFor="title" className="text-sm">
                Entry Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="title"
                id="title"
                value={formData.title}
                onChange={handleChange}
                className="input w-full mt-2"
                required
                placeholder="Give your entry a title"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="content" className="text-sm">
                Describe Your Day <span className="text-red-500">*</span>
              </label>
              <textarea
                name="content"
                id="content"
                value={formData.content}
                onChange={handleChange}
                className="textarea w-full h-50 mt-2"
                required
                placeholder="Write about your day, thoughts, or experiences"
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="btn btn-primary w-full sm:w-auto"
                disabled={isLoading}
              >
                {isLoading ? "Saving..." : "Save Entry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddEntry;
