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
            <div>
              <a href="">Home</a>
              <i className="fa-solid fa-chevron-down"></i>
              <div className="chiziq_hover"></div>
            </div>

            <ul className="ul2">
              <li>
                <a href="">
                  Home2 <span className="hot">Hot</span>
                </a>
              </li>
              <li>
                <a href="">Home3</a>
              </li>
              <li>
                <a href="">
                  Home4 <span className="new">New</span>
                </a>
              </li>
              <li>
                <a href="">Home5</a>
              </li>
            </ul>
          </li>

          <li>
            <div>
              <a href="">Politics</a>
              <i className="fa-solid fa-chevron-down"></i>
              <div className="chiziq_hover"></div>
            </div>
          </li>

          <li>
            <div>
              <a href="">Technology</a>
              <i className="fa-solid fa-chevron-down"></i>
              <div className="chiziq_hover"></div>
            </div>
          </li>
          <li>
            <div>
              <a href="">Posts</a>
              <i className="fa-solid fa-chevron-down"></i>
              <div className="chiziq_hover"></div>
            </div>

            <ul className="ul2 posts">
              <li>
                <a href="">
                  Post Layouts <span>Unlimited</span>
                </a>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                <a href="">Gallery Layouts</a>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                <a href="">Video Layouts</a>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                <a href="">Audio Layouts</a>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                <a href="">Post Sidebar</a>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                <a href="">
                  Review <span className="hot">Hot</span>
                </a>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                <a href="">
                  Content Features <span className="son"> 100+</span>
                </a>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                <a href="">
                  Multiple Authors
                  <span className="new"> New</span>
                </a>
              </li>
              <li>
                <a href="">
                  Break Page Selection
                  <span className="Hot">Hot</span>
                </a>
              </li>
              <li>
                <a href="">Table of Contents</a>
                <i className="fa-solid fa-chevron-right"></i>
              </li>
              <li>
                <a href="">
                  Auto Load Next Posts
                  <span className="new"> New</span>
                </a>
              </li>
              <li>
                <a href="">Reaction Post</a>
              </li>
              <li>
                <a href="">Sponsored Post</a>
              </li>
              <li>
                <a href="">Highlights/Key Points</a>
              </li>
            </ul>
          </li>

          <li>
            <div>
              <i class="fa-solid fa-bookmark"></i>
              <a href="">Bookmarks</a>
              <div className="chiziq_hover"></div>
            </div>
          </li>

          <li>
            <div>
              <a href="">Pages</a>
              <i className="fa-solid fa-chevron-down"></i>
              <div className="chiziq_hover"></div>
            </div>

            <ul className="ul2">
              <li>
                <a href="">Blog Index</a>
              </li>
              <li>
                <a href="">Contact US</a>
              </li>
              <li>
                <a href="">Search Page</a>
              </li>
              <li>
                <a href="">404 Page</a>
              </li>
              <li>
                <a href="">Customize Interests</a>
              </li>
            </ul>
          </li>

          <button>
            <i class="fa-solid fa-ellipsis-vertical"></i>
          </button>
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
