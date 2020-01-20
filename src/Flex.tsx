import React from 'react';

const Flex: React.FC<{ justifyContent?: string; children: any, style: any }> = ({
  justifyContent = 'space-between',
  children,
  style
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent,
        ...style
      }}
    >
      {children}
    </div>
  );
};

export default Flex
