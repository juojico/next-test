import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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
          <Link to='/'>Login</Link>
          <Link to='/town'>Town</Link>
          <Link to='/mrFund'>MrFund</Link>
        </HeaderArea>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
