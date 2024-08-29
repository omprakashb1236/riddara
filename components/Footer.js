import Link from 'next/link';
import React, { useState } from "react";
import styles from '../styles/footer.module.css';
import { GeoAlt, Phone, Envelope, Facebook, Twitter, Linkedin, Pinterest, Instagram, Whatsapp, Telephone, Youtube } from 'react-bootstrap-icons';

const Footer = () => {


  return <>
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src="/images/logo-white.png" alt="footer logo" />
        </div>
        <div className={styles.backtop}>
          <img src="/images/Back-to-top.png" alt="Back-to-top" />
        </div>
        <div className={styles.agmc}>
          <img src="/images/agmc-logo.png" alt="agmc-logo" />
        </div>
        <div className={styles.copyright}>
          <p>© 2024 Riddara. All Rights Reserved.</p>
          <ul className='footerLinks'>
            <li><a href="">Terms & Conditions</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Cookie Policy</a></li>
          </ul>
        </div>
        <div className={styles.socialicons}>
            <ul>
              <li>
                 <a href=""><img src="/images/ig.png" alt="" /></a>
              </li>
              <li>
                 <a href=""><img src="/images/x.png" alt="" /></a>
              </li>
              <li>
                 <a href=""><img src="/images/music.png" alt="" /></a>
              </li>
              <li>
                 <a href=""><img src="/images/yt.png" alt="" /></a>
              </li>
              <li>
                 <a href=""><img src="/images/lnk.png" alt="" /></a>
              </li>
            </ul>
        </div>
      </div>
    </footer>
  </>;
};

export default Footer;