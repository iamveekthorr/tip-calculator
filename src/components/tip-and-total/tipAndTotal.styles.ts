import styled from 'styled-components';

import { colors } from '../../lib/colors';

export const PriceAndLabelContainer = styled.div`
  display: flex;
  align-items: center;

  & > :first-child {
    margin-right: auto;
  }
`;

export const Label = styled.p`
  color: ${colors.white};
  text-transform: capitalize;
  font-weight: 400;
  font-size: 1.6rem;
`;

export const Price = styled.p`
  color: ${colors.coralGreen};
  font-weight: 700;
  font-size: 6rem;
`;

export const LabelAndPerPerson = styled.div`
  display: flex;
  flex-direction: column;

  & > :last-child {
    color: ${colors.coralGreen};
  }
`;
