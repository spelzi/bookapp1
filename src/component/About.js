import React from "react";
import rate from "../image/rate1.jpeg";
import rate1 from "../image/rate2.jpeg";
import rate2 from "../image/rate3.jpeg";
import view from "../image/2222.jpeg";
import { Form, Button } from "react-bootstrap";

const About = () => {
  return (
    <>
      <div className="reviews">
        <h1>OUR REVIEWS</h1>
      </div>
      <div className="cont">
        <div className="our">
          <img src={rate} alt="" />
          <div className="icon11">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <p>
              Excellent furniture
              <br /> made of natural
              <br /> materials
            </p>
          </div>
        </div>
        <div className="our">
          <div>
            <img src={rate1} alt="" />
          </div>
          <div className="icon11">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <p>
              I bought a sofa very
              <br />
              comfortable and
              <br />
              beautiful
            </p>
          </div>
        </div>
        <div className="our">
          <div>
            <img src={rate2} alt="" />
          </div>
          <div className="icon11">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <p>
              I really liked the <br /> assortment, but the prices
              <br /> are a little too high
            </p>
          </div>
        </div>
      </div>
      <div className="view">
        <img src={view} alt="" />
        <div>
          <div className="touch">
            <h1>GET IN TOUCH</h1>
            <p>
              We would love to hear from and are always available to <br />{" "}
              answer any question or address any concerns you may have.
            </p>
          </div>
          <div className="text">
            <Form>
              <Form.Group className="">
                <input placeholder="NAME" className="group" />
              </Form.Group>
              <Form.Group className="">
                <input placeholder="EMAIL" className="group" />
              </Form.Group>
              <Form.Group className="">
                <input type="contact" placeholder="PHONE" className="group" />
              </Form.Group>
              <Form.Group className="">
                <input type="text" placeholder="MESSAGE" className="group" />
              </Form.Group>
              <Button>SENT</Button>
            </Form>
          </div>
        </div>
      </div>
      <div className="fot">
        <div className="fots">
          <h3>ADVANTAGES OF</h3>
          <h1>HACKATHON GROUP 2</h1>
          <h3>OVER OTHER BRANDS</h3>
        </div>
        <div>
          <div className="fotsss">
            <div>
              <i class="fa-solid fa-clock"></i>
              <h1>DURABILITY</h1>
            </div>
            <div>
              <i class="fa-solid fa-award"></i>
              <h1>EXCLUSIVITY</h1>
            </div>
            <div>
              <i class="fa-solid fa-check"></i>
              <h1>QUALITY</h1>
            </div>
            <div>
              <i class="fa-solid fa-couch"></i>
              <h1>COMFORT</h1>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default About;
