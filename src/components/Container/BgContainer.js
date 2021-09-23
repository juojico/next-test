import React from 'react';
import styled from 'styled-components';
import { wh } from '~/styles/mixin';

const BgContainerArea = styled.div`
  ${wh('100%', '100%')}
  box-sizing: border-box;
  position: absolute;
  overflow: hidden;
  z-index: -1;
`;

const BgContainer = ({ children }) => {
  return <BgContainerArea>{children}</BgContainerArea>;
};

export default BgContainer;
