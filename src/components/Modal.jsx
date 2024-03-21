import { IoMdClose } from "react-icons/io";

const Modal = ({ children, setShowModal }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] flex items-center justify-center">
      <div className="bg-white text-[#333] w-[50%] h-[90%] text-justify leading-5 overflow-auto rounded-md shadow-lg">
        <div className="w-full h-[8%] bg-dark text-white flex items-center justify-end px-4">
          <IoMdClose
            className="text-xl cursor-pointer"
            onClick={() => setShowModal(false)}
          />
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
