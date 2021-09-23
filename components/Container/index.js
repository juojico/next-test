import React from 'react';
import styled from 'styled-components';
import { wh } from '~/styles/mixin';

const ContainerWrapper = styled.div`
  ${wh()}
  max-width: 1280px;
  box-sizing: border-box;
  margin: auto;
  padding: 0 20px;
`;

const Container = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

export default Container;
