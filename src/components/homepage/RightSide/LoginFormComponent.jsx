import { useState } from "react";
import { Link } from "react-router-dom";

const LoginFormComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showOTPForm, setShowOTPForm] = useState(false);
  const [otp, setOtp] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      setErrorMessage("* Please enter email and password");
    } else {
      setShowOTPForm(true);
      setEmail("");
      setPassword("");
    }
  };

  const handleSubmitOtp = (e) => {
    e.preventDefault();
    console.log("OTP submitted");
  };

  return (
    <>
      {!showOTPForm ? (
        <form onSubmit={handleLogin} className="mb-5">
          {errorMessage !== "" && (
            <p className="text-sm text-red-500 mb-2">{errorMessage}</p>
          )}
          <h3 className="text-3xl font-bold mb-3">Sign In</h3>
          <div className="flex flex-col w-full mb-1">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-slate-300 p-3 rounded-md outline-none focus:border-slate-400"
            />
          </div>
          <div className="flex flex-col w-full mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-slate-300 p-3 rounded-md outline-none focus:border-slate-400"
            />
          </div>
          <div className="mb-3">
            <Link to="/forgot-password" className="text-sky-700 text-sm italic">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-dark text-white py-4 rounded-md w-full"
          >
            SIGN IN
          </button>
        </form>
      ) : (
        <form onClick={handleSubmitOtp} className="mb-5">
          <p className="text-sm text-red-500 mb-3">
            We have sent an OTP to your registered email address. Please check
            your email for OTP.
          </p>
          <div className="flex flex-col w-full mb-3">
            <input
              type="text"
              name="otpCode"
              placeholder="Enter OTP Code here"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="border border-slate-300 p-3 rounded-md outline-none focus:border-slate-400"
            />
          </div>
          <button
            type="submit"
            className="bg-dark text-center text-white py-4 rounded-md w-full mb-3"
          >
            SUBMIT
          </button>
          <p
            onClick={() => setShowOTPForm(false)}
            className="text-primary underline cursor-pointer text-center"
          >
            Cancel
          </p>
        </form>
      )}
    </>
  );
};

export default LoginFormComponent;
