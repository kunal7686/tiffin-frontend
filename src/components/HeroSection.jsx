import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero_area mb-1">
      <div className="bg-box">
        <img src="images/landing/top.jpg" alt="Delicious Tiffin Service" />
      </div>

      <section className="slider_section">
        <div
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>Your Home-Style Meals, Delivered Daily</h1>
                      <p>
                        Craving delicious, home-cooked meals without the hassle?
                        Tinfin Box brings you fresh, flavorful tiffins delivered
                        right to your doorstep. Enjoy a variety of authentic
                        dishes made with love and the finest ingredients. Say
                        goodbye to cooking fatigue and hello to convenient,
                        healthy meals!
                      </p>
                      <div className="btn-box">
                        <Link to="/menu" className="btn1">
                          View Menu & Order
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>Fresh, Affordable Tiffins for Busy People</h1>
                      <p>
                        Struggling to find time to cook healthy meals? Tinfin
                        Box offers budget-friendly tiffin options packed with
                        nutritious goodness. Choose from a daily-changing menu
                        and experience the taste of home, delivered on time,
                        every time. Perfect for students, working professionals,
                        and anyone who values convenience and quality!
                      </p>
                      <div className="btn-box">
                        <Link to="/menu" className="btn1">
                          See Pricing & Subscription
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-6">
                    <div className="detail-box">
                      <h1>Taste the Tradition, Delivered to Your Door</h1>
                      <p>
                        Experience the authentic flavors of home with Tinfin
                        Box's traditional tiffin service. We use time-honored
                        recipes and fresh, locally sourced ingredients to create
                        meals that nourish your body and soul. Enjoy a diverse
                        menu featuring regional specialties and classic
                        favorites. Let us take care of the cooking, so you can
                        focus on what matters most!
                      </p>
                      <div className="btn-box">
                        <Link to="/menu" className="btn1">
                          Explore Our Cuisine
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to="0"
                className="active"
              ></li>
              <li data-target="#customCarousel1" data-slide-to="1"></li>
              <li data-target="#customCarousel1" data-slide-to="2"></li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
