import React, { useState } from 'react';
import NavBar from '../Navbar.js';
import SideBar from '../SideBar/index.js';
import {
  HeroBtn,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroItems,
  HeroP,
} from './HeroElements.js';

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <HeroContainer>
        <NavBar toggle={toggle} />
        <SideBar isOpen={isOpen} toggle={toggle} />
        <HeroContent>
          <HeroItems>
            <HeroH1>Bespoke Cakes</HeroH1>
            <HeroP>Exquiste cakes with great taste</HeroP>
            <HeroBtn>Place Order</HeroBtn>
          </HeroItems>
        </HeroContent>
      </HeroContainer>
    </div>
  );
}

export default Hero;
