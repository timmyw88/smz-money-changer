import { FaArrowAltCircleRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const LeftBodyComponent = () => {
  return (
    <div className="flex-1">
      <ul className="flex items-center gap-3 mb-3 text-2xl">
        <li>
          <span className="bg-secondary text-white text-base py-1 px-2 rounded-full">
            1
          </span>{" "}
          Book Now - Reserved
        </li>
        <li>
          <span className="bg-secondary text-white text-base py-1 px-2 rounded-full">
            2
          </span>{" "}
          No Waiting
        </li>
        <li>
          <span className="bg-secondary text-white text-base py-1 px-2 rounded-full">
            3
          </span>{" "}
          Pay Pick Up & Move
        </li>
      </ul>
      <div className="flex mb-10">
        <TiTick className="text-green-500 text-3xl" />
        <p className="ml-1 text-xl">
          Rates Provided Are The Current Most Real Time Competitive Rates In
          Malaysia and Asia Pacific.
        </p>
      </div>
    </div>
  );
};

export default LeftBodyComponent;
