/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

interface IButtonState {
  isActive: boolean;
}

const initialButtonState: IButtonState = {
  isActive: false,
};

export const buttonSlice = createSlice({
  name: 'button',
  initialState: initialButtonState,
  reducers: {
    updateIsActive: (state, { payload }: PayloadAction<boolean>) => ({
      ...state,
      isActive: payload,
    }),
  },
});

export const { updateIsActive } = buttonSlice.actions;

export const selectIsActive = (state: RootState): boolean =>
  state.button.isActive;

export default buttonSlice.reducer;
