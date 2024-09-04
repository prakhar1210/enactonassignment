import "./App.css";
import SidebarMenu from "./Components/Sidebar/Sidebar";
import ChefIcon from "../src/Albums/slide4_image.png.png";
import ThreeDots from "../src/Albums/Group 1.png";
function App() {
  return (
    <div className="relative">
      {/* Sidebar Menu */}
      <SidebarMenu />

      {/* Main Content */}
      <div className="relative">
        <img
          src={ChefIcon}
          alt="Chef Matt"
          className="w-full h-[959px] object-cover"
        />
        <button
          className="absolute top-[761px] left-[834px] border-2 border-white bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold"
          style={{
            width: "359px",
            height: "76px",
            backgroundColor: "transparent",
            opacity: "1", // Ensure the button is fully visible
          }}
          onClick={() => alert("Primary Button Clicked!")}
        >
          Meet Chef Matt
        </button>
        {/* three dots */}
        <img src={ThreeDots} alt="Carousel Dots" />
      </div>
    </div>
  );
}

export default App;
