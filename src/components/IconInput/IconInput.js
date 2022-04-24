import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    iconStrokeWidth: 1,
    iconSize: 16,
    fontSize: 14 / 16,
  },
  large: {
    iconStrokeWidth: 2,
    iconSize: 24,
    fontSize: 18 / 16,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size: ${size}`);
  }

  return (
    <Wrapper>
      <VisuallyHidden>
        <label>{label}</label>
      </VisuallyHidden>
      <IconWrapper style={{ "--size": styles.iconSize + "px" }}>
        <Icon id={icon} size={styles.iconSize} strokeWidth={styles.iconStrokeWidth}/>
      </IconWrapper>
      <Input
        style={{
          "--fontSize": styles.fontSize + "rem",
          "--width": width + "px",
        }}
        placeholder={placeholder}
        size={size}
      />
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  height: var(--size);
  pointer-events: none;
  margin: auto;
`;
const Wrapper = styled.div`
  position: relative;

  ${IconWrapper} {
    color: ${COLORS.gray500};
  }
  &:hover ${IconWrapper} {
    color: black;
  }
`;
const Input = styled.input`
  font-weight: 700;
  font-size: var(--fontSize);
  padding: ${(props) =>
    props.size === "large" ? "8px 12px 7px 36px" : "4px 8px 4px 24px"};
  border: none;
  border-bottom: ${(props) => (props.size === "large" ? 2 : 1)}px solid black;
  width: var(--width);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray400};
  }
`;
export default IconInput;
