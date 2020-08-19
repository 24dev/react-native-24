import React, { FC } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { IconProps } from 'react-native-vector-icons/Icon';

const Icon: FC<IconProps> = props => {
  return <FeatherIcon {...props} />;
};

export default Icon;
