import { render } from "@testing-library/react";
import { Carousel } from "react-bootstrap";
import React, { useState, useEffect } from "react";
// import hangrong from "../images/hang-rong.jpeg";
const Carousels = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    if (index != 0) setIndex(0);
  }, [index]);

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            // className="d-block w-100"
            style={{
              // clip: "rect(0px,60px,50px,0px)",
              maxHeight: "440px",
              width: "100vw",
              objectFit: "cover",
            }}
            src="https://s.abcnews.com/images/Lifestyle/airbnb-solar-eclipse-ht-03-jpo-170801_16x9_1600.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img className="d-block w-100" src={hangrong} alt="Second slide" /> */}

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="holder.js/800x400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
// render(<Carousels />);

export default Carousels;
