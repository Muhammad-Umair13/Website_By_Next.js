import React from 'react';
import Components_style from "../app/components.module.css";
import Link from 'next/link';

const Header = () => {
  return (
    <header className={Components_style.header_sec}>
        <h1>My Next.js Website</h1>
        <ul>
          <li><Link href="#">Home</Link></li>
          <li><Link href="#">About</Link> </li>  
          <li><Link href="#">Contact</Link></li>
        </ul>
    </header>
  )

}
export default Header;