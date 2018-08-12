import React, { Component } from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import logo from '../logo.svg';
import Drawer from '@material-ui/core/Drawer';

export default class Sidebar extends Component {

  state = {  };

  componentDidMount(){
    this.matchMedia();
    window.addEventListener("resize", this.matchMedia);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.matchMedia);
  }

  matchMedia = () => this.setState({ smallScreen: window.matchMedia("(max-width:800px)").matches });

  renderList = () => (
    <List style={{
      borderRight: this.state.smallScreen ? undefined : "solid 1px lightgrey",
      height: "100%"
    }}>
      {[0, 1, 2, 3].map(value => (
        <ListItem key={value} button>
          <Avatar alt="Remy Sharp" src={logo} />
          <ListItemText primary={`Line item ${value + 1}`} />
        </ListItem>
      ))}
    </List>
  );

  render() {
    return (
      <div className={"side-bar"} ref={node => this.node = node}>
        {this.state && this.state.smallScreen ? (
          <Drawer open={this.props.open} onClose={this.props.onSidebarClose}>
            {this.renderList()}
          </Drawer>
        ) : this.renderList()}
      </div>


    )
  }
}