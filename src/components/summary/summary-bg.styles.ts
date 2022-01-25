import styled from 'styled-components';

import { colors } from '../../lib/colors';

export const AmountAndTotalBackground = styled.div`
  border-radius: 1.5rem;
  background-color: ${colors.veryDarkCyan};
  display: flex;
  flex-direction: column;
  padding: 3rem;

  & > *:not(:last-child) {
    margin-bottom: 7rem;
  }

  @media only screen and (min-width: 90em) {
    width: 50%;
  }
`;

export const TipAmountAndTotalContainer = styled.div`
  & > :not(:last-child) {
    margin-bottom: 1rem;
  }
`;
