import React, { Component } from "react"
import logo from '../logo.svg';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { GET_MESSAGES } from "../GraphQL"
import { Query } from 'react-apollo';

export default class extends Component {
  render(){
    const { classes, scrollRef, animateScroll } = this.props;
    return (
      <div className={classes.incoming} ref={scrollRef}>
        <Query query={GET_MESSAGES} onCompleted={() => animateScroll(scrollRef)}>
          {({data: { messages } }) => (
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
    )
  }
}
