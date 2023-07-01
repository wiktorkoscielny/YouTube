/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import NavbarComponent from "./Navbar.component";
import { toggleSidebarState } from "../../store";
import { Dispatch } from 'redux'

/** @namespace Component/Navbar/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    toggleSidebarState: () => dispatch(toggleSidebarState())
  };
}

export type Props = ReturnType<typeof mapDispatchToProps>;

/** @namespace Youtube/Component/Navbar/Container */
class NavbarContainer extends PureComponent<Props> {
  containerProps() {
    const { toggleSidebarState } = this.props;

    return { toggleSidebarState };
  }

  render() {
    return (
      <NavbarComponent
        {...this.containerProps()}
      />
    );
  }
}

export default connect(null, mapDispatchToProps)(NavbarContainer);
