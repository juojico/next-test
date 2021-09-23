import React from 'react';
import styled from 'styled-components';
import { useStore } from '~/store';

const contentWidth = 50;

const DrawerWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 1;
  visibility: ${props => (props.open ? 'visible' : 'hidden')};
`;

const Title = styled.div`
  position: absolute;
  margin: 5% -20px;
`;

const Next = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5% 20px;
`;

const LeftArea = styled.div`
  width: ${`${100 - contentWidth}%`};
  opacity: 0.3;
  background-color: ${props => props.theme.grey3};
`;

const RightArea = styled.div`
  width: ${`${contentWidth}%`};
  background-color: ${props => props.theme.black};
`;

const Content = styled.div`
  background-color: ${props => props.theme.white};
  padding: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 18px;
  color: ${props => props.theme.black};
`;

const Drawer = () => {
  const [drawerOpen, drawerType, openDrawer, closeDrawer] = useStore(state => [
    state.drawerOpen,
    state.drawerType,
    state.openDrawer,
    state.closeDrawer,
  ]);

  const buttonText = drawerOpen ? 'Close' : 'Open';
  const buttonAction = drawerOpen ? closeDrawer : openDrawer;

  const getDrawerContent = () => {
    switch (drawerType) {
      case 'fund':
        return <Text>Fund</Text>;
      default:
        return <Text>Default</Text>;
    }
  };

  return (
    <DrawerWrapper open={drawerOpen}>
      <LeftArea onClick={closeDrawer} />
      <RightArea>
        <Title>
          <button onClick={() => {}}>Title</button>
        </Title>
        <Next>
          <button onClick={() => {}}>Next</button>
        </Next>
        <Content>
          {getDrawerContent()}
          <button onClick={buttonAction}>{buttonText} Drawer </button>
        </Content>
      </RightArea>
    </DrawerWrapper>
  );
};

export default Drawer;
