import React from 'react';
import PropTypes from 'prop-types';

const RowGrid = props => (
  <div className="row">
    {props.allComponents.map(Component => (
      <div
        className={props.secondaryClassNames}
        key={props.allComponents.indexOf(Component)}
      >
        {Component}
      </div>
    ))}
  </div>
);

export default RowGrid;

RowGrid.propTypes = {
  // FIXME: shouldn't use any data type here
  allComponents: PropTypes.any.isRequired, // eslint-disable-line
  secondaryClassNames: PropTypes.string.isRequired,
};
