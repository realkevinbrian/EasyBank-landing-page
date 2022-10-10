import styled from "styled-components";

export const PrimaryButtonWrapper = styled.button`
  border: 1px solid transparent;
  padding: 0.7rem 2rem;
  border-radius: 50px;
  background: linear-gradient(
    90deg,
    hsla(136, 65%, 51%, 1) 0%,
    hsla(192, 70%, 51%, 1) 100%
  );
  color: ${({ theme }) => theme.Colors.White};
  cursor: pointer;
  transition: all 0.5s linear;

  &:hover {
    background: linear-gradient(
      45deg,
      hsl(192, 70%, 51%) 0%,
      hsla(136, 65%, 51%, 1) 100%
    );
  }
`;
