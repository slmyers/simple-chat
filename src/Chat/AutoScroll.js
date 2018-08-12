import React, { Component } from "react"
// import { ADD_MESSAGE } from "../GraphQL/index";

export default class AutoScroll extends Component {
  ref = React.createRef();
  HACKY_DELAY = 60;

  scrollToBottom = () => {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      if(this.ref.current)  this.ref.current.scrollTop = -Number.MIN_SAFE_INTEGER;
    }, this.HACKY_DELAY)
  };

  render() {
    return this.props.children(this.ref, this.scrollToBottom)
  }
}