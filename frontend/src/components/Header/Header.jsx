import { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.png";
import userImg from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/explore",
    display: "Explore",
  },
  {
    path: "/insights",
    display: "Insights",
  },
  {
    path: "/about",
    display: "About Us",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [stickyHeader, setStickyHeader] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleStickyHeader = () => {
    if (window.scrollY > 80) {
      setStickyHeader(true);
      clearTimeout(timeoutId);
      const id = setTimeout(() => {
        setStickyHeader(false);
        window.scrollTo(0, 0); 
      }, 1000);
      setTimeoutId(id);
    } else {
      setStickyHeader(false);
      clearTimeout(timeoutId);
    }
  };
  

  useEffect(() => {
    let animationFrameId;
    const handleScroll = () => {
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(() => {
          handleStickyHeader();
          animationFrameId = null;
        });
      }
    };

    const handleMouseEnter = () => {
      clearTimeout(timeoutId);
    };

    const handleMouseLeave = () => {
      const id = setTimeout(() => {
        setStickyHeader(false);
      }, 5000);
      setTimeoutId(id);
    };

    window.addEventListener("scroll", handleScroll);
    headerRef.current.addEventListener("mouseenter", handleMouseEnter);
    headerRef.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      headerRef.current.removeEventListener("mouseenter", handleMouseEnter);
      headerRef.current.removeEventListener("mouseleave", handleMouseLeave);
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const smoothScroll = (path) => {
    const target = document.querySelector(`#${path}`);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest", // This will ensure that the target element is centered vertically
      });
    }
  };

  return (
    <header
      className={`header flex items-center ${
        stickyHeader ? "sticky__header" : ""
      }`}
      ref={headerRef}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/*===== logo =====*/}
          <div className="my-3">
            <Link to="/home" onClick={() => window.scrollTo(0, 0)}>
              <img
                src={logo}
                alt="Logo"
                style={{ width: "50px", height: "60px" }}
              />
            </Link>
          </div>

          {/* ========== menu ==========*/}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem] ">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    onClick={() => {
                      smoothScroll(link.path.substr(1));
                    }}
                    isActive={(match, location) => {
                      if (link.path === "/home") {
                        return location.pathname === "/";
                      }
                      return location.pathname.includes(link.path);
                    }}
                    className="text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ========== nav right ==========*/}
          <div className="flex items-center gap-4">
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img src={userImg} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>

            <Link to="/insights">
              <button className="py-2 px-6 text-primaryColor font-[600] h-[44px] flex items-center justify-center rounded-[50px] border border-solid border-primaryColor  hover:bg-primaryColor hover:text-white ">
                Join our Waitlist
              </button>
            </Link>

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;