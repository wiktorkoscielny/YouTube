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

type Props = {
  sidebarState: boolean;
  toggleSidebarState: () => void;
} 

/** @namespace Youtube/Component/Sidebar/Container */
class SidebarContainer extends PureComponent<Props> {

  handleResize = () => {
    const {sidebarState, toggleSidebarState } = this.props;
    if (window.innerWidth < 768 && sidebarState) {
      toggleSidebarState();
    };
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
