import { useState } from "react";

const RegisterFormComponent = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <form className="mb-5">
      <h3 className="text-3xl font-bold mb-3">Sign Up</h3>
      <div className="flex flex-col w-full mb-1">
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-slate-300 p-3 rounded-md outline-none focus:border-slate-400"
        />
      </div>
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
      <div className="flex flex-col w-full mb-1">
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-slate-300 p-3 rounded-md outline-none focus:border-slate-400"
        />
      </div>
      <div className="flex flex-col w-full mb-1">
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="border border-slate-300 p-3 rounded-md outline-none focus:border-slate-400"
        />
      </div>
      <div className="flex flex-col w-full mb-3">
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border border-slate-300 p-3 rounded-md outline-none focus:border-slate-400"
        />
      </div>
      <button
        type="submit"
        className="bg-dark text-center text-white py-4 rounded-md w-full"
      >
        SIGN UP
      </button>
    </form>
  );
};

export default RegisterFormComponent;
