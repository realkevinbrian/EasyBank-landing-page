import styled from "styled-components";

export const NavbarWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 6rem;

  .statusBtn {
    display: none;
  }

  @media (max-width: 600px) {
    position: relative;
    padding: 15px;
    .statusBtn.open {
      display: block;
    }

    .MobileMenuOpen {
      display: flex;
    }

    .MobileMenuClose {
      display: none;
    }
  }
`;
export const NavbarLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 600px) {
    /* display: none; */
  }
`;
export const NavbarItemWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: space-around;

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    color: ${({ theme }) => theme.Colors.GrayishBlue};
  }

  @media (max-width: 600px) {
    position: fixed;
    z-index: 10;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50px;
    left: 0;
    button {
      display: none;
    }
    width: 100%;
    height: 100vh;
    background-color: #0000009e;

    > div {
      background-color: ${({ theme }) => theme.Colors.White};
      color: ${({ theme }) => theme.Colors.DarkBlue};
      display: flex;
      flex-direction: column;
      align-items: center;
      place-content: center;
      width: 90%;
      margin-top: -15rem;
      padding: 1rem 0;
      gap: 15px;
      border-radius: 5px;
    }
  }
`;
