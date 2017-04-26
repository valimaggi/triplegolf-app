import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ header }) => {
  const style = { fontSize: 50 };
  return (
    <div style={style}>
      {header && header.replace(/\b\w/g, l => l.toUpperCase())}
    </div>
  );
};

PageHeader.propTypes = {
  header: PropTypes.string,
};

export default PageHeader;
