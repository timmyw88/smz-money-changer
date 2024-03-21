import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Routes>
      <Route index={true} path="/" element={<HomePage />} />
    </Routes>
  );
};

export default App;
