/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import CardComponent from "./Card.component";

/** @namespace Component/Card/Container/mapStateToProps */
function mapStateToProps(state: any) {
  return {};
}

/** @namespace Component/Card/Container/mapDispatchToProps */
function mapDispatchToProps(dispatch: any) {
  return {};
}

type State = {};

type Props = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

/** @namespace Youtube/Component/Card/Container */
class CardContainer extends PureComponent<Props, State> {
  static propTypes = {};

  state: State = {};

  static defaultProps = {};

  containerFunctions = {};

  containerProps() {
    const {} = this.props;

    return {};
  }

  render() {
    return (
      <CardComponent
        {...this.containerProps()}
        {...this.containerFunctions}
      />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);
