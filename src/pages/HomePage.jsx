import LeftHeaderComponent from "../components/homepage/LeftSide/LeftHeaderComponent";
import LeftBodyComponent from "../components/homepage/LeftSide/LeftBodyComponent";
import NavbarComponent from "../components/homepage/RightSide/NavbarComponent";
import RightBodyComponent from "../components/homepage/RightSide/RightBodyComponent";
import LeftFooterComponent from "../components/homepage/LeftSide/LeftFooterComponent";

const HomePage = () => {
  return (
    <div className="w-full h-screen flex leading-none">
      {/* Left Side */}
      <div className="bg-primary w-[60%] text-secondary py-8 px-10 flex flex-col">
        <LeftHeaderComponent />
        <LeftBodyComponent />
        <LeftFooterComponent />
      </div>

      {/* Right Side */}
      <div className="w-[40%] py-8 px-10">
        <NavbarComponent />
        <RightBodyComponent />
      </div>
    </div>
  );
};

export default HomePage;
