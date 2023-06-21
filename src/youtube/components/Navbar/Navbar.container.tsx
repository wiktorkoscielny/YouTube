/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import NavbarComponent from "./Navbar.component";
import { clearVideos, changeSearchParams } from "../../store";
import { getSearchPageVideos } from "../../store/reducers/getSearchPageVideos";

/** @namespace Component/Navbar/Container/mapStateToProps */
function mapStateToProps(state: any) {
  return {
    searchParams: state.youtubeApp.searchParams,
  };
}

/** @namespace Component/Navbar/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: any) {
  return {
    getSearchPageVideos: (payload: boolean) =>
      dispatch(getSearchPageVideos(payload)),
    clearVideosData: () => dispatch(clearVideos()),
    changeSearchParams: (payload: any) => dispatch(changeSearchParams(payload)),
  };
}

export type State = {};

export type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

/** @namespace Youtube/Component/Navbar/Container */
class NavbarContainer extends PureComponent<Props, State> {
  containerFunctions = {};

  containerProps() {
    const {
      getSearchPageVideos,
      clearVideosData,
      searchParams,
      changeSearchParams,
    } = this.props;

    return {
      getSearchPageVideos,
      clearVideosData,
      searchParams,
      changeSearchParams,
    };
  }

  render() {
    return (
      <NavbarComponent
        {...this.containerProps()}
        {...this.containerFunctions}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
