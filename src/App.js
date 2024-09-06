import "./App.css";
import SidebarMenu from "./Components/Sidebar/Sidebar";
import ChefIcon from "../src/Albums/slide4_image.png.png";
import ThreeDots from "../src/Albums/Group 1.png";
import Leaves from "../src/Albums/leaves.png.png";
import Slider from "./Components/Slider/Slider";
import OnlineOrder from "./Components/OnlineOrder/OnlineOrder";
import Grid from "./Components/Grid/Grid";
import SignUp from "./Components/SignUp/SignUp";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    // <div className="relative">
    <div className="relative bg-black text-white min-h-screen">
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
        {/* Three dots */}
        <img
          src={ThreeDots}
          alt="Carousel Dots"
          className="absolute w-[78px] h-[12px] top-[759px] left-[775px] opacity-0 border-t border-white"
        />
      </div>
      <div>
        <img
          src={Leaves}
          alt="Basil Leaves"
          className="absolute h-[319px] w-[319px] top-[820px] left-[158px]"
        />
      </div>

      {/* <img src={Leaves} alt="Basil Leaves" className="h-[319px] w-[319px]" /> */}
      <div>
        <div
          className="absolute text-center top-[1109px] left-[123px] text-[#FFD700] font-[Poppins] text-[38px] font-normal leading-[57px]"
          style={{ width: "614px", height: "57px", backgroundColor: "black" }}
        >
          <h6
            style={{
              textDecoration: "underline",
              textDecorationColor: "#FFD700",
            }}
          >
            CHEF MATT PRODUCTS
          </h6>
        </div>
        <div
          style={{
            marginTop: "205px",
            fontFamily: "Poppins",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: "27px",
            textAlign: "left",
            color: "#FFFFFF",
            marginLeft: "215px",
          }}
        >
          <p>Shop Gourmet Chef Quality products from the Chef Matt brand.</p>
          <p> Chef it yourself and Thank us later.</p>
        </div>
      </div>
      <Slider />
      <OnlineOrder />
      {/* <Grid /> */}
      {/* Grid Component */}
      <div
        style={{
          marginTop: "450px",
          width: "1240px",
          height: "229.92px",
          position: "relative",
          left: "300px", // Shift 300px to the right
        }}
      >
        {/* Adjust the margin as needed */}
        <Grid />
      </div>
      {/* Signup rectangle */}
      <div
        style={{
          marginTop: "150px",
          width: "1240px",
          // height: "229.92px",
          position: "relative",
          left: "300px", // Shift 200px to the right
        }}
      >
        <SignUp />
      </div>
      {/* Footer */}
      <div
        className="relative bg-black text-white"
        style={{
          width: "1240px",
          margin: "0 auto", // Center align the footer
          padding: "20px 0", // Add some padding if needed
          left: "40px",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default App;
