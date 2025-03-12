const ModalLayout = ({ isOpen, close, children }) => {
  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box">
        <button
          onClick={close}
          className="btn btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};
export default ModalLayout;
