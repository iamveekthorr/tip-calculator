import styled from 'styled-components';

import { colors } from '../../lib/colors';

export const AppName = styled.h1`
  font-size: 2rem;
  color: ${colors.darkGrayishCyan};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1rem;
  font-family: 'Space Mono';
  @media only screen and (min-width: 9em) {
    margin-bottom: 4rem;
  }
  & > span {
    display: block;
  }
`;
