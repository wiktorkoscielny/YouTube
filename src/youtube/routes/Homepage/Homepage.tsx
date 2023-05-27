/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import PropTypes from "prop-types";
import NavbarContainer from "../../components/Navbar/Navbar.container";
import SidebarContainer from "../../components/Sidebar/Sidebar.container";

/** @namespace Component/Homepage/Component/mapStateToProps */
function mapStateToProps(state: any) {
  return {};
}

/** @namespace Component/Homepage/Component/mapDispatchToProps */
function mapDispatchToProps(dispatch: any) {
  return {};
}

/** @namespace Youtube/Component/Homepage/Component */
export class HomepageComponent extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  render() {
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
