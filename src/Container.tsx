import React from 'react';

const Container: React.FC<{ children: any }> = ({
  children
}) => {
  return (
    <div
      style={{
        margin: '0 auto',
        maxWidth: '1200px'
      }}
    >
      {children}
    </div>
  );
};

export default Container
