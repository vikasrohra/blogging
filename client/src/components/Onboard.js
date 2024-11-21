import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";

const Onboard = () => {
  const [isSignin, setIsSignin] = useState(true);
  return (
    <>
      {(isSignin && <Signin setIsSignin={setIsSignin} />) || null}
      {(!isSignin && <Signup setIsSignin={setIsSignin} />) || null}
    </>
  );
};

export default Onboard;
