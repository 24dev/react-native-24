import React from 'react';

const Text: React.FC<{ 
  children: React.ReactChild, 
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span', 
  color?: string, 
  style?: any,
  bold?: boolean,
  caps?: boolean,
  capitalise?: boolean,
}> = ({ 
  children, 
  type = 'span', 
  color, 
  style,
  bold = false,
  caps = false,
  capitalise = false,
}) => {
  const Tag = type;
  const isBold = {fontWeight: 'bold'};
  const isCaps = {textTransform: 'uppercase'};
  const isCapitalised = {textTransform: 'capitalize'};
  return (
  <Tag style={{
    color, 
    ...bold ? isBold : {},
    ...caps ? isCaps : {},
    ...capitalise ? isCapitalised : {},
    ...style
  }}>
    {children}
  </Tag>
  );
};

export default Text;
