import React from "react";
import styled from 'styled-components';
import "@material/layout-grid/dist/mdc.layout-grid.min.css"

const Styles = {
  Cell: styled.div`
    background-color: purple;
  `
};

export const Grid = ({ children, className }) => (
  <styled className={"mdc-layout-grid"}>
    {React.Children.map(children, child => (
      <Styles.Cell>
        {child}
      </Styles.Cell>
    ))}
  </styled>
);

export const Row = ({ children }) => (
  <div className={"mdc-layout-grid__inner"}>
    {children}
  </div>
);
export const Cell = ({ children }) => {
  React.Children.only(children);

  return (
    <div className = {"mdc-layout-grid__cell"}>
      {children}
    </div>
  )
};