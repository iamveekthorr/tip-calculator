/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

interface IPillState {
  isSelected: number | undefined;
  customPill: string;
}

const initialPillState: IPillState = {
  isSelected: undefined,
  customPill: '',
};

export const pillSlice = createSlice({
  name: 'pill',
  initialState: initialPillState,
  reducers: {
    updatePill: (state, { payload }: PayloadAction<number | undefined>) => ({
      ...state,
      isSelected: payload,
    }),
    updateCustomPill: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      customPill: payload,
    }),
  },
});

export const { updatePill, updateCustomPill } = pillSlice.actions;

export const selectPill = (state: RootState): number | undefined =>
  state.pill.isSelected;
export const selectCustomPill = (state: RootState): string =>
  state.pill.customPill;

export default pillSlice.reducer;
