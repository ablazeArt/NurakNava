import "./Location.css";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";

const Location = () => {
  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="main-block dark-bg">
          <div className="row">
            <div className="col-10 home-content">
              <div className="about">
                <h1 className="heading">ที่อยู่</h1>
                <p className="text-block-location">59 ซอย รามคำแหง 33 แขวงหัวหมาก เขตบางกะปิ กรุงเทพมหานคร 10240 เดินเข้ามาจากปากซอยรามคำแหง 33 เดินตรงมาเรื่อยๆแล้วเดินเลี้ยวซ้าย 1 ครั้งและเลี้ยวขวาอีกหนึ่งครั้ง หอพักจะอยู่สุดท้ายซอย</p>
                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15501.392358545312!2d100.6122773!3d13.75787!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e1916b259d5%3A0x3e9fc8c4d49bd59d!2z4LiZ4Li44Lij4Lix4LiB4Lip4LmM4LiZ4Liy4Lin4Liy!5e0!3m2!1sth!2sth!4v1676138282459!5m2!1sth!2sth" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Location;
