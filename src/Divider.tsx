import React from 'react';

const Divider: React.FC<{ color: string }> = ({
  color = 'lightgrey'
}) => {
  return (
    <div
      style={{
        width: '90%',
        height: '1px',
        backgroundColor: color,
      }}
    />
  );
};

export default Divider
