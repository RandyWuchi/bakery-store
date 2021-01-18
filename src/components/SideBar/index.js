import React from 'react';
import {
  CloseIcon,
  Icon,
  SideBarContainer,
  SideBarLink,
  SideBarMenu,
  SideBarRoute,
  SideBtnWrap,
} from './SideBarElements';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SideBarMenu>
        <SideBarLink to='/'>Cakes</SideBarLink>
        <SideBarLink to='/'>Doughnuts</SideBarLink>
        <SideBarLink to='/'>Full Menu</SideBarLink>
      </SideBarMenu>
      <SideBtnWrap>
        <SideBarRoute to='/'>Order Now</SideBarRoute>
      </SideBtnWrap>
    </SideBarContainer>
  );
};

export default SideBar;
