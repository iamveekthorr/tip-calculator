import { FC } from 'react';

import Title from '../../components/title/title.component';
import CalculatorBg from '../../components/calculator/calculator.component';
import DisplayAmountAndTotal from '../../components/summary/summary-bg.component';
import CalculateTip from '../../components/calculate-tip/calculate-tip.component';

import { Container } from './main.styles';

const Main: FC = () => (
  <Container>
    <Title />

    <CalculatorBg>
      <CalculateTip />
      <DisplayAmountAndTotal />
    </CalculatorBg>

    <footer className="attribution">
      Challenge by
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noreferrer"
      >
        Frontend Mentor
      </a>
      . Coded by
      <a
        href="https://github.com/iamveekthorr"
        target="_blank"
        rel="noreferrer"
      >
        Victor Okonkwo Chidike
      </a>
      .
    </footer>
  </Container>
);

export default Main;
