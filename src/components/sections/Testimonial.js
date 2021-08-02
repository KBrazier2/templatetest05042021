import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Customer Testimonials',
    paragraph: 'Hear what others have to say about us!'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — I have hired Matt and his crew for several home improvements.  He responds quickly, always has wonderful suggestions, and he and his guys do awesome work.  My favorite addition that he performed is adding a fabulous ship lap wall in my downstairs renovation.  You will not be disappointed… guaranteed!
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Elizabeth Andriulli</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://www.google.com/search?ved=1t:65428&hl=en&_ga=2.34282337.1735822703.1627927256-621921512.1625249930&q=O%27Brien%27s+Construction+LLC&ludocid=12685467263311495001&lsig=AB86z5VachZ15Wg_j97n9AUdNZI4#lrd=0x8f6136ef6a5172e3:0xb00bd543f7873f59,1,,," target="blank">Google</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Matt went over the top. The price of lumber was high and he knew that and he worked with us financially. the deck and our interior work that he did were phenomenal!!
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Brendan F.</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://www.yelp.com/biz/o-briens-construction-asbury-park-5" target="blank">Yelp</a>
                  </span>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Matt and his team completed my basement is 5 days!!! My previous contact was there for 7 months and left me with a mess. I'm greatful he came and saved the day!!!
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Jeanne Glynn</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="https://www.google.com/search?ved=1t:65428&hl=en&_ga=2.34282337.1735822703.1627927256-621921512.1625249930&q=O%27Brien%27s+Construction+LLC&ludocid=12685467263311495001&lsig=AB86z5VachZ15Wg_j97n9AUdNZI4#lrd=0x8f6136ef6a5172e3:0xb00bd543f7873f59,1,,," target="blank">Google</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;