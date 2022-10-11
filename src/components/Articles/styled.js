import styled from "styled-components";

export const ArticlesContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
`;

export const ArticleCardWrapper = styled.div`
  border-radius: 8px;
  img {
    border-radius: inherit;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    max-width: 100%;
  }
  background: white;
  box-shadow: 1px 3px 30px #f0f0f0;
`;
export const ArticleCardBody = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 15px;

  small {
    color: ${({ theme }) => theme.Colors.GrayishBlue};
  }

  p {
    font-size: 1rem;
    color: ${({ theme }) => theme.Colors.GrayishBlue};
  }
`;
