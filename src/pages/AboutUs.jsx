import React from "react";
import "../styles/aboutUs.scss";

const AboutUs = () => {
  return (
    <div className="teamGallery_container">
      <h1>Equipo 1BUY1</h1>
      <section className="teamGallery">
        <div className="memberCard">
          <img src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670399858/caru_wawmux.jpg" alt="karuh" />
          <div className="info_container">
            <a href="https://github.com/Karuh13">
              <img
                src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670279392/icons/github-15_lpru4a.svg"
                alt="github"
              />
            </a>
            <h2>Álvaro Caruana</h2>
          </div>
        </div>
        <div className="memberCard">
          <img
            src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670282033/icons/profile-me_lnvrxn.jpg"
            alt="Luisfer"
          />
          <div className="info_container">
            <a href="https://github.com/LuisferGuevara" target="__blank">
              <img
                src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670279392/icons/github-15_lpru4a.svg"
                alt="github"
              />
            </a>
            <h2>Luisfer Guevara</h2>
          </div>
        </div>
        <div className="memberCard">
          <img src="https://placekitten.com/g/250/200" alt="Jaime" />
          <div className="info_container">
            <a href="https://github.com/JimmyGx6" target="__blank">
              <img
                src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670279392/icons/github-15_lpru4a.svg"
                alt="github"
              />
            </a>
            <h2>Jaime Sánchez de Diego</h2>
          </div>
        </div>
        <div className="memberCard">
          <img
            src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670282181/icons/WhatsApp_Image_2022-09-16_at_19.22.25_ksojov.jpg"
            alt="Diego"
          />
          <div className="info_container">
            <a href="https://github.com/diegogglez" target="__blank">
              <img
                src="https://res.cloudinary.com/dfxn0bmo9/image/upload/v1670279392/icons/github-15_lpru4a.svg"
                alt="github"
              />
            </a>
            <h2>Diego García</h2>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
