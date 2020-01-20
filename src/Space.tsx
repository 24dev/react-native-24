import React from 'react';

const sizes: any = {
    xs: '2px',
    sm: '4px', 
    md: '8px', 
    lg: '12px',
    xl: '24px',
    xxl: '48px',
}

const Space: React.FC<{ size?: string; children: any }> = ({
  size = 'md',
  children
}) => {
  return (
    <div
      style={{
        height: '1px',
        width: '1px',
        margin: sizes[size],
      }}
    >
      {children}
    </div>
  );
};

export default Space;
