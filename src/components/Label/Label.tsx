import styled, { css } from "styled-components";
import { LabelProps } from "./Label.type";

// Define a reusable CSS snippet for disabled styles
const disabledStyles = css`
  opacity: 0.5; /* Reduce opacity to make it appear grayed out */
  pointer-events: none; /* Disable pointer events to make it not clickable or hoverable */
`;

const StyledLabel = styled.label<LabelProps>`
  /* Define your label styles here */
  font-size: 16px;
  color: green; /* green text color */

  /* Apply disabled styles if the label is disabled */
  ${(props) => props.disabled && disabledStyles}

  /* Hover effect */
  &:hover {
    color: blue; /* Change color to blue on hover */
    cursor: pointer; /* Change cursor to pointer on hover */
  }
`;

const Label = ({ disabled = false, content = "I am Label!" }: LabelProps) => {
  return <StyledLabel disabled={disabled}>{content}</StyledLabel>;
};

export default Label;