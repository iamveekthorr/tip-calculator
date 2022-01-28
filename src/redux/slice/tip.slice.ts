/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

interface ITipState {
  people: number;
  tipAmount: number;
  bill: number;
}

const initialTipState: ITipState = {
  people: 0,
  tipAmount: 0,
  bill: 0,
};

export const tipSlice = createSlice({
  name: 'tip',
  initialState: initialTipState,
  reducers: {
    updateBill: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      bill: payload,
    }),
    updatePeople: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      people: payload,
    }),
  },
});

export const { updateBill, updatePeople } = tipSlice.actions;

export const selectBill = (state: RootState): number => state.tip.bill;
export const selectPeople = (state: RootState): number => state.tip.people;

export default tipSlice.reducer;
