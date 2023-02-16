import "./Contact.css";
import Footer from "../Footer";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="body">
        <div className="main-block dark-bg">
          <div className="row">
            <div className="col-10 home-content">
              <div className="contact">
                <h1 className="heading">ติดต่อเรา</h1>
                <p className="text-block-contact">สามารถเข้ามาติดต่อโดยตรงได้ที่อพาร์ทเม้นท์เลยหรือสามารถติดต่อทางโทรศัพท์ได้ที่</p>
                <div className="contact-content">
                  <p className="tel-block-contact">เบอร์โทรศัพท์ : 089-215-4215 คุณมาน</p>
                  <p className="tel-block-contact">เบอร์โทรศัพท์ : 094-778-2090 คุณนา</p>
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

export default Contact;
