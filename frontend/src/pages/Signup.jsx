import React, { useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputBox from "../components/InputBox";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { signup } from "../services/operations/authApi";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  async function hanldeClick(event) {
    event.preventDefault();
    const response = await signup(
      formData.firstname,
      formData.lastname,
      formData.email,
      formData.password
    );
    if (response === "User created successfully") {
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
      setShowError(false);
      navigate("/signin");
    } else {
      setShowError(true);
    }
  }
  return (
    <div className="bg-slate-300 h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg w-[80%] sm:w-[50%] lg:w-[23%] text-center p-3">
        <div className="flex flex-col">
          <Heading label={"Sign Up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox
            label={"First Name"}
            placeholder={"John"}
            name={"firstname"}
            value={formData.firstname}
            onChange={changeHandler}
          />
          <InputBox
            label={"Last Name"}
            placeholder={"Doe"}
            name={"lastname"}
            value={formData.lastname}
            onChange={changeHandler}
          />
          <InputBox
            label={"Email"}
            placeholder={"johndoe@example.com"}
            name={"email"}
            value={formData.email}
            onChange={changeHandler}
          />
          <InputBox
            label={"Password"}
            placeholder={"123456"}
            name={"password"}
            value={formData.password}
            onChange={changeHandler}
          />
          <Button label={"Sign up"} onClick={hanldeClick} />
          <BottomWarning
            label={"Already have an account? "}
            to={"/signin"}
            buttonText={"Sign in"}
          />
          {showError && (
            <div className="font-light text-red-700 text-xs mt-2">
              Signup Failed!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Signup;
