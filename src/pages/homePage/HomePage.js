import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import banner from "../../assets/video.png";
import { Button, Carousel, Tabs } from "antd";
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";

const images = [
  img1,
  img2,
  img3,
  img4,
  img1,
  img2,
  img3,
  img4,
  img1,
  img2,
  img3,
  img4,
];

const { TabPane } = Tabs;

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState("0");

  const handleChange = (current) => {
    setCurrentSlide(`${current}`);
  };

  return (
    <div className="home-container">
      <div className="banner-container">
        <div className="right-banner">
          <h1>
            Eat What You Cook <br /> With Us, Together!
          </h1>
          <p>
            When you eat something that cooked by
            <br /> yourself, the happiness is priceless.
          </p>
          <Button className="banner-button">Decide Menu</Button>
        </div>
        <img src={banner} alt="banner" />
      </div>
      <div className="expects-container">
        <h1>What to expect</h1>
        <Tabs activeKey={currentSlide} className="tabs-carousel">
          <TabPane tab="Healthy" key="0" />
          <TabPane tab="Tasty" key="4" />
          <TabPane tab="Yummy" key="8" />
        </Tabs>
        <div className="expects-carousel">
          <Carousel
            slidesToShow={4}
            slidesToScroll={4}
            dots={false}
            afterChange={handleChange}
            autoplay
          >
            {images.map((image) => (
              <div className="carousel-item">
                <img src={image} alt="food-img" />
                <h3>Fruity joss</h3>
              </div>
            ))}
          </Carousel>
        </div>
        <Link to="/form">
          <div className="explore-button">Explore Now</div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
