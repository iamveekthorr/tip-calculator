import styled from 'styled-components';

import { colors } from '../../lib/colors';

export const CalculatorBg = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 2rem;
  box-shadow: 0px 7px 14px rgba(113, 190, 198, 0.3);
  padding: 2rem;
  margin-bottom: 2rem;
  @media only screen and (min-width: 90em) {
    width: 80rem;
    margin-bottom: 4rem;
    flex-direction: row;
  }
`;
