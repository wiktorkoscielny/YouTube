/*
 * @category  Youtube
 * @author    Wiktor Koscielny <wiktorkoscielny@gmail.com>
 */

import { PureComponent } from "react";
import CardComponent from "./Card.component";
import { Props } from "./types";

/** @namespace Youtube/Component/Card/Container */
class CardContainer extends PureComponent<Props> {
  containerFunctions = {};

  containerProps() {
    const { data, isSearchPage } = this.props;

    return {
      data,
      isSearchPage,
    };
  }

  render() {
    return (
      <CardComponent {...this.containerProps()} {...this.containerFunctions} />
    );
  }
}

export default CardContainer;
