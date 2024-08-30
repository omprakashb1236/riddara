import Link from 'next/link';
import React, { useState } from "react";
import styles from '../styles/footer.module.css';
import Image from 'next/image'
const Footer = () => {


  return <>
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Image
            src='/images/logo-white.png'
            alt="footer logo"
            width={207}
            height={19}
          />
        </div>
        <div className={styles.backtop}>
          <Image
            src='/images/back-to-top-img.png'
            alt="back-to-top"
            width={84}
            height={43}
          />
        </div>
        <div className={styles.agmc}>
          <Image
            src='/images/agmc-logo.png'
            alt="agmc-logo"
            width={80}
            height={20}
          />
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
              <Link href="#">
                <Image
                  src='/images/instagram-icon.png'
                  alt="instagram"
                  width={40}
                  height={40}
                />

              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src='/images/twitter-icon.png'
                  alt="instagram"
                  width={40}
                  height={40}
                />

              </Link>
            </li>
            <li>

              <Link href="#">
                <Image
                  src='/images/tiktok-icon.png'
                  alt="tiktok"
                  width={40}
                  height={40}
                />

              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src='/images/youtube-icon.png'
                  alt="youtube"
                  width={40}
                  height={40}
                />
              </Link>
            </li>
            <li>
              <Link href="#">
                <Image
                  src='/images/linkedin-icon.png'
                  alt="linkedin"
                  width={40}
                  height={40}
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </>;
};

export default Footer;