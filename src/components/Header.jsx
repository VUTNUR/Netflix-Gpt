import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/Netflix_Logo_PMS.png";
import profileLogo from "../assets/profile-logo.png";
import { FaCaretUp } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { selectLanguage, toggleSearch } from "../utils/profileConfigSlice";
import { multiLanguageArray } from "../utils/constant";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUser = useSelector((store) => store.user);
  const showSearch = useSelector((store) => store.profile.showSearch);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropDown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => dispatch(removeUser()))
      .catch((error) => console.error("Sign-out error:", error));
  };

  const handleToggle = () => {
    dispatch(toggleSearch());
  };

  return (
    <header
      className={`${
        isUser ? (showSearch ? "bg-black/10 py-2" : "bg-black py-1") : "bg-black/10 py-2"
      } flex justify-between items-center relative px-4 sm:px-6 md:px-10 h-[10%]`}
    >
      {/* Logo */}
      <img
        src={logo}
        alt="logo"
        className="w-28 sm:w-36 md:w-44 lg:w-48 drop-shadow-lg object-contain"
      />

      {/* Profile + Dropdown */}
      {isUser && (
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Language Select */}
          {showSearch && (
            <select
              onChange={(e) => dispatch(selectLanguage(e.target.value))}
              className="hidden sm:block p-2 rounded-md bg-blue-700 text-white cursor-pointer text-sm sm:text-base"
            >
              {multiLanguageArray.map((el) => (
                <option key={el.value} value={el.value}>
                  {el.name}
                </option>
              ))}
            </select>
          )}

          {/* Toggle Search Button */}
          <button
            onClick={handleToggle}
            className="px-3 sm:px-4 py-1 sm:py-2 rounded-md bg-purple-800 text-white cursor-pointer text-sm sm:text-base whitespace-nowrap"
          >
            {showSearch ? "Go To Home" : "Go To Search"}
          </button>

          {/* Profile + Dropdown */}
          <div
            className="relative flex items-center gap-1 cursor-pointer select-none"
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <img
              src={profileLogo}
              alt="profile"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-md border border-gray-600"
            />
            <FaCaretUp
              className={`text-white transition-transform duration-200 ${
                showDropDown ? "rotate-180" : "rotate-0"
              }`}
            />

            {/* Dropdown Menu */}
            {showDropDown && (
              <div
                ref={dropdownRef}
                className="absolute top-12 sm:top-14 right-0 bg-black text-white rounded-md shadow-lg w-36 sm:w-40 py-3 z-20"
              >
                <p className="px-4 py-2 hover:bg-gray-800 cursor-default text-sm sm:text-base truncate">
                  {isUser?.displayName}
                </p>
                <hr className="border-gray-700 my-1" />
                <button
                  className="px-4 py-2 w-full text-left hover:bg-gray-800 cursor-pointer text-sm sm:text-base"
                  onClick={handleLogOut}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
