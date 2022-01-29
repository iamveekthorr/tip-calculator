/* eslint-disable operator-linebreak */
/* eslint-disable implicit-arrow-linebreak */
import styled from 'styled-components';

import { colors } from '../../lib/colors';

export const TipOptionSection = styled.div`
  display: grid;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: repeat(auto-fit, min(16rem, 50%));

  @media only screen and (min-width: 90em) {
    grid-template-columns: repeat(auto-fit, min(12rem, 50%));
  }
`;

export const TipOptionSectionAndTitle = styled.div`
  margin-bottom: 4rem;
  margin-top: 4rem;
`;

export const TipOptionTitle = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
  color: ${colors.darkGrayishCyan};
  text-transform: capitalize;
  margin-bottom: 1rem;
`;

export const TipOption = styled.input<{ isSelected?: boolean }>`
  background-color: ${colors.veryDarkCyan};
  padding: 1rem 2rem;
  color: ${colors.white};
  font-size: 2rem;
  border-radius: 3px;
  font-family: inherit;
  border: none;
  text-align: center;
  cursor: pointer;
  &:focus,
  &:focus-visible {
    outline: none;
  }
  ${({ isSelected }) =>
    isSelected &&
    `background-color: ${colors.coralGreen}; 
    color:${colors.darkGrayishCyan};
    font-weight: bold;`}
`;

export const CustomTipInput = styled(TipOption)`
  background-color: ${colors.lighterGrayishCyan};
  text-align: center;
  text-transform: capitalize;
  color: ${colors.darkerGrayishCyan};
  font-weight: bold;

  &:focus,
  &:focus-visible {
    text-align: right;
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
