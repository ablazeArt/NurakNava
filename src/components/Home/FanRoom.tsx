const FanRoom = () => {
  return (
    <section id="fan-room" className="flex-container light-bg main-block">
      <div className="row">
        <div className="col-10 home-content">
          <div id="fan-room-slide-img" className="carousel slide home-img" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#fan-room-slide-img" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#fan-room-slide-img" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#fan-room-slide-img" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80" className="d-block w-100" alt="" />
              </div>
              <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1612320582827-a95ab2596dbc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" className="d-block w-100" alt="" />
              </div>
              <div className="carousel-item">
                <img src="https://images.unsplash.com/photo-1613553474179-e1eda3ea5734?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#fan-room-slide-img" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#fan-room-slide-img" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <h1 className="heading">ห้องพัดลม</h1>
          <p className="text-block-home">ห้องพักเฟอร์นิเจอร์ประกอบไปด้วย เตียงนอน โต๊ะเครื่องแป้ง พัดลม เก้าอี้ ห้องกว้าง3x4 มีห้องน้ำในตัวพร้อมระเบียง</p>
        </div>
      </div>
    </section>
  );
};

export default FanRoom
