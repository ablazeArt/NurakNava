import { useState } from "react";
import "./Navbar.css";
import NavbarBrand from "./NavbarBrand.png";
import { HashLink } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faHouse, faBuilding, faUser, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false);
  const navbarToggle = () => {
    setIsNavbarActive((current) => !current);
  };
  return (
    <div className="navbar-relative">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <HashLink className="navbar-brand" smooth to={"/#"}>
            <img src={NavbarBrand}></img>
          </HashLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <HashLink className="nav-link" smooth to={"/#"}>
                  <FontAwesomeIcon icon={faHouse as IconProp} className="icon-navbar" />
                  รู้จักเรา
                </HashLink>
              </li>
              <li className="nav-item dropdown">
                <HashLink className="nav-link dropdown-toggle" smooth to={"/about"} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FontAwesomeIcon icon={faBuilding as IconProp} className="icon-navbar" />
                  ห้องพัก
                </HashLink>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <HashLink className="dropdown-item" smooth to={"/#fan-room"}>
                      ห้องพัดลม
                    </HashLink>
                  </li>
                  <li>
                    <HashLink className="dropdown-item" smooth to={"/#air-conditioned-room"}>
                      ห้องปรับอากาศ
                    </HashLink>
                  </li>
                  <li>
                    <HashLink className="dropdown-item" smooth to={"/#bath-room"}>
                      ห้องน้ำ
                    </HashLink>
                  </li>
                  <li>
                    <HashLink className="dropdown-item" smooth to={"/#balcony"}>
                      ระเบียง
                    </HashLink>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to={"/price#"}>
                  <FontAwesomeIcon icon={faBuilding as IconProp} className="icon-navbar" />
                  ราคา
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to={"/service#"}>
                  <FontAwesomeIcon icon={faUser as IconProp} className="icon-navbar" />
                  บริการ
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to={"/location#"}>
                  <FontAwesomeIcon icon={faLocationDot as IconProp} className="icon-navbar" />
                  ที่อยู่
                </HashLink>
              </li>
              <li className="nav-item contact">
                <HashLink className="nav-link" smooth to={"/contact#"}>
                  <FontAwesomeIcon icon={faPhone as IconProp} className="icon-navbar" />
                  ติดต่อเรา
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
