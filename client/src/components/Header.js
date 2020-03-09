import React from 'react';

import { HeaderStyle, HeaderTitle, Rules } from '../styles/HeaderStyle';

export const Header = () => {
  return (
    <HeaderStyle>
      <HeaderTitle>Cat Mash with Node and Mongo</HeaderTitle>
      <Rules>Choose the cat you prefer:</Rules>
    </HeaderStyle>
  );
};
