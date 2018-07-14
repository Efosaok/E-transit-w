import React from 'react';
import PropTypes from 'prop-types';
import RowGrid from 'Components/row-grid/RowGrid';
import Form from 'Components/form/Form';
import domStructure from './domStructureProps.json';

const { signupDomStructureProps } = domStructure;

const InputInline = ({
  handleChange,
  validationErrors,
  handleSubmit,
}) => (
  <RowGrid
    allComponents={[
      <Form
        inputFieldsProps={signupDomStructureProps.slice(0, 1)}
        renderButton={false}
        handleChange={handleChange}
        validationErrors={validationErrors}
        handleSubmit={handleSubmit}
      />,
      <Form
        inputFieldsProps={signupDomStructureProps.slice(1, 2)}
        renderButton={false}
        handleChange={handleChange}
        validationErrors={validationErrors}
        handleSubmit={handleSubmit}
      />,
    ]}
    secondaryClassNames="col-lg-6 col-xs-6 col-sm-6 col-md-6"
  />
);

export default InputInline;

InputInline.defaultProps = {
  validationErrors: {},
};

InputInline.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  validationErrors: PropTypes.objectOf(PropTypes.string),
};
