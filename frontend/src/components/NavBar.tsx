import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  height: 60px;
`;

const NavLink = styled(Link)`
  margin: 0 10px;
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
  background-color: #ff6347;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ff4500;
  }
`;

const NavBar: React.FC = () => {
  return (
    <Nav>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tools">Tools</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
      <LoginButton>Login</LoginButton>
    </Nav>
  );
};

export default NavBar;
