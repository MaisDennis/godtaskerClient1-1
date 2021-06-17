import React from 'react';
import Proptypes from 'prop-types';
import { Wrapper } from './styles';
export default function DefaultLayout( {children}) {
  return (
    <Wrapper>
      {/* <Header /> */}
      {children}
      {/* <Footer /> */}
    </Wrapper>
  );
}
DefaultLayout.propTypes = {
  children: Proptypes.element.isRequired,
}
