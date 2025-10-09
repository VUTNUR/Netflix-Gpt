import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignUpForm, setIsSignupForm] = useState(false);

  return (
    <div className="h-screen bg-[url('/src/assets/netflix-bg.jpg')] bg-cover bg-center">
        <Header />
      <div className="flex justify-center items-center w-full h-full">
        <div className="bg-black rounded-xl w-4/12 p-12">
          <div className="flex flex-col gap-5">
            <h3 className="text-white font-bold text-2xl m-0">
              {isSignUpForm ? "Sign Up" : "Sign In"}
            </h3>
            {isSignUpForm && (
              <input
                type="text"
                placeholder="Enter Full Name"
                className="p-2 focus:outline-none border border-white rounded-md placeholder:text-white text-white"
              />
            )}
            <input
              type="text"
              placeholder="Enter email"
              className="p-2 focus:outline-none border border-white rounded-md placeholder:text-white text-white"
            />
            <input
              type="password"
              placeholder="Enter password"
              className="p-2 focus:outline-none border border-white rounded-md placeholder:text-white text-white"
            />
            <button className="bg-red-600 text-white p-2 rounded-md">
              {isSignUpForm ? "Sign Up" : "Sign In"}
            </button>
            {isSignUpForm ? (
              <p className="m-0 text-[1rem] text-white">
                Already a customer?
                <span
                  onClick={() => setIsSignupForm(false)}
                  className="cursor-pointer font-[600] text-[1.1rem]"
                >
                  Login in now.
                </span>
              </p>
            ) : (
              <p className="m-0 text-[1rem] text-white">
                New to Netflix?{" "}
                <span
                  onClick={() => setIsSignupForm(true)}
                  className="cursor-pointer font-[600] text-[1.1rem]"
                >
                  Sign up now.
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
