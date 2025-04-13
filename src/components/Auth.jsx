import React, { useState } from "react";
import "../assets/css/auth.css";
import { useNavigate } from "react-router-dom";
import { httpPost } from "../middleware/https";

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSlideChange = (type) => {
    setIsLogin(type === "login");
  };

  const handleSubmit = async (e, formType) => {
    e.preventDefault(); // stop form from reloading

    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    console.log("Submitted Data:", data);

    try {
      if (formType === "login") {
        const res = await httpPost("/admin/login", data);
        console.log("Login response:", res.message);
      } else if (formType === "signup") {
        if (data.password !== data.confirmPassword) {
          alert("Passwords do not match!");
          return;
        }

        let  {name , email , password} = data 
        const res = await httpPost("/admin/register", {name , email , password});
        console.log("Signup response:", res);
      }

      navigate("/menu");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-wrapper pt-4 px-3">
        <div className="auth-form-container">
          <div className="auth-slide-controls">
            <input
              type="radio"
              name="slide"
              id="login"
              checked={isLogin}
              onChange={() => handleSlideChange("login")}
            />
            <input
              type="radio"
              name="slide"
              id="signup"
              checked={!isLogin}
              onChange={() => handleSlideChange("signup")}
            />
            <label
              htmlFor="login"
              className={`auth-slide auth-login ${isLogin ? "active" : ""}`}
              onClick={() => handleSlideChange("login")}
            >
              Login
            </label>
            <label
              htmlFor="signup"
              className={`auth-slide auth-signup ${!isLogin ? "active" : ""}`}
              onClick={() => handleSlideChange("signup")}
            >
              Signup
            </label>
            <div
              className="auth-slider-tab"
              style={{ left: isLogin ? "0%" : "50%" }}
            ></div>
          </div>

          <div
            className="auth-form-inner"
            style={{ marginLeft: isLogin ? "0%" : "-100%" }}
          >
            {/* Login Form */}
            <form
              action="#"
              className="auth-login"
              onSubmit={(e) => handleSubmit(e, "login")}
            >
              <div className="auth-field">
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="auth-field">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="auth-pass-link">
                <a href="#">Forgot password?</a>
              </div>
              <div className="auth-field auth-btn">
                <div className="auth-btn-layer"></div>
                <input type="submit" value="Login" />
              </div>
              <div className="auth-signup-link">
                Not a member?{" "}
                <a href="#" onClick={() => handleSlideChange("signup")}>
                  Signup now
                </a>
              </div>
            </form>

            {/* Signup Form */}
            <form
              action="#"
              className="auth-signup"
              onSubmit={(e) => handleSubmit(e, "signup")}
            >
              <div className="auth-field">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div className="auth-field">
                <input
                  type="text"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="auth-field">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <div className="auth-field">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  required
                />
              </div>
              <div className="auth-field auth-btn">
                <div className="auth-btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
