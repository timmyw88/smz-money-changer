import { useState } from "react";
import { disclaimerText } from "../../../constants/disclaimerText";
import Modal from "../../Modal";

const LeftFooterComponent = () => {
  const [showDisclaimerModal, setShowDisclaimerModal] = useState(false);
  return (
    <>
      {/* Regulated by the government of Malaysia */}
      <div className="flex items-center gap-3 text-3xl text-[#333] mb-2">
        <h3 className=" font-semibold">
          Regulated by the Government of Malaysia
        </h3>
      </div>

      {/* Disclaimer */}
      <div className="border border-secondary p-3 rounded-md">
        <p className="text-sm text-justify">
          {disclaimerText.substring(0, 500)}...{" "}
          <span
            onClick={() => setShowDisclaimerModal(true)}
            className="cursor-pointer font-semibold text-lg"
          >
            Read More
          </span>
        </p>
        <div className={`${showDisclaimerModal ? "block" : "hidden"}`}>
          <Modal setShowModal={setShowDisclaimerModal}>{disclaimerText}</Modal>
        </div>
      </div>
    </>
  );
};

export default LeftFooterComponent;
