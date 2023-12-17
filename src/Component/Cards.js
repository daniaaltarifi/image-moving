import React from "react";

function Cards() {
  return (
    <div>
      <div className="container ">
        <div className="card">
          <div className="card-header">Featured</div>
          <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
              <div className="card-body ">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <div className="d-flex mb-3 flex-wrap ">
                <img
                  src={require("../images/brand-01.png")}
                  alt=""
                  width={"30%"}
                />
                <img
                  src={require("../images/image_news_06.jpg")}
                  alt=""
                  width={"30%"}
                />
                <img
                  src={require("../images/image_project_13.jpg")}
                  alt=""
                  width={"30%"}
                />
                <img
                  src={require("../images/image_project_06.jpg")}
                  alt=""
                  width={"30%"}
                />
                <img
                  src={require("../images/services_01.jpg")}
                  alt=""
                  width={"30%"}
                />
                <img
                  src={require("../images/brand-01.png")}
                  alt=""
                  width={"30%"}
                />
                {/* <img src={require("../images/brand-01.png")} alt="" width={"30%"}/> */}
              </div>
            </div>
          </div>
        </div>

        <h1 style={{ color: "white"}}>Featured</h1>
      </div>
      <div className="container">
        <div className="card">
          <div className="card-header">Featured</div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 ">
              <div className="d-flex mb-3 flex-wrap ">
                <img
                  src={require("../images/brand-01.png")}
                  alt=""
                  width={"20%"}
                />
                <img
                  src={require("../images/image_news_06.jpg")}
                  alt=""
                  width={"20%"}
                />
                <img
                  src={require("../images/image_project_13.jpg")}
                  alt=""
                  width={"20%"}
                />
                <img
                  src={require("../images/image_project_06.jpg")}
                  alt=""
                  width={"20%"}
                />
                <img
                  src={require("../images/services_01.jpg")}
                  alt=""
                  width={"20%"}
                />
                <img
                  src={require("../images/brand-01.png")}
                  alt=""
                  width={"20%"}
                />
                <img
                  src={require("../images/services_01.jpg")}
                  alt=""
                  width={"20%"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
