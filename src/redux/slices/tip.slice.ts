/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { RootState } from '../store';

interface ITipState {
  people: number;
  tipAmount: number;
  bill: number;
  total: number;
}

const initialTipState: ITipState = {
  people: 1,
  tipAmount: 0,
  bill: 0,
  total: 0,
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
    updateTipAmount: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      tipAmount: payload,
    }),
    updateTotal: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      total: payload,
    }),
  },
});

export const { updateBill, updatePeople, updateTipAmount, updateTotal } =
  tipSlice.actions;

export const selectBill = (state: RootState): number => state.tip.bill;
export const selectPeople = (state: RootState): number => state.tip.people;
export const selectTipAmount = (state: RootState): number =>
  state.tip.tipAmount;
export const selectTotal = (state: RootState): number => state.tip.total;

export default tipSlice.reducer;
