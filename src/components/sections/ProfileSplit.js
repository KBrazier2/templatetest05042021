import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Carousel from 'react-bootstrap/Carousel';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const ProfileSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'profile-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'profile-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'A Little About Us',
    paragraph: 'Get to know our background and where we come from!'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <div id="aboutUs" />
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Founder of O'Brien's Construction
                  </div>
                <h3 className="mt-0 mb-12">
                  Matt O'Brien
                  </h3>
                <p className="m-0">
                After many years of working for a few great companies with different specialties our owner had the misfortune of working for a bad contractor. The decision to start his own company was made almost immediately. Our goal on every job is to create a lasting relationship with our customers. We are most certainly not a "one and done" company. With over 90% of our work coming from referrals or repeat customers we know the importance of doing right by our customers. Give us a call today and let's work together.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                {/* <Image
                  src={require('./../../assets/images/features-split-image-01.png')}
                  alt="Features split 01"
                  width={528}
                  height={396} /> */}
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IGtest7.png')}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IGtest3.png')}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IGtest4.png')}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>

            

          </div>
        </div>
      </div>
    </section>
  );
}

ProfileSplit.propTypes = propTypes;
ProfileSplit.defaultProps = defaultProps;

export default ProfileSplit;