import React from "react";
import "./Header.scss";
import Logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={Logo} alt="" />

        <ul>
          <li>

            <a href="">Home</a>
            <i className="fa-solid fa-chevron-down"></i>
            <div className="chiziq_hover"></div>

          </li>
          <li>

            <a href="">Politics</a>
            <i className="fa-solid fa-chevron-down"></i>
            <div className="chiziq_hover"></div>

          </li>
          <li>

            <a href="">Technology</a>
            <i className="fa-solid fa-chevron-down"></i>
            <div className="chiziq_hover"></div>

          </li>
          <li>

            <a href="">Posts</a>
            <i className="fa-solid fa-chevron-down"></i>
            <div className="chiziq_hover"></div>

          </li>
          <li>

            <i class="fa-solid fa-bookmark"></i>
            <a href="">Bookmarks</a>
            <div className="chiziq_hover"></div>

          </li>
          <li>

            <a href="">Pages</a>
            <i className="fa-solid fa-chevron-down"></i>
            <div className="chiziq_hover"></div>

          </li>
          <button><i class="fa-solid fa-ellipsis-vertical"></i></button>
        </ul>
      </div>

      <div className="header__right">
        <a href="">Sign in</a>
        
        <button>
          <i className="fa-regular fa-bell"></i>
          <div className="notif"></div>
        </button>
        <i className=""></i>
      </div>
    </div>
  );
};

export default Header;
