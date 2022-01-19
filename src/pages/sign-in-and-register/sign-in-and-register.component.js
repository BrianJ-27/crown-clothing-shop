import React from "react";
import SignIn from "../../components/sign-in/Sign-in.component";
import SignUpRegister from "../../components/sign-up-register/signup-register.component";
import "./sign-in-and-register.styles.scss";

const SignInAndRegisterPage = () => (
  <div className="sign-in-and-register">
    <SignIn />
    <SignUpRegister />
  </div>
);

export default SignInAndRegisterPage;
