import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const TopMenu = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="contact">Contact</StyledLink>
      <StyledLink to="about">About</StyledLink>
    </Nav>
  );
}

const Nav = styled.nav`
  background-color: #333;
  overflow: hidden;
`;

const StyledLink = styled(NavLink)`
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

  &:hover {
    background-color: #ddd;
    color: black;
  }

  &.active {
    background-color: #04AA6D;
    color: white;
  }
`;

export default TopMenu;