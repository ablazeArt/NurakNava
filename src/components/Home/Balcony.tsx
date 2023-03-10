const Balcony = () => {
    return (
      <section id="balcony" className="flex-container dark-bg main-block">
        <div className="row">
          <div className="col-10 home-content">
            <div id="balcony-slide-img" className="carousel slide home-img" data-bs-ride="carousel">
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#balcony-slide-img" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#balcony-slide-img" data-bs-slide-to="1" aria-label="Slide 2"></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="https://images.unsplash.com/photo-1560448205-d82bf18b9bcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" className="d-block w-100" alt="" />
                </div>
                <div className="carousel-item">
                  <img src="https://images.unsplash.com/photo-1621045081424-97aa08903f76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="d-block w-100" alt="" />
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#balcony-slide-img" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#balcony-slide-img" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <h1 className="heading">ระเบียง</h1>
            <p className="text-block-home">ห้องพักเฟอร์นิเจอร์ประกอบไปด้วย เตียงนอน โต๊ะเครื่องแป้ง เครื่องปรับอากาศ เก้าอี้ ห้องกว้าง3x4 มีห้องน้ำในตัวพร้อมระเบียง</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Balcony
  