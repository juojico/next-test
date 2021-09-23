import create from 'zustand';
import { repeatRange } from '../utils';

const initialState = {
  drawerOpen: true,
  drawerType: '',
};

export const useStore = create(set => ({
  ...initialState,
  openDrawer: drawerType =>
    set(state => ({ ...state, drawerOpen: true, drawerType })),
  closeDrawer: () =>
    set(state => ({ ...state, drawerOpen: false, drawerType: '' })),
}));

const initialRoleState = {
  face: 0,
  clothing: 0,
  pet: 0,
};

export const useRole = create(set => ({
  ...initialRoleState,
  changeFace: () =>
    set(state => ({ ...state, face: repeatRange(state.face + 1, 2) })),
  changeClothing: () =>
    set(state => ({ ...state, clothing: repeatRange(state.clothing + 1, 2) })),
  changePet: () =>
    set(state => ({ ...state, pet: repeatRange(state.pet + 1, 2) })),
}));
