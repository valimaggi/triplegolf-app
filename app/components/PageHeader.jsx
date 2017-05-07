import React from 'react';
import PropTypes from 'prop-types';
import { capitalize } from '../util/helpers';

const PageHeader = ({ header }) =>
  <h1>
    {header && capitalize(header)}
  </h1>;

PageHeader.propTypes = {
  header: PropTypes.string,
};

export default PageHeader;
