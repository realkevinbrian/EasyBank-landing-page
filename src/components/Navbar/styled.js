import styled from "styled-components";

export const NavbarWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const NavbarLogo = styled.div``;
export const NavbarItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  color: ${({theme})=>theme.Colors.GrayishBlue};
`;
