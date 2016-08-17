import React from 'react';

export default ({name, shots}) => {
  return (
    <div>
      <div className='player-name'>
        {name}
      </div>
      <div className='player-shots'>
        {shots}
      </div>
    </div>
  );
}
