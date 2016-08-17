import React from 'react';
import Sport from './Sport.jsx';

export default ({sports}) => {
  return (
    <div>{sports.map((sport) =>
      <Sport key={sport.get('id')} sport={sport} />
    )}</div>
  );
}
