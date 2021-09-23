import React from 'react';
import styled from 'styled-components';
import { wh } from '~/styles/mixin';

const MainWrapper = styled.main`
  ${wh()}
  box-sizing: border-box;
  min-height: 100vh;
`;

const Wrapper = ({ children }) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default Wrapper;
