/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import SidebarComponent from "./Sidebar.component";
import { toggleSidebarState, toggleDeviceDimension } from "../../store";
import { MOBILE_BREAKPOINT } from "./Sidebar.config";
import { Dispatch } from "redux";

/** @namespace Component/Sidebar/Container/mapStateToProps */
function mapStateToProps(state: any) {
  return {
    sidebarState: state.youtubeApp.isSidebarOpen,
    isMobile: state.youtubeApp.isMobile
  };
}

/** @namespace Component/Sidebar/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    toggleSidebarState: () => dispatch(toggleSidebarState()),
    toggleDeviceDimension: (payload: boolean) => dispatch(toggleDeviceDimension(payload))
  };
}

type Props = {
  sidebarState: boolean;
  toggleSidebarState: () => void;
  toggleDeviceDimension: (arg: boolean) => void;
  isMobile: boolean;
}

/** @namespace Youtube/Component/Sidebar/Container */
class SidebarContainer extends PureComponent<Props> {
  state = { isMobile: false };

  handleResize = () => {
    const {sidebarState, toggleSidebarState, toggleDeviceDimension } = this.props;

    if (window.innerWidth < MOBILE_BREAKPOINT && sidebarState) {
      toggleSidebarState();
    };

    if (window.innerWidth < MOBILE_BREAKPOINT ) {
      toggleDeviceDimension(true);
    } else {
      toggleDeviceDimension(false);
    }
  };

  componentDidMount(): void {
    const { handleResize } = this;

    window.addEventListener('resize', handleResize);
  }

  componentWillUnmount(): void {
    const { handleResize } = this;

    window.removeEventListener('resize', handleResize)
  }

  containerProps() {
    const {
      sidebarState,
      isMobile
    } = this.props;

    return {
      sidebarState,
      isMobile
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
