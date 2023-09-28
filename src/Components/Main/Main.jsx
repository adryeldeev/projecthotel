import React, { useEffect } from "react";
import "./main.css";
import "./main.scss";
import {
  HiOutlineLocationMarker,
  HiOutlineClipboardCheck,
} from "react-icons/hi";
import Aos from "aos";
import "aos/dist/aos.css";

import img from "../../Assest/img.jpg";
import img2 from "../../Assest/img2.jpg";
import img3 from "../../Assest/img3.jpg";
import img4 from "../../Assest/img4.jpg";
import img5 from "../../Assest/img5.jpg";
import img6 from "../../Assest/img6.jpg";
import img7 from "../../Assest/img7.jpg";
import img8 from "../../Assest/img8.jpg";
import img9 from "../../Assest/img9.jpg";

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of  the best  travel destinations is the world. This place is known for its luxurious stays and adventurous  activities.",
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: "Machu Picchu",
    location: "Peru",
    grade: "CULTURAL RELAX",
    fees: "$600",
    description:
      "The epitome of romance, Bora Bora is one of  the best  travel destinations is the world. This place is known for its luxurious stays and adventurous  activities.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: "Great Barrier Reef",
    location: "Australia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of  the best  travel destinations is the world. This place is known for its luxurious stays and adventurous  activities.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitle: "Cappadocia",
    location: "Turkey",
    grade: "CULTURAL RELAX",
    fees: "$800",
    description:
      "The epitome of romance, Bora Bora is one of  the best  travel destinations is the world. This place is known for its luxurious stays and adventurous  activities.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitle: "Guanajuato",
    location: "Mexico",
    grade: "CULTURAL RELAX",
    fees: "$1100",
    description:
      "The epitome of romance, Bora Bora is one of  the best  travel destinations is the world. This place is known for its luxurious stays and adventurous  activities.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of  the best  travel destinations is the world. This place is known for its luxurious stays and adventurous  activities.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitle: "Angkor Wat",
    location: "Cambodia",
    grade: "CULTURAL RELAX",
    fees: "$790",
    description:
      "The epitome of romance, Bora Bora is one of  the best  travel destinations is the world. This place is known for its luxurious stays and adventurous  activities.",
  },
  {
    id: 8,
    imgSrc: img8,
    destTitle: "Taj Mahal",
    location: "India",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of  the best  travel destinations is the world. This place is known for its luxurious stays and adventurous  activities.",
  },
  {
    id: 9,
    imgSrc: img9,
    destTitle: "Bali Island",
    location: "Indonesia",
    grade: "CULTURAL RELAX",
    fees: "$700",
    description:
      "The epitome of romance, Bora Bora is one of  the best  travel destinations is the world. This place is known for its luxurious stays and adventurous  activities.",
  },
];
const Main = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
      easing: "ease-in-out-cubic",
      once: true,
    });
  }, []);

  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most visited destinations
        </h3>
      </div>
      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div data-aos="fade-up" className="singleDestination" key={id}>
                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>
                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>
                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade} <small>+1</small>{" "}
                      </span>
                    </div>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
