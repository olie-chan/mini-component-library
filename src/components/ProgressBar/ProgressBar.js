/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const Wrapper = styled.div`
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  background-color: ${COLORS.transparentGray35};
  height: ${(props) => {
    switch (props.size) {
      case "small":
        return "8px";
      case "medium":
        return "12px";
      case "large":
        return "24px";
      default:
        return "8px";
    }
  }};
  border-radius: ${props => props.size === 'large' ? '8px' : '4px'};
  padding: ${(props) => props.size === "large" && "4px"};
`;

const Progress = styled.div`
  background-color: ${COLORS.primary};
  width: ${(props) => props.value}%;
  height: 100%;
  border-radius: 4px;
`;

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper role="progressbar" aria-valuenow={value} size={size}>
      <Progress value={value}></Progress>
    </Wrapper>
  );
};

export default ProgressBar;
