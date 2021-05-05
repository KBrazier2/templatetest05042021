import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );  

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h3 className="m-0">
              For previewing layouts and visual?
              </h3>
          </div>
          <div className="cta-action">

            <svg width="120" height="120">
                <a href="mailto:mobriensconstruction@gmail.com?&subject=Project%20Inquiry%20&body=Hi%20there!%20We%20would%20like%20to%20inquire%20about%20a%20future%20project!" target="_blank" >
                <path d="M   0   0
                        L 120   0
                        L 120 120
                        L  60  80
                        L   0 120
                        Z"
                        fill="#0074b8"/>
                
                <text x="60"
                        y="50"
                        fill="#FFFFFF"
                        text-anchor="middle"
                        alignment-baseline="middle">
                    Email Us!
                </text>
                </a>
            </svg>

          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;