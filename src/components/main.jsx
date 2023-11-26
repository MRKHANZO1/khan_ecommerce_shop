import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.png.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text fw-lighter">New Season Arrivals</h5>
              <p className="card-text fs-5 d-none d-sm-block ">
              Customers love Khan Ecommerce for its diverse and carefully curated selection, offering high-quality products in fashion, jewelry, and electronics. The fashion collection caters to various styles and occasions, from sophisticated formal attire to casual streetwear. The exquisite jewelry line is praised for its blend of craftsmanship and beauty, offering both statement pieces and subtle accessories. The electronics range is highlighted for its cutting-edge gadgets and must-have tech accessories. Overall, customers appreciate Khan Ecommerce's commitment to quality, style, and customer satisfaction, making it their go-to destination for a seamless and enjoyable shopping experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
