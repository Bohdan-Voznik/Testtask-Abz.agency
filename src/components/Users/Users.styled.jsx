import styled from '@emotion/styled';
import { theme } from 'js/theme';

export const Section = styled.section`
  padding-top: 140px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;

export const List = styled.ul`
  ${theme.breakpoint.tablet} {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
  }

  ${theme.breakpoint.desktop} {
    margin: -14.5px;
  }
`;
export const Button = styled.button`
  display: block;
  padding: 4px 18px;
  margin: 50px auto 0 auto;

  font-family: 'Nunito';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.625;
  color: ${theme.textColor.primary};

  background-color: ${theme.buttonColor.primary};
  border-radius: 80px;

  &:hover {
    cursor: pointer;
  }
  &:hover,
  &:focus {
    background-color: ${theme.buttonColor.hover};
  }
`;
