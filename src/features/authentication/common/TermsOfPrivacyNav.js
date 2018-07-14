import React from 'react';
import NavLink from 'Components/nav-link/NavLink';
import PropTypes from 'prop-types';

const TermsOfPrivacyNav = props => (
  <div className="text-center terms-of-privacy-section">
    <p>
      By clicking {props.text}, you hereby agree to our{' '}
      <NavLink
        text="Terms of use"
        path="#"
      /> and acknowledge that you have read our{' '}
      <NavLink
        text="privacy policy"
        path="#"
      />
    </p>
  </div>
);

export default TermsOfPrivacyNav;

TermsOfPrivacyNav.defaultProps = {
  text: 'sign up',
};

TermsOfPrivacyNav.propTypes = {
  text: PropTypes.string,
};
