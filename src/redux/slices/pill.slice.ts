/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

interface IPillState {
  isSelected: number | undefined;
}

const initialTipState: IPillState = {
  isSelected: undefined,
};

export const pillSlice = createSlice({
  name: 'pill',
  initialState: initialTipState,
  reducers: {
    updatePill: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      isSelected: payload,
    }),
  },
});

export const { updatePill } = pillSlice.actions;

export const selectPill = (state: RootState): number | undefined =>
  state.pill.isSelected;

export default pillSlice.reducer;
