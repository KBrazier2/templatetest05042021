import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="mailto:mobriensconstruction@gmail.com?&subject=Project%20Inquiry%20&body=Hi%20there!%20We%20would%20like%20to%20inquire%20about%20a%20future%20project!" target="_blank" >Contact</a>
        </li>
        <li>
          <a href="#aboutUs">About us</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;