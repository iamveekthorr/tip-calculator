import { ChangeEvent, FC, ReactNode } from 'react';

import {
  FormInputLabel,
  FormGroup,
  FormInput,
  FromInputWithLabelAndSvg,
} from './custom-form-input.styles';

interface IFormInputProps {
  label: ReactNode;
  children: ReactNode;
  value: number;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CustomFormInput: FC<IFormInputProps> = ({
  label,
  children,
  value,
  handleChange,
}) => (
  <FormGroup>
    <FormInputLabel>{label}</FormInputLabel>
    <FromInputWithLabelAndSvg>
      <FormInput
        type="number"
        placeholder={Number(value).toString()}
        onChange={handleChange}
        min={0}
      />
      {children}
    </FromInputWithLabelAndSvg>
  </FormGroup>
);

export default CustomFormInput;
