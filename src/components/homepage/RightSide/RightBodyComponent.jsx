import { useState } from "react";
import { FaArrowAltCircleRight } from "react-icons/fa";
import LoginFormComponent from "./LoginFormComponent";
import RegisterFormComponent from "./RegisterFormComponent";

const RightBodyComponent = () => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  return (
    <div className="flex flex-col h-[80%] justify-center px-10 shadow-lg rounded-md">
      {showRegisterForm ? (
        <>
          <RegisterFormComponent />
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setShowRegisterForm(false)}
              className="text-sky-700 font-semibold cursor-pointer"
            >
              Login
            </span>{" "}
            here.
          </p>
        </>
      ) : (
        <>
          <LoginFormComponent />
          <p>
            Do not have an account?{" "}
            <span
              onClick={() => setShowRegisterForm(true)}
              className="text-sky-700 font-semibold cursor-pointer"
            >
              Register
            </span>{" "}
            here.
          </p>
        </>
      )}
    </div>
  );
};

export default RightBodyComponent;
