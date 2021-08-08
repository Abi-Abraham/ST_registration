import React, { useState } from "react";
import verified from "../assets/img/icons/verified.svg";
import errorIcon from "../assets/img/icons/error.svg";

const errorState = {
  name: { errMsg: "", onblur: false },
  email: { errMsg: "", onblur: false },
  password: {
    errMsg: "",
    onblur: false,
  },
};

const Input_field = (props) => {
  const { inputDetails, id, values, changeHandler } = props;

  const [error, setError] = useState(errorState);

  const nameValidator = (e) => {
    if (e.target.value.length === 0) {
      return setError({
        ...error,
        [e.target.name]: { errMsg: "Required field", onblur: true },
      });
    } else {
      return setError({
        ...error,
        [e.target.name]: { errMsg: "", onblur: true },
      });
    }
  };

  const mailValidator = (e) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.value)) {
      return setError({
        ...error,
        [e.target.name]: { errMsg: "", onblur: true },
      });
    } else {
      return setError({
        ...error,
        [e.target.name]: {
          errMsg: "Please enter a valid email address.",
          onblur: true,
        },
      });
    }
  };

  const pwValidator = (e) => {
    if (e.target.value.length < 6) {
      return setError({
        ...error,
        [e.target.name]: {
          errMsg: "Password must be at least 6 characters long",
          onblur: true,
        },
      });
    } else {
      return setError({
        ...error,
        [e.target.name]: { errMsg: "", onblur: true },
      });
    }
  };

  const liveChecker = (e) => {
    if (e.target.name === "name") {
      nameValidator(e);
    }
    if (e.target.name === "email") {
      mailValidator(e);
    }
    if (e.target.name === "password") {
      pwValidator(e);
    }
  };

  return (
    <div className="input-parent">
      <div className="input-child">
        <span className="icon">
          <img src={inputDetails.icon} alt={inputDetails.name} />
        </span>
        <span className="validator-icon">
          {error[inputDetails.name].onblur &&
            error[inputDetails.name].errMsg === "" && (
              <img src={verified} alt={inputDetails.name} />
            )}
          {error[inputDetails.name].errMsg !== "" && (
            <img src={errorIcon} alt={inputDetails.name} />
          )}
        </span>
        <input
          type={inputDetails.type}
          id={id}
          value={values[inputDetails.name] || ""}
          onChange={(e) => changeHandler(e)}
          onKeyUp={(e) => liveChecker(e)}
          placeholder={inputDetails.placeholder}
          name={inputDetails.name}
          className={`user-input ${
            error[inputDetails.name].errMsg !== "" && "error-input"
          }`}
        />
      </div>
      <span className="error-msg">
        {error[inputDetails.name].errMsg !== "" ? (
          error[inputDetails.name].errMsg
        ) : (
          <i style={{ visibility: "hidden" }}>Not show</i>
        )}
      </span>
    </div>
  );
};

export default Input_field;
