import React from "react";
import font from "../image/StoreFurniture.jpeg";
import font1 from "../image/store-furniture1.jpeg";
import photo from "../image/furni22.jpeg";
import myphoto from "../image/furni24.jpeg";
import myphoto1 from "../image/furni23.jpeg";
import table from "../image/table3.jpeg";
import chair from "../image/pop-furni1.jpeg";
import ward from "../image/ward-furni1.jpeg";
import sofa from "../image/sofa-furni2.jpeg";

const Home = () => {
  return (
    <>
      <div className="font">
        <div className="row1">
          <div className="col">
            <h1>
              COLLECTION OF FURNITURE <br />
              FOR THE PERFECT SETTING IN
              <br />
              YOUR HOME
            </h1>
            <div>
              <img src={font} alt="" />
            </div>
          </div>
        </div>

        <div className="row2">
          <div className="col">
            <img src={font1} alt="" />
          </div>
        </div>
      </div>
      <div className="cate">
        <h1>POPULAR CATEGORY</h1>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="col22">
              <h1>CHAIR</h1>
              <img src={chair} alt="" />
            </div>
          </div>
          <div className="col">
            <div className="col22">
              <h1>SOFAS</h1>
              <img src={sofa} alt="" />
            </div>
          </div>
          <div className="col">
            <div className="col22">
              <h1>WARDROBES</h1>
              <img src={ward} alt="" />
            </div>
          </div>
          <div className="col">
            <div className="col22">
              <h1>TABLE</h1>
              <img src={table} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="com">
        <h1>GETTING TO KNOW THE COMFORT</h1>
      </div>
      <div className="sec">
        <div className="row3">
          <h4>SOFAS, TABLES, CHAIR AND CABINETS FOR YOUR HOME</h4>
          <p>
            Previously, furniture was not available to
            <br /> everyone and was considered a luxury.
          </p>
          <p>
            Furniture was made of bronze and ivory.
            <br />
            Such a product served as an attribute of <br /> power and
            subsequently became the
            <br /> prototype of modern folding chairs
          </p>
          <a href="/more">Learn more</a>
        </div>
        <div className="row4">
          <img src={photo} alt="" />
        </div>
      </div>
      <div className="footer">
        <div>
          <div className="row5">
            <h1>
              THE INTERIOR OF YOUR APARTMENT
              <br />
              WILL CHANGE WITH OUT FURNITURE
            </h1>
            <p>
              The average life of the sofa is about 8 years. By the way
              according to
              <br />
              scientists people on average spend about 4 hours on sofas in
              knocks.
            </p>
            <img src={myphoto} alt="" />
          </div>
        </div>
        <div>
          <div className="row6">
            <img src={myphoto1} alt="" />
            <p>
              High-quality furniture is one of the most <br /> expensive
              purchases of an average person in a <br />
              lifetime
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
