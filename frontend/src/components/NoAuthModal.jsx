import { useEffect } from "react";

const NoAuthModal = () => {
  useEffect(() => {
    document.getElementById("my_modal_3").showModal();
  }, []);
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Welcome back to DayBook!</h3>
        <p className="py-4">
          🔒 Your DayBook awaits! Please log in to your journey
        </p>
      </div>
    </dialog>
  );
};
export default NoAuthModal;
