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
  state = { isSearchBarOpen: false };

  openSearchBar(): void {
    const { isSearchBarOpen } = this.state;

    this.setState({ isSearchBarOpen: !isSearchBarOpen });
  }

  containerFunctions() {
    return {
      openSearchBar: this.openSearchBar.bind(this)
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
