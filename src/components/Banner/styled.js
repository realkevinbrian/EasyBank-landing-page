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

  @media (max-width: 375px) {
    padding: 0;
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    background-color: ${({ theme }) => theme.Colors.VeryLightGray};
    background-image: initial;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding-bottom: 4rem;
  }
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

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    padding: 0rem;
    gap: 20px;
    place-content: center;
    place-items: center;
    text-align: center;

    p {
      padding: 0 2rem;
    }

    button {
      align-self: center;
    }
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

  @media (max-width: 375px) {
    position: relative;
    display: flex;
    place-items: center;
    place-content: center;
    background-image: url(${Mobilebg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    img {
      width: 250px;
      max-width: 100%;
      position: initial;
      top: 0;
      left: 0;
    }
  }
`;
