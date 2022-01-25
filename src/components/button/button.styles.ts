import styled from 'styled-components';

import { colors } from '../../lib/colors';

export const Btn = styled.button`
  display: inline-grid;
  place-items: center;
  padding: 1rem 2rem;
  text-transform: uppercase;
  background-color: ${colors.coralGreen};
  outline: none;
  border: none;
  font-family: inherit;
  font-weight: bolder;
  border-radius: 3px;
  cursor: pointer;
`;
