import styled, { css } from "styled-components";
import { TextProps } from "./Text.type";

// Define a reusable CSS snippet for disabled styles
const disabledStyles = css`
  opacity: 0.5; /* Reduce opacity to make it appear grayed out */
  pointer-events: none; /* Disable pointer events to make it not clickable or hoverable */
`;

const StyledText = styled.p<TextProps>`
  /* Define your text styles here */
  font-size: 16px;
  color: blue; /* blue text color */

  /* Apply disabled styles if the text is disabled */
  ${(props) => props.disabled && disabledStyles}
`;

const Text = ({ disabled = false, content = "I am Text!" }: TextProps) => {
  return <StyledText disabled={disabled}>{content}</StyledText>;
};

export default Text;