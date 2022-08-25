import { useState } from "react";

import FormInput from "../components/form-input/form-input.component";
import Button, {
  BUTTON_TYPE_CLASSES,
} from "../components/button/button.component";

import { signInWithGooglePopup } from "../utils/firebase/firebase.utils";
import SignInForm from "../components/sign-in-form/sign-in-form.component";

// import {
//   SignUpContainer,
//   Headline,
//   ButtonsContainer,
// } from "./sign-in-form.styles.jsx";

const SignIn = () => {
  return (
    <div>
      <SignInForm />
    </div>
  );
};

export default SignIn;
