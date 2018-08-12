import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import AutoScroll from "./AutoScroll"
import Button from '@material-ui/core/Button';
import classes from "./classes"
import IncomingMessages from "./IncomingMessage"
import { ADD_MESSAGE } from "../GraphQL"
import { Mutation } from 'react-apollo';
@withStyles(classes)
export default class extends Component {

  state = { draft: "" };

  handleChange = ({ target: { value }}) => this.setState({ draft: value });

  renderOutgoing = (classes=this.props.classes, handleChange=this.handleChange) => (
    <Mutation mutation={ADD_MESSAGE}
              variables={{ author: "YOU", content: this.state.draft }}
              onCompleted={() => this.setState({ draft: "" })}>
      {addMessage => (
        <form
          className={classes.outgoing}
          onSubmit={(event) => {
            event.preventDefault();
            if (this.state.draft) {
              addMessage()
            }
          }}>
          <TextField
            style={{flex: 1}}
            placeholder="Type a message."
            onChange={handleChange}
            value={this.state.draft}
          />
          <Button type={"submit"}>Send</Button>
        </form>
      )}
    </Mutation>
  );

  render() {
    const { classes: { root }, classes } = this.props;
    return (
      <section className={root}>
        <AutoScroll>
          {(scrollRef, animateScroll) => (
            <IncomingMessages scrollRef={scrollRef} animateScroll={animateScroll} classes={classes} />
          )}
        </AutoScroll>
        {this.renderOutgoing()}
      </section>
    )
  }
}