import { FC } from 'react';

import {
  Label,
  Price,
  PriceAndLabelContainer,
  LabelAndPerPerson,
} from './tipAndTotal.styles';

interface ITipAndTotalProps {
  label: string;
  price: number;
}

const TipAndTotal: FC<ITipAndTotalProps> = ({ label, price }) => (
  <PriceAndLabelContainer>
    <LabelAndPerPerson>
      <Label>{label}</Label>
      <p>/ person</p>
    </LabelAndPerPerson>
    <Price>{price}</Price>
  </PriceAndLabelContainer>
);

export default TipAndTotal;
