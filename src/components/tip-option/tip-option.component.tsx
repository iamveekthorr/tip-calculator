import { FC } from 'react';
import { v4 as uuid } from 'uuid';

import {
  TipOption,
  TipOptionTitle,
  TipOptionSection,
  TipOptionSectionAndTitle,
  CustomTipInput,
} from './tip-option.styles';

const TipOptions: FC = () => {
  const tipOptions: number[] = [5, 10, 15, 25, 50];

  return (
    <TipOptionSectionAndTitle>
      <TipOptionTitle>select tip %</TipOptionTitle>
      <TipOptionSection>
        {tipOptions.map((el) => (
          <TipOption readOnly key={uuid()} value={el} type="number" />
        ))}
        <CustomTipInput placeholder="custom" type="number" />
      </TipOptionSection>
    </TipOptionSectionAndTitle>
  );
};

export default TipOptions;
