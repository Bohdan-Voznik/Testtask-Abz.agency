import styled from '@emotion/styled';
import { theme } from 'js/theme';

export const Section = styled.section`
  padding-top: 140px;
  padding-bottom: 100px;

  text-align: center;

  ${theme.breakpoint.tablet} {
    padding-top: 144px;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;
