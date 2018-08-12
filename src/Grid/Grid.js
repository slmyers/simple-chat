import React from "react";
import styled from 'styled-components';
import "./Grid.css"

const Styles = {
  Cell: styled.div`
    background-color: purple;
  `,
  Grid: styled.div`
    min-height: 60vh;
    overflow-y: auto;
    overflow-x: hidden;
    width: 70vw;
    margin: 0 auto;
  `

};

export const Grid = ({ children }) => <Styles.Grid className={"mdc-layout-grid"}> {children}</Styles.Grid>;

export const Row = ({ children }) => (
  <Styles.Grid className={"mdc-layout-grid__inner"}>
    {children}
  </Styles.Grid>
);
export const Cell = ({ children }) => {
  React.Children.only(children);

  return (
    <Styles.Cell className = {"mdc-layout-grid__cell"}>
      {children}
    </Styles.Cell>
  )
};