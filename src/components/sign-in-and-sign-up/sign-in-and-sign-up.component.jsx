import React from "react";
import "./sign-in-and-sign-up.styles.scss";
import SignIn from "../sign-in/sign-in.component";
import SignUp from "../sign-up/sign-up.component";

const SignInandSignUpPage = () => {
  return (
    <div className="sign-in_sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInandSignUpPage;
