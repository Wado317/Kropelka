import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from '../../../const/colors';

const Plus = () => (
  <Svg width="44" height="44" fill={colors.red} viewBox="0 0 24 24">
    <Path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z"/>
  </Svg>
);

export default Plus;