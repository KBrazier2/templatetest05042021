import React from 'react';
import classNames from 'classnames';

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
          <a href="#Kitchens">Kitchens</a>
        </li>
        <li>
          <a href="#Bathrooms">Bathrooms</a>
        </li>
        <li>
          <a href="#Basements">Basements</a>
        </li>
        <li>
          <a href="#DecksAndPatios">Decks/Patios</a>
        </li>
        <li>
          <a href="#RoofingAndSiding">Roofing/Siding</a>
        </li>
        <li>
          <a href="#Custom">Custom Interior/Exterior</a>
        </li>
        <li>
          <a href="mailto:mobriensconstruction@gmail.com?&subject=Project%20Inquiry%20&body=Hi%20there!%20We%20would%20like%20to%20inquire%20about%20a%20future%20project!" rel="noopener noreferrer" target="_blank" >Contact</a>
        </li>
        <li>
          <a href="#aboutUs">About us</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;