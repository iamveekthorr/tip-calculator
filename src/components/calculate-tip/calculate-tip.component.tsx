import { FC, ChangeEvent } from 'react';
import type { AppDispatch } from '../../redux/store';

import {
  selectBill,
  selectPeople,
  updateBill,
  updatePeople,
} from '../../redux/slices/tip.slice';

import { useAppSelector, useAppDispatch } from '../../redux/hooks';

import CustomFormInput from '../custom-form/custom-form-input.component';
import TipOptions from '../tip-option/tip-option.component';

import { CalculateTipBg } from './calculate-tip.styles';

import { ReactComponent as DollarSign } from '../../images/icon-dollar.svg';
import { ReactComponent as PersonIcon } from '../../images/icon-person.svg';
import { updateIsActive } from '../../redux/slices/button.slice';

const CalculateTip: FC = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const billAmount = useAppSelector(selectBill);
  const numberOfPeople = useAppSelector(selectPeople);

  const handleBillChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(updateBill(Number(e.target.value)));
    dispatch(updateIsActive(true));
  };

  const handlePeopleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch(updatePeople(Number(e.target.value)));
  };

  return (
    <CalculateTipBg>
      <CustomFormInput
        value={billAmount}
        handleChange={handleBillChange}
        label="bills"
      >
        <DollarSign />
      </CustomFormInput>
      <TipOptions />
      <CustomFormInput
        value={numberOfPeople}
        handleChange={handlePeopleChange}
        label="number of people"
        isError={numberOfPeople < 1}
      >
        <PersonIcon />
      </CustomFormInput>
    </CalculateTipBg>
  );
};

export default CalculateTip;
