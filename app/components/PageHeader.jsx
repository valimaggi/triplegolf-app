import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ header }) =>
  <h1>
    {header && header.replace(/\b\w/g, l => l.toUpperCase())}
  </h1>;

PageHeader.propTypes = {
  header: PropTypes.string,
};

export default PageHeader;
