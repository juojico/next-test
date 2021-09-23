import React from 'react';
import styled from 'styled-components';
import { font } from '~/styles/mixin';
import { useRole } from '~/store';

const ControllerWrapper = styled.div`
  padding-top: 20px;
`;

const CountBox = styled.div`
  ${font(32, '#f99')}
`;

const Controller = () => {
  const { face, clothing, pet, changeFace, changeClothing, changePet } =
    useRole();

  return (
    <ControllerWrapper>
      <CountBox>
        {face}
        <button onClick={changeFace}>changeFace</button>
      </CountBox>
      <CountBox>
        {clothing}
        <button onClick={changeClothing}>changeClothing</button>
      </CountBox>
      <CountBox>
        {pet}
        <button onClick={changePet}>changePet</button>
      </CountBox>
    </ControllerWrapper>
  );
};

export default Controller;
