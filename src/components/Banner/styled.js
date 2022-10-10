import styled from "styled-components";
import Mobilebg from "../../Assets/images/bg-intro-mobile.svg";
import Desktopbg from "../../Assets/images/bg-intro-desktop.svg";

export const BannerWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  background-color: ${({ theme }) => theme.Colors.VeryLightGray};
  background-image: url(${Desktopbg});
  background-repeat: no-repeat;
  background-size: 1100px;
  background-position-x: 550px;
  background-position-y: -190px;
`;
export const BannerContentWrapper = styled.div` 
  display: flex;
  flex-direction: column;
  padding: 10rem 0rem;
  gap: 20px;

  h1 {
    font-weight: ${({ theme }) => theme.fontBold};
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    color: ${({ theme }) => theme.Colors.DarkBlue};

  }

  p {
    padding-right: 9rem;
    color: ${({ theme }) => theme.Colors.GrayishBlue};
  
  }

  button {
    align-self: flex-start;
  }
`;
export const BannerGraphicsWrapper = styled.div`
  position: relative;
  img {
    max-width: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
