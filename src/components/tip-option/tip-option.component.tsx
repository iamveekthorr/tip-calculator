/* eslint-disable implicit-arrow-linebreak */
import { FC } from 'react';
import { v4 as uuid } from 'uuid';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { AppDispatch } from '../../redux/store';

import { updatePill, selectPill } from '../../redux/slices/pill.slice';
import { selectBill, updateTipAmount } from '../../redux/slices/tip.slice';

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
  const pillState = useAppSelector(selectPill);
  const billAmount = useAppSelector(selectBill);

  const calCulateTipBasedOnPercentage = (): number => {
    if (Number(billAmount) < 1) {
      return 0;
    }

    return (Number(pillState) / 100) * billAmount;
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
              dispatch(updatePill(el));

              dispatch(
                updateTipAmount(Number(calCulateTipBasedOnPercentage()))
              );
              Number(calCulateTipBasedOnPercentage());
            }}
            isSelected={el === pillState}
          />
        ))}
        <CustomTipInput placeholder="custom" type="number" />
      </TipOptionSection>
    </TipOptionSectionAndTitle>
  );
};

export default TipOptions;
