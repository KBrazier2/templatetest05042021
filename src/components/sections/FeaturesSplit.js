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
    paragraph: 'Below you will find the wide range of expertise we offer. Feel confident in knowing no stone will be left unturned.'
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
                      src={require('./../../assets/images/IMG_0008.jpg')}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0010.jpg')}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0027.jpg')}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/36square.jpg')}
                      alt="Fourth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/37square.jpg')}
                      alt="Fifth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/56square.jpg')}
                      alt="Sixth slide"
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
                      src={require('./../../assets/images/11square.jpg')}
                      alt="First slide"
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
                      src={require('./../../assets/images/47square.jpg')}
                      alt="Fifth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/48square.jpg')}
                      alt="Sixth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/49square.jpg')}
                      alt="Seventh slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0001.jpg')}
                      alt="Eighth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0013.jpg')}
                      alt="Ninth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0016.jpg')}
                      alt="Tenth slide"
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
                      src={require('./../../assets/images/02square.jpg')}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/03square.jpg')}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/54square.jpg')}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/09square.jpg')}
                      alt="Fourth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/10square.jpg')}
                      alt="Fifth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/46square.jpg')}
                      alt="Sixth slide"
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
                      src={require('./../../assets/images/IMG_0019.jpg')}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0018.jpg')}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0014.jpg')}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0007.jpg')}
                      alt="Fourth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0022.jpg')}
                      alt="Fifth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0030.jpg')}
                      alt="Sixth slide"
                    />
                  </Carousel.Item>   
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/04square.jpg')}
                      alt="Seventh slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/17square.jpg')}
                      alt="Eighth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/18square.jpg')}
                      alt="Ninth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/19square.jpg')}
                      alt="Tenth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/20square.jpg')}
                      alt="Eleventh slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/21square.jpg')}
                      alt="Twelth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/53square.jpg')}
                      alt="Thirteenth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/55square.jpg')}
                      alt="Fourteenth slide"
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
                  Roofing/Siding
                  </h3>
                <p className="m-0">
                  Not only should the roof of your home protect you and your family, but why not have it look spectacular as well?! Let us climb the ladders for you!
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">

                  <div id="RoofingAndSiding" />

                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0020.jpg')}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0011.jpg')}
                      alt="Second slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0005.jpg')}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0006.jpg')}
                      alt="Fourth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0015.jpg')}
                      alt="Fifth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0021.jpg')}
                      alt="Sixth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/19square.jpg')}
                      alt="Seventh slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/42square.jpg')}
                      alt="Eighth slide"
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
                Custom Interior/Exterior
                  </h3>
                <p className="m-0">
                  Have a unique style? Send us your vision and we'll make it a reality!
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">

                <div id="Custom" />
                <Carousel>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0035.jpg')}
                      alt="First slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0026.jpg')}
                      alt="Second slide"
                    />
                  </Carousel.Item>  
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0017.jpg')}
                      alt="Third slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0023.jpg')}
                      alt="Fourth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/38square.jpg')}
                      alt="Fifth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/39square.jpg')}
                      alt="Sixth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/26square.jpg')}
                      alt="Seventh slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/27square.jpg')}
                      alt="Eighth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/IMG_0036.jpg')}
                      alt="Ninth slide"
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={require('./../../assets/images/07square.jpg')}
                      alt="Tenth slide"
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