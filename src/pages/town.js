import React from 'react';
import styled from 'styled-components';
import Container from '~/components/Container';
import { useStore } from '~/store';
import { wh } from '~/styles/mixin';

const HomeWrapper = styled.div`
  ${wh()}
  box-sizing: border-box;
  min-height: 100vh;
  background-color: #369;
`;

const Town = () => {
  const { openDrawer } = useStore();

  return (
    <HomeWrapper>
      <Container>
        Town
        <button onClick={openDrawer}>openDrawer</button>
      </Container>
    </HomeWrapper>
  );
};

export default Town;
