import React from "react";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="about_section layout_padding mb-1">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img
                src={"/images/about-img.png"}
                alt="Freshly Prepared Tiffins"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <div className="heading_container">
                <h2>About Our Tiffin Service</h2>
              </div>
              <p>
                Craving a taste of home-cooked goodness without the hassle of
                cooking? We bring delicious, healthy, and convenient tiffin
                meals right to your doorstep. Our menu features a diverse range
                of cuisines, crafted with fresh, locally sourced ingredients
                whenever possible. Whether you're a busy professional, a
                student, or simply looking for a convenient meal solution, we've
                got you covered.
              </p>
              <p>
                We are committed to providing nutritious and satisfying meals
                that fit your dietary needs. Choose from our flexible
                subscription plans and enjoy a worry-free lunch or dinner.
                Experience the taste of homemade, delivered with care.
              </p>
              <Link to="/menu">Explore Our Menu</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
