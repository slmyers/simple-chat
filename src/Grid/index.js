import React, { Component } from "react";
import styled from 'styled-components';
import { Grid, Row, Cell } from "./Grid";

const FullCell = styled.div`
  width: 100%;
  height: 100%;
  background-color: pink
`;

export default class Chat extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Cell>
            <FullCell>HI</FullCell>
          </Cell>
          <Cell>
            <FullCell>HI</FullCell>
          </Cell>
          <Cell>
            <FullCell>HI</FullCell>
          </Cell>
        </Row>
      </Grid>
    )
  }
}