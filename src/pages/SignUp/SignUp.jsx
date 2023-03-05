import React from "react";

const SignUp = ({ handleToggleForm }) => {
  <div>
    <div>signup</div>
    <button onClick={() => handleToggleForm("login")}>
      Already having an account! Login Here
    </button>
  </div>;
};

export default SignUp;
