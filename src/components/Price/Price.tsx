import "./Price.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer";
import { HashLink } from "react-router-hash-link";

const Price = () => {
  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="main-block dark-bg">
          <div className="row">
            <div className="col-10 home-content">
              <div className="price">
                <h1 className="heading">ราคา</h1>
                <div className="row">
                  <div className="col-4 price-block">
                    <div className="home-img">
                    <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    </div>
                    <h1 className="heading">ห้องปรับอากาศ</h1>
                    <h1 className="heading heading-price">2900 บาท</h1>
                    <span><HashLink smooth to={'/#air-conditioned-room'}>รายละเอียดห้องพัก</HashLink></span>
                  </div>
                  <div className="col-4 price-block">
                    <div className="home-img">
                    <img src="https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" alt="" />
                    </div>
                    <h1 className="heading">ห้องพัดลม</h1>
                    <h1 className="heading heading-price">2300 บาท</h1>
                    <span><HashLink smooth to={'/#fan-room'}>รายละเอียดห้องพัก</HashLink></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Price;
