/* eslint-disable implicit-arrow-linebreak */
import { FC } from 'react';
import { v4 as uuid } from 'uuid';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { AppDispatch } from '../../redux/store';

import { updatePill, selectPill } from '../../redux/slices/pill.slice';
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

  const handleClick = (el: number): void => {
    dispatch(updatePill(Number(el)));

    if (Number(billAmount) <= 1 || Number(people) < 1) {
      return;
    }

    const result = (Number(!!el) / 100) * billAmount;

    const total = billAmount / people;
    dispatch(updateTipAmount(Number(result)));
    dispatch(updateTotal(total));
  };

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
        <CustomTipInput placeholder="custom" type="number" />
      </TipOptionSection>
    </TipOptionSectionAndTitle>
  );
};

export default TipOptions;
