import React, { useState } from 'react';
import styled from 'styled-components';
import { Link as LinkR, NavLink } from 'react-router-dom';
import MenuRounded from '@mui/icons-material/MenuRounded'; // Import MenuRounded icon
import LogoImage from '../utils/Images/LogoImage.png';
import { Avatar } from '@mui/material';

const Nav = styled.div`
  display: flex;
  flex: 1;
  height: 80px;
  background: ${({ theme }) => theme.bg};
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  color: white;
  border-bottom: 1px solid ${({ theme }) => theme.text_secondary + 20};
`;

const NavContainer = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const NavLogo = styled(LinkR)`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 6px;
  font-weight: 600;
  font-size: 18px;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
`;

const Logo = styled.img`
  height: 42px;
`;

const MobileIcon = styled.div`
  color: ${({ theme }) => theme.text_primary};
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0;
  margin: 0;
  list-style: none;
`;

const Navlink = styled(NavLink)`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  padding: 8px 16px;
  border-radius: 4px;
  position: relative;

  &:hover {
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.bg_secondary};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &.active {
    color: ${({ theme }) => theme.primary};
    font-weight: 600;
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const UserContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  padding: 0 6px;
  color: ${({ theme }) => theme.text_primary};
`;

const TextButton = styled.div`
  color: ${({ theme }) => theme.secondary};
  font-size: 16px;
  text-align: end;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  list-style: none;
  width: 90%;
  padding: 12px 40px 24px 40px;
  background: ${({ theme }) => theme.bg};
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  border-radius: 0 0 20px 20px;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};
`;

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <Nav>
      <NavContainer>
        <MobileIcon onClick={() => setisOpen(!isOpen)}>
          <MenuRounded sx={{ color: 'inherit' }} />
        </MobileIcon>
        <NavLogo to="/">
          <Logo src={LogoImage} />
          MyFitness
        </NavLogo>
        <MobileMenu isOpen={isOpen}>
          <Navlink to="/">Dashboard</Navlink>
          <Navlink to="workouts/">Workouts</Navlink>
          <Navlink to="tutorials/">Tutorials</Navlink>
          <Navlink to="journals/">Journals</Navlink>
          <Navlink to="contact/">Contact</Navlink>
        </MobileMenu>
        <NavItems>
          <Navlink to="/">Dashboard</Navlink>
          <Navlink to="workouts/">Workouts</Navlink>
          <Navlink to="tutorials/">Tutorials</Navlink>
          <Navlink to="journals/">Journals</Navlink>
          <Navlink to="contact/">Contact</Navlink>
        </NavItems>
        <UserContainer>
          <Avatar />
          <TextButton>Logout</TextButton>
        </UserContainer>
      </NavContainer>
    </Nav>
  );
};

export default Navbar;
