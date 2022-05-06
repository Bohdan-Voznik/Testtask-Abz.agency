import styled from '@emotion/styled';
import { theme } from 'js/theme';

export const Wrapper = styled.div`
  padding: 13px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Button = styled.a`
  display: block;
  width: 100px;
  padding: 4px 0;
  border-radius: 80px;

  color: ${theme.textColor.primary};
  text-align: center;

  background-color: ${theme.buttonColor.primary};

  &:hover,
  &:focus {
    background-color: ${theme.buttonColor.hover};
  }
`;
