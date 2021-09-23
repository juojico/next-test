import React from 'react';
import styled from 'styled-components';
import Link from 'next/link'
import Container from '~/components/Container';
import { wh, flex } from '~/styles/mixin';

const HeaderWrapper = styled.header`
  background-color: white;
`;

const HeaderArea = styled.div`
  ${props => wh('100%', props.theme.headerHeight)}
  ${flex('space-around')}
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderArea>
          <Link href='/'>Login</Link>
          <Link href='/town'>Town</Link>
          <Link href='/mrFund'>MrFund</Link>
        </HeaderArea>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
