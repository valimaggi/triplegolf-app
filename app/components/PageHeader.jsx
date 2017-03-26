import React, { PropTypes } from 'react';

const PageHeader = ({ header }) => (
  <div style={{ fontSize: 50, margin: 10 }}>
    {header && header.replace(/\b\w/g, l => l.toUpperCase())}
  </div>
);

PageHeader.propTypes = {
  header: PropTypes.string,
};

export default PageHeader;
