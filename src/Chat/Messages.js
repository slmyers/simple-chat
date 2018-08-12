import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import logo from '../logo.svg';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { Mutation, Query } from 'react-apollo';
import AutoScroll from "./AutoScroll"
import Button from '@material-ui/core/Button';
import { GET_MESSAGES, ADD_MESSAGE } from "../GraphQL"
import { ApolloProvider } from 'react-apollo';
import { client } from "../State"
import classes from "./classes"
@withStyles(classes)
export default class extends Component {

  state = { draft: "" };

  handleChange = ({ target: { value }}) => this.setState({ draft: value });

  renderIncoming = (ref, animateScroll, classes=this.props.classes) => {
    return (
      <ApolloProvider client={client}>
        <div className={classes.incoming} ref={ref}>
          <Query query={GET_MESSAGES} onCompleted={() => animateScroll(ref)}>
            {({data: { messages }, data}) => (
              <div style={{height: "90%", width: "90%"}}>
                {messages.map( ({ author, content, id }, index) => (
                  <ListItem key={id} className={classes.message}>
                    <Avatar alt="Random Image" src={logo} />
                    <ListItemText primary={content} />
                  </ListItem>
                ))}
              </div>
            )}
          </Query>
        </div>
      </ApolloProvider>
    )
  };

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
            margin="normal"
            value={this.state.draft}
          />
          <Button type={"submit"}>Send</Button>
        </form>
      )}
    </Mutation>
  );

  render() {
    const { classes: { root } } = this.props;
    return (
      <section className={root}>
        <AutoScroll>
          {(ref, scrollToBottom) => this.renderIncoming(ref, scrollToBottom)}
        </AutoScroll>
        {this.renderOutgoing()}
      </section>
    )
  }
}