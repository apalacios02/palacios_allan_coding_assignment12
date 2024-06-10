import styled, { css } from "styled-components";
import { ImgProps } from "./Img.type";

// Define a reusable CSS snippet for disabled styles
const disabledStyles = css`
  opacity: 0.5; /* Reduce opacity to make it appear grayed out */
  pointer-events: none; /* Disable pointer events to make it not clickable or hoverable */
`;

const StyledImg = styled.img<ImgProps>`
  /* Define your img styles here */
  width: 100px; /* Example width */
  height: auto; /* Example height */
  filter: grayscale(0%); /* Example filter */
  
  /* Apply disabled styles if the img is disabled */
  ${(props) => props.disabled && disabledStyles}

  /* Hover effect */
   &:hover {
    transform: scale(1.5); 
    cursor: pointer;
  }
`;

const Img = ({ disabled = false, src = "", alt = "Image" }: ImgProps) => {
  return <StyledImg src={src} alt={alt} disabled={disabled} />;
};

export default Img;