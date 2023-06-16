/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import PropTypes from "prop-types";
import NavbarContainer from "../../components/Navbar/Navbar.container";
import SidebarContainer from "../../components/Sidebar/Sidebar.container";
import CardContainer from "../../components/Card/Card.container";
import InfiniteScroll from "react-infinite-scroll-component";

type InheritedProps = {
  videos: any
}

/** @namespace Youtube/Component/Homepage/Component */
export class HomepageComponent extends PureComponent<InheritedProps> {
  render() {
    const {
      videos
    } = this.props;
  
    return (
      <div className="max-h-screen overflow-hidden">
        <div style={{ height: "7.5vh" }}>
          <NavbarContainer />
        </div>
        <div className="flex" style={{ height: "92.5vh" }}>
          <SidebarContainer />
        </div>
      </div>
    );
  }
}

export default HomepageComponent;
