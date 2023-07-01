/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import SidebarComponent from "./Sidebar.component";
import { toggleSidebarState } from "../../store";

/** @namespace Component/Sidebar/Container/mapStateToProps */
function mapStateToProps(state: any) {
  return {
    sidebarState: state.youtubeApp.isSidebarOpen
  };
}

/** @namespace Component/Sidebar/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: any) {
  return {
    toggleSidebarState: () => dispatch(toggleSidebarState())
  };
}

export type Props = {
  sidebarState: boolean;
}

/** @namespace Youtube/Component/Sidebar/Container */
class SidebarContainer extends PureComponent<Props> {

  containerProps() {
    const {
      sidebarState
    } = this.props;

    return {
      sidebarState
    };
  }

  render() {
    return (
      <SidebarComponent
        {...this.containerProps()}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SidebarContainer);
