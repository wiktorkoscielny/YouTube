/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import FormComponent from "./Form.component";
import { getSearchPageVideos } from "../../store/reducers/getSearchPageVideos";
import { changeSearchParams, clearVideos } from "../../store";
import { clearSearchParams } from "../../store";
import { AppDispatch } from "../../store";
import { RootState } from "../../store";

/** @namespace Component/Form/Container/mapStateToProps */
function mapStateToProps(state: RootState) {
  return {
    searchParams: state.youtubeApp.searchParams,
  };
}

/** @namespace Component/Form/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: AppDispatch) {
  return {
    getSearchPageVideos: (payload: boolean) =>
      dispatch(getSearchPageVideos(payload)),
    clearVideosData: () => dispatch(clearVideos()),
    changeSearchParams: (payload: any) => dispatch(changeSearchParams(payload)),
    clearSearchParams: () => dispatch(clearSearchParams()),
  };
}

type InheritedProps = {
  navigation: any;
  location: any;
  paramsKey?: string;
};

type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps> &
  InheritedProps;

/** @namespace Youtube/Component/Form/Container */
class FormContainer extends PureComponent<Props> {
  containerProps() {
    const {
      navigation,
      location,
      searchParams,
      getSearchPageVideos,
      clearVideosData,
      changeSearchParams,
      clearSearchParams,
    } = this.props;

    return {
      navigation,
      location,
      searchParams,
      getSearchPageVideos,
      clearVideosData,
      changeSearchParams,
      clearSearchParams,
    };
  }

  render() {
    return <FormComponent {...this.containerProps()} />;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);
