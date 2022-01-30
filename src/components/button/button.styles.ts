/* eslint-disable implicit-arrow-linebreak */
import styled from 'styled-components';

import { colors } from '../../lib/colors';

export const Btn = styled.button<{ isActive: boolean }>`
  display: inline-grid;
  place-items: center;
  padding: 1rem 2rem;
  text-transform: uppercase;
  background-color: ${colors.darkGrayishCyan};

  outline: none;
  border: none;
  font-family: inherit;
  font-weight: bolder;
  border-radius: 3px;
  cursor: not-allowed;

  ${({ isActive }) =>
    isActive && `background-color: ${colors.coralGreen};cursor: pointer;`}
`;
