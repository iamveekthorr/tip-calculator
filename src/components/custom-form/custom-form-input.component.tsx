/* eslint-disable react/require-default-props */
import { ChangeEvent, FC, ReactNode } from 'react';

import {
  FormInputLabel,
  FormGroup,
  FormInput,
  FromInputWithLabelAndSvg,
  FormLabelContainer,
} from './custom-form-input.styles';

interface IFormInputProps {
  label: ReactNode;
  children: ReactNode;
  value: number;
  isError?: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CustomFormInput: FC<IFormInputProps> = ({
  label,
  children,
  value,
  isError,
  handleChange,
}) => (
  <FormGroup>
    <FormLabelContainer>
      <FormInputLabel>{label}</FormInputLabel>
      {isError && <FormInputLabel isError>can&apos;t be 0</FormInputLabel>}
    </FormLabelContainer>
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
