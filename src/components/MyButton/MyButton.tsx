import styled, { css } from "styled-components";
import { MyButtonProps } from "./MyButton.type";

// Define a reusable CSS snippet for disabled styles
const disabledStyles = css`
  opacity: 0.5; /* Reduce opacity to make it appear grayed out */
  pointer-events: none; /* Disable pointer events to make it not clickable or hoverable */
`;

const StyledButton = styled.button<MyButtonProps>`
  /* Define your button styles here */
  background-color: #007bff; /* Blue color */
  color: #fff; /* White text color */
  border: none;
  border-radius: 18px;
  font-size: 16px;
  cursor: pointer;

  /* Apply disabled styles if the button is disabled */
  ${(props) => props.disabled && disabledStyles}

  /* Hover effect */
  &:hover {
    /* Hover effect will not apply if the button is disabled */
    ${(props) => !props.disabled && `background-color: #28a745;`}
  }
`;

const MyButton = ({ disabled = false, label = "Button" }: MyButtonProps) => {
  return <StyledButton disabled={disabled}>{label}</StyledButton>;
};

export default MyButton;