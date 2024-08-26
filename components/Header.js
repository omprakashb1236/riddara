import React from 'react';
import Link from 'next/link';
import Navigation from './Navigation';
import { GeoAlt,Phone,Envelope,Facebook,Twitter,Linkedin,Pinterest,Instagram,Whatsapp,Telephone, Youtube } from 'react-bootstrap-icons';

const Header = ({navigationItems, LanguageSwitcher }) => {


    return (
        <>
         <header>
      <nav>
        <Navigation navigationItems={navigationItems} />
      </nav>
    </header>
        
        </>
    );
}

export default Header;
