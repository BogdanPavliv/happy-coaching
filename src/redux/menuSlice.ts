import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuState } from '../types/others'

const initialState: MenuState = {
  isMenuToggled: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.isMenuToggled = !state.isMenuToggled;
    },
    setMenu: (state, action: PayloadAction<boolean>) => {
      state.isMenuToggled = action.payload;
    },
  },
});

export const { toggleMenu, setMenu } = menuSlice.actions;
export default menuSlice.reducer;
