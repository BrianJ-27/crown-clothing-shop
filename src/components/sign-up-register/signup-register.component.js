import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import "./signup-register.styles.scss";

class SignUpRegister extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPasword: "",
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPasword } = this.state;

    if (password !== confirmPasword) {
      alert("Passowords Do Not Match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
      // clears the form
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPasword: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPasword } = this.state;

    return (
      <div className="sign-up">
        <h2 className="title"> I do not have an account </h2>
        <span> Sign up with your email and password </span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="Password"
            name="confirmPassword"
            value={confirmPasword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />

          <CustomButton type="submit"> Sign Up </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUpRegister;
