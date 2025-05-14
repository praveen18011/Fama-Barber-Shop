import React, { useState, useEffect } from "react";
import "../Scss/Testimonials.scss";
import user1 from "../Images/Testimonial1.jpg";
import user2 from "../Images/Testimonial2.jpg";
import user3 from "../Images/Testimonial3.jpg";
import user4 from "../Images/Testimonial4.jpg";
const testimonialsData = [
  {
    name: "Chris Evans",
    quote:
      "“You don’t just get a cut — you get a vibe, a style, and great service. Always my go-to spot.”",
    avatar: user1,
  },
  {
    name: "Zendaya",
    quote:
      "“Stylish, relaxing, and empowering. Every visit is a boost of confidence and self-care.”",
    avatar: user2,
  },
  {
    name: "Ryan Reynolds",
    quote:
      "“Absolutely loved the experience. Professional, clean, and I walked out looking sharp. Highly recommend!”",
    avatar: user3,
  },
  {
    name: "Emma Stone",
    quote:
      "“Not only do they know style, they know people. Always a warm and positive experience.”",
    avatar: user4,
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const goToSlide = (i) => setIndex(i);

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="testimonials">
      <div className="overlay">
        <div className="container">
          <h2 className="title">Testimonials</h2>
          <p className="subtitle">
            Rem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididuntamco
          </p>
          <div className="divider"></div>

          <div className="testimonial-wrapper">
            <div className="testimonial">
              <img
                src={testimonialsData[index].avatar}
                alt={testimonialsData[index].name}
                className="avatar"
              />
              <p className="quote">{testimonialsData[index].quote}</p>
              <p className="name">{testimonialsData[index].name}</p>
            </div>
          </div>

          <div className="dots">
            {testimonialsData.map((_, i) => (
              <span
                key={i}
                className={`dot ${i === index ? "active" : ""}`}
                onClick={() => goToSlide(i)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
