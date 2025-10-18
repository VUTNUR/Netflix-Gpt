import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/Netflix_Logo_PMS.png";
import profileLogo from "../assets/profile-logo.png";
import { FaCaretUp } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { onAuthStateChanged , signOut} from "firebase/auth";
import { auth } from "../utils/firebase";
import { selectLanguage, toggleSearch } from "../utils/profileConfigSlice";
import { multiLanguageArray } from "../utils/constant";

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isUser = useSelector((store)=>store.user)
  const showSearch = useSelector((store)=>store.profile.showSearch)

  useEffect(()=>{
    const handleClickOutside = (event)=>{
      if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
        setShowDropDown(false)
      }
    }
    document.addEventListener("click",handleClickOutside);
    return (
      document.removeEventListener("click", handleClickOutside)
    )
  },[])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  const handleLogOut=()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
  dispatch(removeUser())
    }).catch((error) => {
      // An error happened.
      
    });
  }

  const handleToggle =()=>{
    dispatch(toggleSearch())
  }
  return (
    <div className={`h-[10%] px-10 ${isUser ? (showSearch ? "bg-black/10 py-2" : "bg-black py-1") : "bg-black/10 py-2"}
 flex justify-between items-center relative`}>
      {/* Logo */}
      <img src={logo} alt="logo" width="180" className="drop-shadow-lg" />

      {/* Profile + Dropdown */}
      {
        isUser &&
        <div className="flex items-center gap-2">
          {
            showSearch &&
            <select onChange={(e)=>dispatch(selectLanguage(e.target.value))} className="p-2 rounded-md bg-blue-700 text-white cursor-pointer">
              {
                multiLanguageArray.map((el)=> <option key={el.value} value={el.value}>{el.name}</option>)
              }
            </select>
          }
          <button onClick={handleToggle} className="px-4 py-2 rounded-md bg-purple-800 text-white cursor-pointer">{showSearch ? "Go To Home":"Go To Search"}</button>
      <div
        className="relative flex items-center gap-1 cursor-pointer select-none"
        onClick={() => setShowDropDown(!showDropDown)}
      >
        <img
          src={profileLogo}
          alt="profile"
          className="w-10 h-10 rounded-md border border-gray-600"
        />
        <FaCaretUp
          className={`text-white transition-transform duration-200 ${
            showDropDown ? "rotate-180" : "rotate-0"
          }`}
        />

        {/* Dropdown Menu */}
        {showDropDown && (
          <div ref={dropdownRef} className="absolute top-14 right-0 bg-black text-white rounded-md shadow-lg w-40 py-3 z-20">
            <p className="px-4 py-2 hover:bg-gray-800 cursor-default">
              {isUser?.displayName}
            </p>
            <hr className="border-gray-700 my-1" />
            <button
              className="px-4 py-2 w-full text-left hover:bg-gray-800 cursor-pointer"
              onClick={() => {
                console.log("Logout clicked");
                handleLogOut()
                // TODO: add your logout logic here (e.g., signOut from Firebase)
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
        </div>
      }
    </div>
  );
};

export default Header;
