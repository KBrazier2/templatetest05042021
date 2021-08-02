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

const FeaturesSplit = ({
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
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
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
    title: 'Dive in Deeper',
    paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Re-Energize Your Hunger
                  </div>
                <h3 className="mt-0 mb-12">
                  Kitchens
                  </h3>
                <p className="m-0">
                  Having your dream kitchen will bring the best out of your cooking needs. Let us be the ones to set you up with success by installing new cabinets or your large appliances.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <div id="Kitchens" />
                <Carousel>  
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/26square.jpg')}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/36square.jpg')}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/37square.jpg')}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/56square.jpg')}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Refreshingly New
                  </div>
                <h3 className="mt-0 mb-12">
                  Bathrooms
                  </h3>
                <p className="m-0">
                  When you need to freshen up for your day, a brand new bathroom can leave you not only physically clean, but mentally as well. We'll take care of that grit and grime such as tiles and flooring!
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">

                <div id="Bathrooms" />
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/10square.jpg')}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/11square.jpg')}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/33square.jpg')}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/46square.jpg')}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/47square.jpg')}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/48square.jpg')}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/49square.jpg')}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Not just for Storage
                  </div>
                <h3 className="mt-0 mb-12">
                  Basements
                  </h3>
                <p className="m-0">
                  Need a place to entertain? Comfort is important especially when you need your next big project done with custom carpentry! 
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">

                <div id="Basements" />
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IGtest4.png')}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IGtest5.png')}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IGtest6.png')}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  All is Sunny in the Tristate Area
                  </div>
                <h3 className="mt-0 mb-12">
                  Decks and Patios
                  </h3>
                <p className="m-0">
                  Get ready for outdoor activities as we transform your backyard for your friends and family to soak up the sun!
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">

                <div id="DecksAndPatios" />
                <Carousel>  
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IGtest5.png')}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IGtest6.png')}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IGtest7.png')}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Protection is Key
                  </div>
                <h3 className="mt-0 mb-12">
                  Tiling
                  </h3>
                <p className="m-0">
                  Give your rooms a sleek and clean look! Stepping into one of your rooms should always give that sense of "wow", even from the floors!
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">

                  <div id="Tiling" />
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IGtest6.png')}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IGtest7.png')}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IGtest2.png')}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Expand the Horizons
                  </div>
                <h3 className="mt-0 mb-12">
                  Additions
                  </h3>
                <p className="m-0">
                  A family can never be too big, nor can your home! Send us your vision and we'll make it a reality!
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">

                <div id="Additions" />
                <Carousel>  
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IGtest6.png')}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IGtest7.png')}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IGtest2.png')}
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

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;