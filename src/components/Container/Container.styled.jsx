import styled from '@emotion/styled';
import { theme } from 'js/theme';

export const Wrapper = styled.div`
  width: 328px;
  margin: 0 auto;
  padding: 0 16px;
  outline: 1px solid red;

  ${theme.breakpoint.tablet} {
    width: 704px;
    padding: 0 32px;
  }

  ${theme.breakpoint.desktop} {
    width: 904px;
    padding: 0 60px;
  }

  ${theme.breakpoint.ultra} {
    width: 1170px;
    padding: 0 0;
  }
`;
