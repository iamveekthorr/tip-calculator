/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import { ChangeEvent, FC, useRef, useEffect } from 'react';

import { v4 as uuid } from 'uuid';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { AppDispatch } from '../../redux/store';

import {
  updatePill,
  updateCustomPill,
  selectPill,
  selectCustomPill,
} from '../../redux/slices/pill.slice';
import {
  selectBill,
  selectPeople,
  updateTipAmount,
  updateTotal,
} from '../../redux/slices/tip.slice';

import {
  TipOption,
  TipOptionTitle,
  TipOptionSection,
  TipOptionSectionAndTitle,
  CustomTipInput,
} from './tip-option.styles';

const TipOptions: FC = () => {
  const tipOptions: number[] = [5, 10, 15, 25, 50];

  const dispatch: AppDispatch = useAppDispatch();
  const activeOption = useAppSelector(selectPill);
  const billAmount = useAppSelector(selectBill);
  const people = useAppSelector(selectPeople);
  const customInput = useAppSelector(selectCustomPill);

  const calculateTotal = (): number => billAmount / people;

  const calculateTip = (amount: number): number => (amount / 100) * billAmount;
  const handleClick = (el: number): void => {
    if (Number(billAmount) <= 1 || Number(people) < 1) {
      return;
    }

    const total = calculateTotal();
    const result: number = (el / 100) * billAmount;

    dispatch(updateTipAmount(result));

    dispatch(updateTotal(total));
    dispatch(updatePill(Number(el)));
  };

  const checkEmptyFields = (): boolean => {
    if (billAmount <= 1 || people < 1) {
      return true;
    }
    return false;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (!checkEmptyFields()) {
      const amount = e.target.value;
      dispatch(updateCustomPill(amount));
      dispatch(updateTotal(calculateTotal()));
      dispatch(updateTipAmount(calculateTip(Number(amount))));
    }
  };

  const inputElement = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.addEventListener('keypress', (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !checkEmptyFields()) {
        const amount = inputElement?.current?.value;
        dispatch(updateCustomPill(String(amount)));

        dispatch(updateTotal(calculateTotal()));
        dispatch(updateTipAmount(calculateTip(Number(amount))));
      }
    });
  });

  return (
    <TipOptionSectionAndTitle>
      <TipOptionTitle>select tip %</TipOptionTitle>
      <TipOptionSection>
        {tipOptions.map((el) => (
          <TipOption
            readOnly
            key={uuid()}
            value={el.toString().concat('%')}
            type="text"
            onClick={() => {
              handleClick(el);
            }}
            isSelected={el === activeOption}
          />
        ))}
        <CustomTipInput
          placeholder="custom"
          type="number"
          ref={inputElement}
          value={customInput}
          onChange={(e) => handleChange(e)}
        />
      </TipOptionSection>
    </TipOptionSectionAndTitle>
  );
};

export default TipOptions;
