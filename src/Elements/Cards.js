import styled from 'styled-components';
import { transition, elevation, colors } from 'Utilities';

export const Card = styled.div`
  background: white;
  border-radius: 5px;
  padding: 15px;
  max-width: 320px;
  margin: 0 auto;
  margin-top: 100px;
  color: ${colors.black};
  ${elevation[4]};
  ${transition({
    property: 'box-shadow'
  })};
  &:hover {
    ${elevation[5]};
  }
`;
