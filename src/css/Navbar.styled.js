import styled from "styled-components";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ddaa36;
  padding: 10px;
`;

export const NavbarItems = styled.a`
  font-size: 16px;
  margin-right: 16px;
  color: #000407;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;
