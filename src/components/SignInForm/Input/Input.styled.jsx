import styled from '@emotion/styled';

export const Item = styled.div`
  display: block;
  position: relative;

  &:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const Label = styled.label`
  position: absolute;

  transition-property: left, top, font-size;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  padding: ${({ isTextInside }) => {
    return isTextInside ? '0 4px' : '0 0';
  }};
  top: ${({ isTextInside }) => {
    return isTextInside ? '-7px' : '14px';
  }};
  left: ${({ isTextInside }) => {
    return isTextInside ? '12px' : '16px';
  }};

  font-size: ${({ isTextInside }) => {
    return isTextInside ? '12px' : '16px';
  }};
  line-height: ${({ isTextInside }) => {
    return isTextInside ? '1.166' : '1.625';
  }};
  color: ${({ error }) => {
    return error ? '#CB3D40' : '#7e7e7e';
  }};

  background-color: #f8f8f8;

  &:hover {
    cursor: text;
  }
`;

export const Field = styled.input`
  width: 100%;

  padding: ${({ error }) => {
    return error ? '13px 16px' : '14px 16px';
  }};

  border: ${({ error }) => {
    return error ? '2px solid #CB3D40' : '1px solid #d0cfcf';
  }};
  border-radius: 4px;

  font-family: 'Nunito';
  font-weight: 400;
  font-size: 16px;
  line-height: 1.625;

  background-color: #f8f8f8;

  &:focus {
    outline: none;
  }

  &:focus + label {
    padding: 0 4px;
    left: 12px;
    top: -7px;
    font-size: 12px;
    line-height: 1.166;
  }
`;

export const Message = styled.p`
  display: block;
  position: absolute;
  left: 16px;
  bottom: -18px;

  font-size: 12px;
  line-height: 1.166;
  color: ${({ error }) => {
    return error ? '#CB3D40' : '#7e7e7e';
  }};
`;
