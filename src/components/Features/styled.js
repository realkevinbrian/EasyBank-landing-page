import styled from "styled-components";

export const FeaturesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({ theme }) => theme.Colors.LightGrayishBlue};

  #subtitle {
    color: ${({ theme }) => theme.Colors.GrayishBlue};
    display: flex;
    flex-direction: column;
  }

  //mobile
  @media (max-width: 600px) {
    padding: 2rem;
    place-items: center;
    text-align: center;
  }
`;
export const FeaturesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-content: space-between;
  gap: 20px;
  padding-top: 2rem;
`;
export const FeatureCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  img {
    max-width: 100%;
    width: 80px;
  }
  h4 {
    color: ${({ theme }) => theme.Colors.DarkBlue};
  }
  p {
    color: ${({ theme }) => theme.Colors.GrayishBlue};
  }

  //mobile
  @media (max-width: 600px) {
    place-items: center;
  }
`;
