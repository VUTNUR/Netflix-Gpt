import React, { useState } from "react";
import Header from "./Header";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router";

const Login = () => {
  const [isSignUpForm, setIsSignupForm] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Basic validation
  const validate = () => {
    const newErrors = {};

    if (isSignUpForm && !formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      if (isSignUpForm) {
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            const user = userCredential.user;
            setErrorMsg("");
            updateProfile(auth.currentUser, {
              displayName: formData.fullName,
            })
              .then(() => {
                dispatch(
                  addUser({
                    uid: auth.currentUser.uid,
                    email: auth.currentUser.email,
                    displayName: auth.currentUser.displayName,
                  })
                );
              })
              .catch((error) => {
                setErrorMsg(error.message);
              });
          })
          .catch((error) => {
            setErrorMsg(error.message);
          });
      } else {
        signInWithEmailAndPassword(auth, formData.email, formData.password)
          .then((userCredential) => {
            const user = userCredential.user;
            dispatch(
              addUser({
                uid: auth.currentUser.uid,
                email: auth.currentUser.email,
                displayName: auth.currentUser.displayName,
              })
            );
          })
          .catch((error) => {
            setErrorMsg(error.message);
          });
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-[url('/src/assets/netflix-bg.jpg')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <Header />

      {/* Center content */}
      <div className="flex justify-center items-center w-full min-h-[90vh] relative z-10 px-4">
        <form
          onSubmit={handleSubmit}
          className="bg-black/70 rounded-xl w-full max-w-md sm:max-w-lg md:max-w-md lg:w-4/12 p-6 sm:p-8 md:p-10 flex flex-col gap-5"
        >
          <h3 className="text-white font-bold text-2xl sm:text-3xl mb-2 text-center">
            {isSignUpForm ? "Sign Up" : "Sign In"}
          </h3>

          {/* Full Name (Only for SignUp) */}
          {isSignUpForm && (
            <div className="flex flex-col">
              <input
                type="text"
                name="fullName"
                placeholder="Enter Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className="p-2 sm:p-3 focus:outline-none border border-white rounded-md placeholder:text-white text-white bg-transparent"
              />
              {errors.fullName && (
                <p className="text-red-400 text-sm">{errors.fullName}</p>
              )}
            </div>
          )}

          {/* Email */}
          <div className="flex flex-col">
            <input
              type="text"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 sm:p-3 focus:outline-none border border-white rounded-md placeholder:text-white text-white bg-transparent"
            />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col">
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="p-2 sm:p-3 focus:outline-none border border-white rounded-md placeholder:text-white text-white bg-transparent"
            />
            {errors.password && (
              <p className="text-red-400 text-sm">{errors.password}</p>
            )}
          </div>

          {errorMsg && <p className="text-red-400 text-sm">{errorMsg}</p>}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-red-600 text-white p-2 sm:p-3 rounded-md hover:bg-red-700 transition cursor-pointer"
          >
            {isSignUpForm ? "Sign Up" : "Sign In"}
          </button>

          {/* Toggle Between Sign In / Sign Up */}
          {isSignUpForm ? (
            <p className="m-0 text-sm sm:text-base text-white text-center">
              Already a customer?{" "}
              <span
                onClick={() => {
                  setIsSignupForm(false);
                  setFormData({ fullName: "", email: "", password: "" });
                  setErrors({});
                }}
                className="cursor-pointer font-semibold hover:underline"
              >
                Login now.
              </span>
            </p>
          ) : (
            <p className="m-0 text-sm sm:text-base text-white text-center">
              New to Netflix?{" "}
              <span
                onClick={() => {
                  setIsSignupForm(true);
                  setFormData({ fullName: "", email: "", password: "" });
                  setErrors({});
                }}
                className="cursor-pointer font-semibold hover:underline"
              >
                Sign up now.
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
