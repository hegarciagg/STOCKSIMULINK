import { useEffect, useRef } from "react";
import logo from "../../assets/Images/logo_2.png";
import userImage from "../../assets/images/hector2.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const navLinks = [
  {
    name: "Inicio",
    path: "/home",
  },
  {
    name: "Login",
    path: "/Login",
  },
  {
    name: "Portafolio",
    path: "/portfolio",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

const Header = () => {
  /*Codigo hamburguesa*/

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  /*AQUI TERMINA EL CODIGO HAMBURGUESA*/
  /* en el header coloco el código de referencia para el codigo hamburguesa */
  return (
    <header className="header flex items-center" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-beetween">
          {/*====LOGO====*/}
          <div>
            <img
              className="w-32 h-32  rounded-full py-3 px-3"
              src={logo}
              alt="Logo Hector E Garcia"
            />
          </div>
          {/*===MENU===*/}
          <nav
            className="navigation py-3 px-3"
            ref={menuRef}
            onClick={toggleMenu}
          >
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "colorBorder_reviews text-[16px] leading-7 font-[600] hover: colorPrincipal"
                        : "colorText text-[16px] leading-7 font-[500] hover: colorPrincipal"
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          {/*===MENU DERECHA===*/}
          <nav className="flex items-center gap-5 py-8 px-8">
            <div>
              <Link to="/">
                <figure className="w-16 h-16 rounded-full cursor-pointer">
                  <img src={userImage} className="w-full rounded-full" alt="" />
                </figure>
              </Link>
            </div>

            <Link to="/login">
              <button className="bg-[#101220] py-2 px-6 w-[46px] h-[20px] rounded-full flex items-center justify-center">
                Login
              </button>
            </Link>
            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
