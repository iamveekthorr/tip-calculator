import { FC, ReactNode } from 'react';

import { CalculatorBg } from './calculator.styles';

interface ICalculatorProps {
  children: ReactNode;
}

const Calculator: FC<ICalculatorProps> = ({ children }) => (
  <CalculatorBg> {children} </CalculatorBg>
);

export default Calculator;
