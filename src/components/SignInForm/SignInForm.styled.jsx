import styled from '@emotion/styled';
import { theme } from 'js/theme';

export const Section = styled.section`
  padding-top: 140px;
  padding-bottom: 100px;

  ${theme.breakpoint.tablet} {
    padding-top: 144px;
  }
`;

export const Wrapper = styled.div`
  ${theme.breakpoint.tablet} {
    padding-left: 162px;
    padding-right: 162px;
  }

  ${theme.breakpoint.desktop} {
    padding-left: 262px;
    padding-right: 262px;
  }

  ${theme.breakpoint.ultra} {
    padding-left: 395px;
    padding-right: 395px;
  }
`;
export const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;

export const SelectTitle = styled.p`
  display: block;
  margin: 43px 0 11px 0;
`;

export const RadioButtonList = styled.div`
  display: flex;
  flex-direction: column;
`;
export const RadioButtonItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 7px;
  }
`;

export const RadioButtonLabel = styled.label`
  position: relative;
  padding-left: 32px;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);

    display: block;
    width: 20px;
    height: 20px;

    border-radius: 50%;
    border: 1px solid #d0cfcf;
  }
`;

export const RadioButton = styled.input`
  /* ----------visually-hidden---------- */
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0 0 0 0);
  /* -------------------- */

  &:checked + label::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 6px;
    transform: translateY(-50%);

    display: block;
    width: 10px;
    height: 10px;

    border-radius: 50%;
    background-color: #00bdd3;
  }

  &:checked + label::before {
    border: 1px solid #00bdd3;
  }
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100px;
  padding: 4px 0;
  margin: 50px auto 0 auto;

  font-family: 'Nunito';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.625;
  color: rgba(0, 0, 0, 0.87);
  text-align: center;

  background-color: ${theme.buttonColor.primary};
  border-radius: 80px;

  &:hover {
    cursor: pointer;
  }

  &:hover,
  &:focus {
    background-color: ${theme.buttonColor.hover};
  }

  &:disabled {
    cursor: auto;
    background-color: ${theme.buttonColor.disabled};
    color: ${theme.textColor.secondary};
  }
`;
