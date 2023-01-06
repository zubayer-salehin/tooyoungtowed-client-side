import styles from "./navbar.module.css";
import hamburger from "../../../assets/images/Navbar/hamburger.svg";
import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { CONTEXT_LOGIN_REGISTER } from "../Main";
import { Link } from "react-router-dom";


const Navbar = () => {

  const { setLoginModal } = useContext(CONTEXT_LOGIN_REGISTER);
  const [showNav, setShowNav] = React.useState(false);
  const [showAbout, setShowAbout] = React.useState(false);
  const [showWork, setShowWork] = React.useState(false);
  const user = localStorage.getItem("user");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    setUserName(user);
  }, [user]);

  const handleLogin = () => {
    setLoginModal(true)
    setShowNav(!showNav)
  }

  const handleSignOut = () => {
    localStorage.removeItem("user")
    setUserName("");
  }

  return (
    <div className="lg:flex lg:bg-[#5c1112] lg:justify-between lg:items-center sticky top-0 z-10">
      <div className="lg:h-[70px] h-[120px] bg-[#5c1112] flex lg:justify-between  flex-row items-center lg:pl-[40px] pl-[25px]  max-lg:gap-[190px] max-md:gap-[60px] max-[500px]:gap-[20px]  z-20 ">
        <Link to="/">
          <img
            onClick={() => setShowNav(!showNav)}
            src={hamburger}
            alt="bar"
            className="h-[50px] w-[44px] text-white lg:hidden block"
          />
          <img
            src="https://tooyoungtowed.org/assets/2Y2W_horiz_white__2-bcf24d2e27cc689756832a6ee3b34d6be875f716d9697df3e518ddaccdaad856.png"
            alt="logo"
            className="lg:w-[240px] md:w-[280px] sm:w-[240px] w-[200px]"
          />
        </Link>
      </div>
      <div
        className={`max-lg:fixed lg:mr-[10px] max-lg:top-0 max-lg:bottom-0 max-lg:overflow-auto max-lg:h-screen max-lg:left-0 max-lg:w-full max-lg:bg-[rgba(0,0,0,0.5)] z-10 ${!showNav && "max-lg:hidden"
          }`}
      >
        <ul className="lg:text-[18px] max-lg:text-[40px] max-md:text-[36px] max-sm:text-[28px] max-lg:font-bold max-lg:uppercase max-lg:mt-[120px] max-lg:pl-[25px] text-white flex lg:flex-row flex-col lg:items-center lg:gap-[20px] gap-[26px] max-lg:py-[26px] max-lg:bg-[#5c1112]  max-lg:w-[80%]">
          <li className={`${styles.dropdownParentLi}`}>
            <div onClick={() => setShowAbout(!showAbout)}>
              <span className="max-lg:mr-[355px] max-md:mr-[165px] max-sm:mr-[105px] ">
                About
              </span>
              <span className="lg:text-[40px] md:text-[36px] text-[28px] font-bold lg:hidden">
                {!showAbout ? "+" : "-"}
              </span>
            </div>

            <div
              className={`${styles.dropdownArrow} ${styles.dropdownWrapper} ${showAbout && styles.showDropdown
                }`}
            >
              <Link to="/the_issue">The Issue</Link>
              <Link to="/about_us">About Us</Link>
              <Link to="/our_impact">Our Impact</Link>
              <Link to="/our_team">Our Team</Link>
              <Link to="/cryptocurrency">Cryptocurrency</Link>
            </div>
          </li>
          <li className="min-[1100px]:block lg:hidden">
            <Link to="/afghanistan">Afghanistan</Link>
          </li>
          <li className="">
            <Link to="/kenya">Kenya</Link>
          </li>
          <li className="">
            <Link to="/stories">Stories</Link>
          </li>
          <li className={`${styles.dropdownParentLi}`}>
            <div onClick={() => setShowWork(!showWork)}>
              <span className="max-lg:mr-[240px] max-md:mr-[60px] max-sm:mr-[25px] ">
                What We Do
              </span>
              <span className="lg:text-[40px] md:text-[36px] text-[28px] font-bold lg:hidden">
                {!showWork ? "+" : "-"}
              </span>
            </div>
            <div
              className={`${styles.dropdownArrow} ${styles.dropdownWrapper}  ${showWork && styles.showDropdown
                }`}
            >
              <Link to="/original_reporting">Original Reporting</Link>
              <Link to="/advocacy">Advocacy</Link>
              <Link to="/education">Education</Link>
              <Link to="/emergency_fund">Emergency Fund</Link>
              <Link to="/covid_19Relief">COVID-19 Relief</Link>
              <Link to="/us_programming">US Programming</Link>
              <Link to="/stephani_freid">Stephanie Freid</Link>
              <Link to="/us_girls_choice">Us Girls Choice</Link>
            </div>
          </li>
          <li className={`${styles.dropdownParentLi}`}>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              Get Involved
            </a>
            <div
              className={`${styles.dropdownArrow} ${styles.dropdownWrapper}`}
            >
              <Link to="/carrer">Careers</Link>
            </div>
          </li>
          <li className="min-[1255px]:block lg:hidden">
            <Link to="/latest_news">Latest News</Link>
          </li>
          <li className="min-[1255px]:block lg:hidden">
            <Link to="/contact">Contact</Link>
          </li>
          {!userName ?
            <button onClick={handleLogin} className=" border w-[180px] h-[51px] font-medium  uppercase leading-[2.8px]">
              Login
            </button>
            :
            <button className="border w-[180px] h-[51px] leading-[2.8px]">
              {userName.slice(0, 12) + ".."} <FontAwesomeIcon onClick={handleSignOut} icon={faArrowRightFromBracket}></FontAwesomeIcon>
            </button>
          }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
