/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import {
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineArrowLeft,
} from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../style/svg/github-mark.svg";
import { Link } from "react-router-dom";
import { NavigationProvider } from "../../utils/navigationProvider";
import FormContainer from "../Form/Form.container";

/** @namespace Youtube/Component/Navbar/Component */
export class NavbarComponent extends PureComponent {

  render() {

    return (
      <div className="flex flex-row items-center justify-between h-[56px] px-4
                      items-center bg-yt-spec-base-background opacity-95 sticky top-0 z-50">
        <div className="flex gap-8 items-center text-2xl min-w-[170px]">
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
        <div className="flex items-center min-w-0 justify-center gap-5 ml-[25px]">
          <div className="min-w-0">
            <NavigationProvider Component={FormContainer} />
          </div>
          <div className="text-xl p-3 bg-zinc-900 rounded-full">
            <TiMicrophone />
          </div>
        </div>
        {/* for smaller devices hidden for now and move to form component*/}
        <div className="flex absolute left-0 z-[51] w-screen bg-yt-spec-base-background
                        items-center min-w-0 justify-center gap-5 hidden">
          <div className="text-xl bg-zinc-900 rounded-full min-w-0 pl-3 pr-2">
            <AiOutlineArrowLeft />
          </div>
          <div className="min-w-0">
            <form
            // onSubmit={}
            >
              <div className="flex bg-yt-spec-base-background items-center
                              h-10 px-4 pr-0 border border-[#303030] rounded-3xl">
                <div className="flex gap-4 items-center pr-5">
                  <div>
                    <AiOutlineSearch className="text-xl" />
                  </div>
                  <input
                    type="text"
                    className="bg-yt-spec-base-background w-full
                               focus:outline-none border-none"
                    placeholder="Search"
                    // value={}
                    // onChange={}
                  />

                  <AiOutlineClose
                    className="min-w-[15px]"
                    // onClick={}
                  />
                </div>
                <button
                  className="h-10 w-[64px] flex items-center justify-center
                             bg-zinc-800 border border-[#303030]"
                  style={{ borderRadius: "0 25px 25px 0" }}
                >
                  <AiOutlineSearch className="text-xl" />
                </button>
              </div>
            </form>
          </div>
          <div className="text-xl bg-zinc-900 rounded-full min-w-[20px] ml-2 mr-3">
            <TiMicrophone />
          </div>
        </div>
        <div className="flex gap-5 items-center text-xl min-w-[76px]">
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
