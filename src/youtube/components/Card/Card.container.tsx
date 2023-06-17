/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import CardComponent from "./Card.component";
import { HomePageVideos } from "../../store/types";

/** @namespace Component/Card/Container/mapStateToProps */
function mapStateToProps(state: any) {
  return {};
}

/** @namespace Component/Card/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: any) {
  return {};
}

export type InheritedCardProps = {
  data?: HomePageVideos;
  key?: string;
};

type State = {};

type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps> &
  InheritedCardProps;

/** @namespace Youtube/Component/Card/Container */
class CardContainer extends PureComponent<Props, State> {
  containerFunctions = {};

  containerProps() {
    const { data, key } = this.props;

    return {
      data,
      key,
    };
  }

  render() {
    return (
      <CardComponent {...this.containerProps()} {...this.containerFunctions} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
