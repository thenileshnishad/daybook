import { useEffect, useState } from "react";
import {
  useGetEntryQuery,
  useUpdateEntryMutation,
} from "../redux/api/entriesApiSlice";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const EditEntry = () => {
  const { id } = useParams();
  const [updateEntry, { isLoading }] = useUpdateEntryMutation();
  const { data: getEntry } = useGetEntryQuery(id);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    mood: "",
    content: "",
    date: "",
  });

  useEffect(() => {
    if (getEntry) {
      setFormData({
        title: getEntry.data?.title || "",
        mood: getEntry.data?.mood || "",
        content: getEntry.data?.content || "",
        date: new Date(getEntry.data?.date).toISOString().slice(0, 10) || "",
      });
    }
  }, [getEntry]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateEntry({ id, data: formData }).unwrap();
      navigate("/entries");
      toast.success(response.message);
    } catch (error) {
      toast.error("Error");
    }
  };

  return (
    <div className="min-h-[calc(100vh-64px-52px-40px)]">
      <div className="flex justify-center px-7 my-10">
        <div className="card card-xl bg-base-200 w-full max-w-sm rounded-2xl shadow-xl hover:shadow-2xl">
          <div className="card-body">
            <h2 className="card-title block text-center text-lg mb-2">
              Edit Entry
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="text-sm">
                <div>
                  <label htmlFor="date">
                    Select Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="input w-full rounded-lg my-3"
                  />
                </div>

                <div>
                  <label htmlFor="mood">
                    How Was Your Mood? <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="mood"
                    id="mood"
                    value={formData.mood}
                    onChange={handleChange}
                    className="input w-full rounded-lg my-3"
                  >
                    <option value="🙂">🙂 Happy</option>
                    <option value="😔">😔 Sad</option>
                    <option value="😡">😡 Angry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="title">
                    Entry Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    value={formData.title}
                    onChange={handleChange}
                    className="input w-full rounded-lg my-3"
                    required
                    placeholder="Give your entry a title"
                  />
                </div>

                <div>
                  <label htmlFor="content">
                    Describe Your Day <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="content"
                    id="content"
                    value={formData.content}
                    onChange={handleChange}
                    className="textarea w-full rounded-lg my-3 h-50"
                    required
                    placeholder="Write about your day, thoughts, or experiences"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full rounded-lg my-3"
                  disabled={isLoading}
                >
                  {isLoading ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditEntry;
