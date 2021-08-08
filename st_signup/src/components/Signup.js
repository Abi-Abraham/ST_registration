import React, { useState, useEffect, useRef } from "react";
import InputField from "./InputField";
import { nameInput, mailInput, pwInput } from "./helper";
import { ReactComponent as ArrowRight } from "../assets/img/icons/arrow-right.svg";
import { ReactComponent as Logo } from "../assets/img/logo/logo.svg";
import banner from "../assets/img/banner/bg.png";
import { TweenMax } from "gsap";

const intialState = { name: "", email: "", password: "" };
const Signup = () => {
  const [values, setValues] = useState(intialState);
  let imgSecRef = useRef([]);
  let mainSecRef = useRef([]);
  let imgRef = useRef([]);
  let imgOutRef = useRef([]);

  useEffect(() => {
    TweenMax.from(mainSecRef.current, {
      opacity: 1,
      left: 0,
      ease: "Power3.easeOut ",
      delay: "0.5",
      duration: "1.5",
    });
    TweenMax.from(imgSecRef.current, 1, {
      duration: "0.5",
      opacity: 0,
      delay: "1.3",
    });
    TweenMax.from(imgRef.current, 1, {
      duration: "0.5",
      scale: "1.2",
      delay: "1.3",
    });
    TweenMax.from(imgOutRef.current, {
      opacity: 1,
      left: 0,
      ease: "Power3.easeOut ",
      delay: "1.5",
      duration: "1.5",
    });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    setValues(intialState);
  };

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <section className="main-section">
      <div className="animating-div" ref={mainSecRef}></div>
      <div className="form-section">
        <div className="form-inner">
          <h2>Let’s Get Started.</h2>
          <p>Discover the best places in the world at your fingertips!</p>
          <form onSubmit={submitHandler}>
            <InputField
              id="userName"
              inputDetails={nameInput}
              values={values}
              changeHandler={changeHandler}
            />
            <InputField
              id="userEmail"
              inputDetails={mailInput}
              values={values}
              changeHandler={changeHandler}
            />
            <InputField
              id="userPassword"
              inputDetails={pwInput}
              values={values}
              changeHandler={changeHandler}
            />
            <div className="terms">
              <input type="checkbox" />
              <span>
                I agree to the <a href="#">Terms</a> and{" "}
                <a href="#">Privacy Policy</a>
              </span>
            </div>
            <button type="submit" className="submit-btn">
              <span className="btn-text">Sign up</span>{" "}
              <span className="arrow-icon">
                <ArrowRight />
              </span>
            </button>
          </form>
        </div>
      </div>
      <div className="bg-section" ref={imgSecRef}>
        <div className="animating-inner-div" ref={imgOutRef}></div>
        <div className="banner">
          <img src={banner} alt="banner" className="banner-img" ref={imgRef} />
          <div className="logo">
            <Logo />
          </div>
          <div className="botttom-gradient"></div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
