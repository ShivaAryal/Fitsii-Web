import React, { useState } from 'react'
import Link from 'next/link'

import Logo from '../../public/index.png'
import Bar from '../../public/icons/bars.png'
import Back from '../../public/icons/back.png'
import { ImgWrap } from '../Layout'

import { Drawer } from 'antd'

import { CustomButton } from '../../UiComponents/Buttons'
import { MobileNavWrap, ButtonWrap, MobileNavBar, MobileWrap } from '../styled'


const links = [
  { href: '/institutes', label: 'Institute' },
  { href: '/instructors', label: 'Instructor' },
  { href: '/login', label: 'Login' }
].map((link) => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const MobileNav = () => {
  const [Visible, setVisible] = useState(false);

  let showDrawer = () => {
    setVisible(true);
  };

  let onClose = () => {
    setVisible(false);
  };

  return (
    <MobileWrap>
      <div className="logo-wrap">
        <Link href="/">
          <a className="navbar-brand" title="Affiliate">
            <img src={Logo} alt="logo" />
          </a>
        </Link>
      </div>
      <div className="icon-wrap" onClick={showDrawer}>
        <ImgWrap src={Bar} width="initial" maxHeight="30px" alt='Menu Bar' />
      </div>
      <Drawer
        className="custom-drawer"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={Visible}
        width={`100%`}
      >
        <MobileNavBar>
          <div className="icon-wrap back-icon" onClick={onClose}>
            <ImgWrap src={Back} width="initial" maxHeight="23px" alt='Menu Bar' />
          </div>
          <div className="logo-wrap" onClick={onClose}>
            <Link href="/">
              <a className="navbar-brand" title="Affiliate">
                <img src={Logo} alt="logo" />
              </a>
            </Link>
          </div>
          <div className="menu-content">
            <MobileNavWrap>
              <nav>
                <ul>
                  {links.map(({ key, href, label }) => (
                    <li key={key} onClick={onClose}>
                      <Link href={href}>
                        <a>{label}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </MobileNavWrap>
            <ButtonWrap>
              <Link href="/signup">
                <a title="signup" onClick={onClose}>
                  <CustomButton bgColor='#0090FF' borderColor="#0090FF" pd="5px 20px" size="11px" fw="600">
                    Sign Up
									</CustomButton>
                </a>
              </Link>
            </ButtonWrap>
          </div>
        </MobileNavBar>
      </Drawer>
    </MobileWrap>
  )
}

export default MobileNav
