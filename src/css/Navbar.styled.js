import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Link as LinkS } from "react-router-dom";

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1000;
  width: 100%;
  padding: 0 24px;
  background: #ddaa36;
  max-width: 11000px;
  /* border: 5px solid #2f3061;
  border-radius: 0px 0px 20px 20px; */
`;

export const NavLogo = styled(LinkRouter)`
  color: #000407;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  margin-left: 2px;
  margin-top: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 18px;
    right: 20px;
    tranform: translate(-100%, 60%);
    font-size: 2.4rem;
    cursor: pointer;
    color: #000407;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkS)`
  color: #000407;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #000407;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #000407;
  white-space: nowrap;
  padding: 10px 22px;
  color: #000407;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &.hover {
    transition: all 0.2s ease-in-out;
    background: #9f9493;
    color: #533a71;
  }
`;

// export const NavbarContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #ddaa36;
//   padding: 10px;
// `;

// export const NavbarItems = styled.a`
//   font-size: 16px;
//   margin-right: 16px;
//   color: #000407;
//   &:hover {
//     opacity: 0.5;
//     cursor: pointer;
//   }
// `;
