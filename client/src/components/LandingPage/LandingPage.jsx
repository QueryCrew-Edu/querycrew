import React, { useState, useEffect } from "react";
import "./LandingPage.css";
import Lottie from "lottie-react";
import HeroAnimation from "../../assets/animation_lkaola8n.json";
import AOS from "aos"
import "aos/dist/aos.css";
import Loader from "../Loader/Loader";

const LandingPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5500);
  }, []);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="LandingPage">
          <p data-aos="zoom-in-up" data-aos-duration="1000">
            Open the doors to endless learning possibilities with our online
            tutorials. From programming to design, we've got you covered on your
            path to mastery.
          </p>
          <Lottie
            animationData={HeroAnimation}
            loop={true}
            data-aos="zoom-in-left"
            data-aos-duration="1000"
          />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
