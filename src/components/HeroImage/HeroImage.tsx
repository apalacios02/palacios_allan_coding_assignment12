import styled, { css } from "styled-components";
import { HeroImageProps } from "./HeroImage.type";

// Define a reusable CSS snippet for disabled styles
const disabledStyles = css`
  opacity: 0.5; /* Reduce opacity to make it appear grayed out */
  pointer-events: none; /* Disable pointer events to make it not clickable or hoverable */
`;

const StyledHeroImage = styled.img<HeroImageProps>`
  /* Define your HeroImage styles here */
  width: 100%; /* Example width */
  height: auto; /* Example height */
  filter: grayscale(0%); /* Example filter */
  
  /* Apply disabled styles if the HeroImage is disabled */
  ${(props) => props.disabled && disabledStyles}

  /* Hover effect */
  &:hover {
    transform: scale(1.2); /* Enlarge the image by 50% on hover */
    cursor: pointer; /* Change cursor to pointer on hover */
  }
`;

const HeroImage = ({ disabled = false, src = "", alt = "Hero Image" }: HeroImageProps) => {
  return <StyledHeroImage src={src} alt={alt} disabled={disabled} />;
};

export default HeroImage;