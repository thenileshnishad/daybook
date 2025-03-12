import { useState } from "react";
import ModalLayout from "../ModalLayout";

const ReadMore = ({
  formattedDate,
  title,
  mood,
  content,
  formattedUpdateAt,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="btn btn-sm btn-outline btn-primary"
        onClick={() => setOpen(true)}
      >
        Read More
      </button>

      <ModalLayout isOpen={open} close={() => setOpen(false)}>
        <div>
          <div className="block text-center card-title pb-2">
            <span>{mood} </span>
            <span>{title} </span>
            <span>{mood} </span>
          </div>

          <div className="text-left text-sm p-2 pb-1">
            Date: {formattedDate}
          </div>

          <div className="card-body p-2 pb-0">
            <p className="break-words">{content}</p>
          </div>

          <div className="text-right text-sm p-2 pb-0">
            Last edit: {formattedUpdateAt}
          </div>
        </div>
      </ModalLayout>
    </>
  );
};
export default ReadMore;
