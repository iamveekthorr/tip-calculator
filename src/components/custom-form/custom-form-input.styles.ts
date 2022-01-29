import styled from 'styled-components';

import { colors } from '../../lib/colors';

export const FormGroup = styled.div`
  & :first-child {
    display: block;
  }
`;

export const FromInputWithLabelAndSvg = styled.div`
  position: relative;
  & > svg {
    position: absolute;
    top: 50%;
    left: 1.5rem;
    transform: translateY(-50%);
    pointer-events: none;
  }
`;

export const FormInputLabel = styled.label<{ isError?: boolean }>`
  color: ${colors.darkGrayishCyan};
  font-size: 1.5rem;
  font-weight: bold;
  pointer-events: none;
  text-transform: capitalize;
  margin-bottom: 1rem;
  ${({ isError }) => isError && `color: ${colors.danger};`}
`;

export const FormLabelContainer = styled.div`
  display: flex !important;

  & > :first-child {
    margin-right: auto;
  }
`;

export const FormInput = styled.input`
  background-color: ${colors.lighterGrayishCyan};
  color: ${colors.darkerGrayishCyan};
  font-size: 2.4rem;
  text-align: right;
  padding: 1rem;
  width: 100%;
  border: none;
  border-radius: 3px;
  font-family: inherit;

  &:focus {
    outline: none;
    border: 0.5px solid ${colors.coralGreen};
  }

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
`;
