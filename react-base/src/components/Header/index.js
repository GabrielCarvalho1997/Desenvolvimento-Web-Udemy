import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { Nav } from './styled';

export default function Header() {
  return (
    <Nav>
      <a href="#top">
        <FaHome size={24} />
      </a>
      <a href="#top">
        <FaSignInAlt size={24} />
      </a>
      <a href="#top">
        <FaUserAlt size={24} />
      </a>
    </Nav>
  );
}

