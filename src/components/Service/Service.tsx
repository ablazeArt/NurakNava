import "./Service.css";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBicycle, faFemale, faWifi, faLock, faTint, faLifeRing } from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="main-block dark-bg">
          <div className="row">
            <div className="col-10 home-content">
              <div className="service">
                <h1 className="heading">บริการ</h1>
                <div className="row">
                  <div className="col-4 service-block">
                    <FontAwesomeIcon icon={faLock as IconProp} className="icon-service" />
                    <h1 className="heading">พนักงานรักษาความปลอดภัย</h1>
                    <p>มีพนักงานคอยรักษาความปลอดภัยในช่วงกลางคืนตั้งแต่ 18.00-6.00 ในทุกคืน</p>
                  </div>
                  <div className="col-4 service-block">
                    <FontAwesomeIcon icon={faBicycle as IconProp} className="icon-service" />
                    <h1 className="heading">ที่จอดรถสำหรับมอเตอร์ไซค์</h1>
                    <p>มีพื้นที่บริการสำหรับจอดมอเตอร์ไซค์และจักรยานฟรี สำหรับผู้เช่าอพาร์ทเม้นท์</p>
                  </div>
                  <div className="col-4 service-block">
                    <FontAwesomeIcon icon={faFemale as IconProp} className="icon-service" />
                    <h1 className="heading">แม่บ้าน</h1>
                    <p>มีคุณแม่บ้านคอยทำความสะอาดส่วนต่างๆของอพาร์ทเม้นท์ เช่น บันได ห้องโถงทางเดิน</p>
                  </div>
                  <div className="col-4 service-block">
                    <FontAwesomeIcon icon={faWifi as IconProp} className="icon-service" />
                    <h1 className="heading">บริการอินเทอร์เน็ต</h1>
                    <p>ทางอพาร์ทเม้นท์มีบริการไวไฟ เชื่อมต่ออินเทอร์เน็ตในราคา 200 บาท/เดือน</p>
                  </div>
                  <div className="col-4 service-block">
                    <FontAwesomeIcon icon={faTint as IconProp} className="icon-service" />
                    <h1 className="heading">ตู้กดน้ำ</h1>
                    <p>ทางอพาร์ทเม้นท์มีบริการมีบริการตู้กดน้ำ ราคา 1ลิตร/1บาท</p>
                  </div>
                  <div className="col-4 service-block">
                    <FontAwesomeIcon icon={faLifeRing as IconProp} className="icon-service" />
                    <h1 className="heading">เครื่องซักผ้าหยอดเหรียญ</h1>
                    <p>ทางอพาร์ทเม้นท์มีบริการเครื่องซักผ้าหยอดเหรียญ ค่าบริการ ซัก1ครั้ง/20บาท</p>
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

export default Service;
