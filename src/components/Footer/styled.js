import styled from "styled-components";

export const FooterContainer = styled.section`
  background-color: ${({ theme }) => theme.Colors.DarkBlue};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
  place-content: center;
  place-items: center;

  //Mobile
  @media (max-width: 600px) {
    flex-direction: column;
    padding: 2rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 15px;
    #logo {
      width: 200px;
      filter: invert(1);
    }
    #socialMedia {
      width: 25px;
      max-width: 100%;
    }
  }

  .box1 {
    display: flex;
    flex-direction: column;
    gap: 30px;
    > div {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
      place-content: center;
    }
  }

  .box2 {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-content: center;
    color: ${({ theme }) => theme.Colors.VeryLightGray};

    //Mobile
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }

  .box3 {
    display: flex;
    flex-direction: column;
    place-content: center;
    place-items: center;
    color: ${({ theme }) => theme.Colors.GrayishBlue};
  }
`;
