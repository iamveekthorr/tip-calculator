import { FC } from 'react';
import Button from '../button/button.component';

import TipAndTotal from '../tip-and-total/tipAndTotal.component';

import {
  AmountAndTotalBackground,
  TipAmountAndTotalContainer,
} from './summary-bg.styles';

const DisplayAmountAndTotal: FC = () => (
  <AmountAndTotalBackground>
    <TipAmountAndTotalContainer>
      <TipAndTotal label="tip amount" price={0.0} />
      <TipAndTotal label="total" price={0.0} />
    </TipAmountAndTotalContainer>

    <Button> reset </Button>
  </AmountAndTotalBackground>
);

export default DisplayAmountAndTotal;
