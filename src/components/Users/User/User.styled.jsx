import styled from '@emotion/styled';
import { theme } from 'js/theme';

export const Item = styled.li`
  box-sizing: border-box;
  padding: 20px;
  background-color: #ffffff;

  border-radius: 10px;

  text-align: center;

  @media screen and (max-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  ${theme.breakpoint.tablet} {
    margin: 8px;
    width: 344px;
  }

  ${theme.breakpoint.desktop} {
    margin: 14.5px;
    width: 282px;
  }

  ${theme.breakpoint.ultra} {
    width: 370px;
  }
`;

export const Avatar = styled.img`
  margin: 0 auto 20px auto;

  border-radius: 50%;
`;
