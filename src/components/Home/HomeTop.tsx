const HomeTop = () => {
  return (
    <div>
      <section id="home-img" className="home-img main-block">
        <img src="https://www.origin.co.th/wp-content/uploads/2020/09/DJI_0466.jpg" alt="" />
      </section>
      <section className="flex-container home-about main-block">
        <div className="row">
          <div className="col-10 home-content">
            <h1 className="heading">นุรักษ์นาวา</h1>
            <p className="text-block-home">นุรักษ์นาวาอพาร์ทเม้นท์ เป็นหอพักราคาย่อมเยาว์ย่านรามคำแหง33เป็นมิตรกับคนทำงานและนักศึกษา เดินทางสะดวกอยู่ใกล้กับท่าเรือรามคำแหง29 เฟอร์นิเจอร์มีพร้อมเข้าอยู่และมีห้องน้ำภายในตัวพร้อมระเบียง มีบริการที่จอดรถสำหรับมอเตอร์ไซค์และจักรยาน พร้อมทั้งมียามคอยดูแลรักษาความปลอดภัยในช่วงเวลากลางคืน</p>
            <div className="line-under-text-block"></div>
            <ul className="room">
              <li className="item">
                <a href="#fan-room">ห้องพัดลม</a>
              </li>
              <li className="item">
                <a href="#air-conditioned-room">ห้องปรับอากาศ</a>
              </li>
              <li className="item">
                <a href="#bath-room">ห้องน้ำ</a>
              </li>
              <li className="item">
                <a href="#balcony">ระเบียง</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeTop