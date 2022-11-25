import React from "react";
import { ClickCounter } from "./ClickCounter";

export class Counter extends React.Component {
  render() {
    return (
      <div>
        <ClickCounter counter={this.props.count} />
      </div>
    );
  }
}
