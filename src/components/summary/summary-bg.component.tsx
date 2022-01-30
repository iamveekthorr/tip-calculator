import { FC, useEffect, useCallback } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import formatPrice from '../../utils/price-formatter';

import {
  selectTipAmount,
  selectTotal,
  updateTipAmount,
  updateBill,
  updateTotal,
  updatePeople,
} from '../../redux/slices/tip.slice';

import { updatePill } from '../../redux/slices/pill.slice';

import {
  selectIsActive,
  updateIsActive,
} from '../../redux/slices/button.slice';

import Button from '../button/button.component';

import TipAndTotal from '../tip-and-total/tipAndTotal.component';

import {
  AmountAndTotalBackground,
  TipAmountAndTotalContainer,
} from './summary-bg.styles';

const DisplayAmountAndTotal: FC = () => {
  const tipAmount = useAppSelector(selectTipAmount);
  const total = useAppSelector(selectTotal);
  const dispatch = useAppDispatch();
  const isButtonActive = useAppSelector(selectIsActive);

  const handleReset = useCallback(() => {
    dispatch(updatePeople(1));
    dispatch(updateTotal(0));
    dispatch(updateBill(0));
    dispatch(updatePill(undefined));
    dispatch(updateTipAmount(0));
    dispatch(updateIsActive(false));
  }, [dispatch]);

  useEffect(() => {
    dispatch(updateTipAmount(tipAmount));
  }, [tipAmount, dispatch]);

  return (
    <AmountAndTotalBackground>
      <TipAmountAndTotalContainer>
        <TipAndTotal label="tip amount" price={formatPrice(tipAmount)} />
        <TipAndTotal label="total" price={formatPrice(total)} />
      </TipAmountAndTotalContainer>

      <Button handleClick={handleReset} isActive={isButtonActive}>
        reset{' '}
      </Button>
    </AmountAndTotalBackground>
  );
};

export default DisplayAmountAndTotal;
