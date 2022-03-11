import React from 'react';
import logo from '../styles/images/LOGO LARANJA.svg';

import '../styles/header.scss';
import '../styles/components/buttons.scss';

export default function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header-logo"/>
    </div>
  )
}
