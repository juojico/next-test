import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Container from '~/components/Container';
import { useStore } from '~/store';
import { wh } from '~/styles/mixin';

const MrFundWrapper = styled.div`
  ${wh()}
  box-sizing: border-box;
  min-height: 100vh;
  background-color: #b9a;
`;

const MrFund = () => {
  const { openDrawer } = useStore();

  return (
    <MrFundWrapper>
      <Container>
        MrFund
        <button onClick={openDrawer}>openDrawer</button>
        <Link href="/town">
          <button>backToTown</button>
        </Link>
      </Container>
    </MrFundWrapper>
  );
};

export default MrFund;
