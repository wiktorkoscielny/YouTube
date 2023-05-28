/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import PropTypes from "prop-types";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../style/svg/github-mark.svg";
import { Link } from "react-router-dom";

/** @namespace Youtube/Component/Navbar/Component */
export class NavbarComponent extends PureComponent {
  static propTypes = {};

  state = {};

  render() {
    return (
      <div className="flex flex-row items-center justify-between h-[56px] px-4 items-center bg-yt-spec-base-background opacity-95 sticky top-0 z-50">
        <div className="flex gap-8 items-center text-2xl">
          <div>
            <GiHamburgerMenu />
          </div>
          <Link to="/">
            <div className="flex gap-1 items-center justify-center">
              <BsYoutube className="text-3xl text-red-600" />
              <span className="text-xl font-medium">YouTube</span>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center gap-5">
          <div>
            <form
            // onSubmit={}
            >
              <div className="flex bg-yt-spec-base-background items-center h-10 px-4 pr-0 border border-[#303030] rounded-3xl">
                <div className="flex gap-4 items-center pr-5">
                  <div>
                    <AiOutlineSearch className="text-xl" />
                  </div>
                  <input
                    type="text"
                    className="bg-yt-spec-base-background focus:outline-none border-none"
                    placeholder="Search"
                    // value={}
                    // onChange={}
                  />

                  <AiOutlineClose
                    className=""
                    // onClick={}
                  />
                </div>
                <button
                  className="h-10 flex items-center justify-center bg-zinc-800 border border-[#303030]"
                  style={{ borderRadius: "0 25px 25px 0" }}
                >
                  <AiOutlineSearch className="text-xl" />
                </button>
              </div>
            </form>
          </div>
          <div className="text-xl p-3 bg-zinc-900 rounded-full">
            <TiMicrophone />
          </div>
        </div>
        <div className="flex gap-5 items-center text-xl">
          <div className="relative">
            <BsBell />
            <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
              1+
            </span>
          </div>
          <div>
            <img src={Logo} className="w-9 h-9" />
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarComponent;
