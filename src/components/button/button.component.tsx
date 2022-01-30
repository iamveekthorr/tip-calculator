import { FC, ReactNode } from 'react';

import { Btn } from './button.styles';

interface IButtonProps {
  children: ReactNode;
  isActive: boolean;
  handleClick: () => void;
}

const Button: FC<IButtonProps> = ({ children, isActive, handleClick }) => (
  <Btn isActive={isActive} onClick={handleClick}>
    {children}
  </Btn>
);

export default Button;
