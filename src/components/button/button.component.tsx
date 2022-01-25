import { FC } from 'react';

import { Btn } from './button.styles';

interface IButtonProps {
  children: string;
}

const Button: FC<IButtonProps> = ({ children }) => <Btn>{children}</Btn>;

export default Button;
