import React, { useState } from 'react';

import { Container } from '../../UiComponents/Layout';
import Nav from './Nav';
import MobileNav from './MobileNav';
import { NavigationStyle } from '../styled';

const Navigation = () => {
  return (
    <Container>
      <NavigationStyle>
        <div className="desktop">
          <Nav />
        </div>
        <div className="mobile">
          <MobileNav />
        </div>
      </NavigationStyle>
    </Container>
  );
};

export default Navigation;
