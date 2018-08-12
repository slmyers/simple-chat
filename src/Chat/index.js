import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Messages from "./Messages"

@withStyles(theme => ({
  root: {
    width: "75vw",
    maxHeight: "70vh",
    margin: "2vh auto 0 auto",
    display: "flex",
    ['@media (min-width: 800px) and (max-width:1200px)']: {
      width: "90vw",
      maxHeight: "70vh",
    },
    ['@media (max-width:800px)']: {
      width: "95vw",
      maxHeight: "65vh",
    },
  }
}))
export default class Chat extends Component {
  render(){
    const { classes: { root }  } = this.props;


    return(
      <Paper className={root}>
        {/*<Sidebar open={sidebarOpen} onSidebarClose={onSidebarClose}/>*/}
        <Messages />
      </Paper>
    )
  }
}