/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import NavbarComponent from "./Navbar.component";
import { toggleSidebarState } from "../../store";
import { AppDispatch, RootState } from "../../store";
import { ContainerState } from "./types";

/** @namespace Component/Navbar/Container/mapStateToProps */
function mapStateToProps(state: RootState) {
  const { youtubeApp } = state;

  return {
    isMobile: youtubeApp.isMobile,
  };
}

/** @namespace Component/Navbar/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    toggleSidebarState: () => dispatch(toggleSidebarState()),
  };
}

export type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps> & ContainerState;

/** @namespace Youtube/Component/Navbar/Container */
class NavbarContainer extends PureComponent<Props> {
  state: ContainerState = { isSearchBarOpen: false };

  openSearchBar(): void {
    const { isSearchBarOpen } = this.state;

    this.setState({ isSearchBarOpen: !isSearchBarOpen });
  }

  containerFunctions() {
    return {
      openSearchBar: this.openSearchBar.bind(this),
    };
  }

  containerProps() {
    const { toggleSidebarState, isMobile } = this.props;
    const { isSearchBarOpen } = this.state;

    return { toggleSidebarState, isMobile, isSearchBarOpen };
  }

  render() {
    return (
      <NavbarComponent
        {...this.containerProps()}
        {...this.containerFunctions()}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
