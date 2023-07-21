/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import NavbarComponent from "./Navbar.component";
import { toggleSidebarState } from "../../store";
import { Dispatch } from 'redux';

/** @namespace Component/Navbar/Container/mapStateToProps */
function mapStateToProps(state: any) {
  const { youtubeApp } = state;

  return {
    isMobile: youtubeApp.isMobile
  };
}

/** @namespace Component/Navbar/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    toggleSidebarState: () => dispatch(toggleSidebarState())
  };
}

export type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

/** @namespace Youtube/Component/Navbar/Container */
class NavbarContainer extends PureComponent<Props> {
  containerProps() {
    const { toggleSidebarState, isMobile } = this.props;

    return { toggleSidebarState, isMobile };
  }

  render() {
    return (
      <NavbarComponent
        {...this.containerProps()}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
