/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { AiOutlineSearch, AiOutlineArrowLeft } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../style/svg/github-mark.svg";
import { Link } from "react-router-dom";
import { NavigationProvider } from "../../utils/NavigationProvider/navigationProvider";
import FormContainer from "../Form/Form.container";
import { Props } from "./Navbar.container";
import { ContainerFunctions } from "./types";

type CombinedProps = Props & ContainerFunctions;

/** @namespace Youtube/Component/Navbar/Component */
export class NavbarComponent extends PureComponent<CombinedProps> {
  render() {
    const { toggleSidebarState, openSearchBar, isSearchBarOpen, isMobile } =
      this.props;

    return (
      <div
        className="flex flex-row items-center justify-between h-[56px] px-4
                      items-center bg-yt-spec-base-background opacity-95 sticky top-0 z-50"
      >
        <div
          className="flex gap-8 items-center text-2xl min-w-[170px]
                        flex-1 md:flex-none justify-between md:justify-normal"
        >
          <div onClick={() => toggleSidebarState()} className="cursor-pointer">
            {!isMobile ? (
              <GiHamburgerMenu />
            ) : (
              <GiHamburgerMenu className="text-2xl" />
            )}
          </div>
          <Link to="/">
            <div className="flex gap-1 items-center justify-center">
              <BsYoutube className="text-4xl md:text-3xl text-red-600" />
              <span className="text-xl font-medium">YouTube</span>
            </div>
          </Link>
          <div className="md:hidden" onClick={() => openSearchBar()}>
            <AiOutlineSearch className="text-2xl" />
          </div>
        </div>
        <div className="hidden md:flex items-center min-w-0 justify-center gap-5 ml-[25px]">
          <div className="min-w-0">
            <NavigationProvider Component={FormContainer} />
          </div>
          <div className="text-xl p-3 bg-zinc-900 rounded-full">
            <TiMicrophone />
          </div>
        </div>
        {isSearchBarOpen && (
          <div
            className="flex absolute left-0 z-[51] w-screen bg-yt-spec-base-background
                       items-center min-w-0 justify-center gap-5 md:hidden"
          >
            <div
              onClick={() => openSearchBar()}
              className="text-xl bg-zinc-900 rounded-full min-w-0 pl-2 pr-2 pt-2 pb-2"
            >
              <AiOutlineArrowLeft className="text-xl" />
            </div>
            <div className="min-w-0">
              <NavigationProvider Component={FormContainer} />
            </div>
            <div className="text-xl bg-zinc-900 rounded-full min-w-[20px] ml-2 mr-3">
              <TiMicrophone className="text-2xl" />
            </div>
          </div>
        )}
        <div className="hidden md:flex gap-5 items-center text-xl min-w-[76px]">
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
