import "./HomeComponents.css";
import homeImg from "./Home.png";
import FanRoom from "./FanRoom";
import HomeTop from "./HomeTop";
import AirConditionedRoom from "./AirConditionedRoom";
import BathRoom from "./BathRoom";
import Balcony from "./Balcony";
import Footer from "../Footer";
const HomeComponent = () => {
  return (
    <div>
      <div className="home">
        <HomeTop/>
        <FanRoom/>
        <AirConditionedRoom/>
        <BathRoom/>
        <Balcony/>
        <Footer/>
      </div>
    </div>
  );
};

export default HomeComponent;
