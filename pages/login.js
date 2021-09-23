import React from 'react';
import Wrapper from '~/components/Wrapper';
import Container from '~/components/Container';
import BgContainer from '~/components/Container/BgContainer';
import Controller from '~/components/Login/Controller';
import Background from '~/components/Login/Background';

const Login = () => {
  return (
    <Wrapper>
      <BgContainer>
        <Background />
      </BgContainer>

      <Container>
        Login
        <Controller />
      </Container>
    </Wrapper>
  );
};

export default Login;
