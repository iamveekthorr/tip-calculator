import { FC, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../redux/hooks';

import formatPrice from '../../utils/price-formatter';

import {
  selectTipAmount,
  selectTotal,
  updateTipAmount,
} from '../../redux/slices/tip.slice';

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

  useEffect(() => {
    dispatch(updateTipAmount(tipAmount));
  }, [tipAmount, dispatch]);
  return (
    <AmountAndTotalBackground>
      <TipAmountAndTotalContainer>
        <TipAndTotal label="tip amount" price={formatPrice(tipAmount)} />
        <TipAndTotal label="total" price={formatPrice(total)} />
      </TipAmountAndTotalContainer>

      <Button> reset </Button>
    </AmountAndTotalBackground>
  );
};

export default DisplayAmountAndTotal;
