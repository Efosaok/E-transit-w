import React from 'react';
import PropTypes from 'prop-types';
import RowGrid from 'Components/row-grid/RowGrid';

const SocialMediaButtons = ({
  secondaryClassNames,
  text,
}) => (
  <button className={secondaryClassNames}>
    {text}
  </button>
);

const SocialMediaButtonsSection = ({
  text,
}) => (
  <div className="social-media-buttons container">
    <RowGrid
      allComponents={[
        <SocialMediaButtons
          secondaryClassNames="facebook-btn"
          text={`${text} with facebook`}
          key="facebook"
          id={1}
        />,
        <SocialMediaButtons
          secondaryClassNames="google-btn"
          text={`${text} with google`}
          key="google"
          id={2}
        />,
      ]}
      secondaryClassNames="col-lg-6 col-xs-6 col-sm-6 col-md-6"
    />
  </div>
);

export default SocialMediaButtonsSection;

SocialMediaButtons.propTypes = {
  secondaryClassNames: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

SocialMediaButtonsSection.defaultProps = {
  text: '',
};

SocialMediaButtonsSection.propTypes = {
  text: PropTypes.string,
};
