import styled from '@emotion/styled';

export const Wrap = styled.div`
  position: relative;
  margin-top: 47px;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Input = styled.input`
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
`;

export const FileLable = styled.label`
  display: flex;
  align-items: center;

  padding: ${({ error }) => {
    return error ? '13px 15px' : '14px 15px';
  }};

  border: ${({ error }) => {
    return error ? '2px solid #CB3D40' : '1px solid rgba(0, 0, 0, 0.87)';
  }};

  border-radius: 4px 0 0 4px;

  &:hover {
    cursor: pointer;
  }
`;

export const FileName = styled.span`
  display: block;
  width: 100%;

  padding: ${({ error }) => {
    return error ? '13px 16px' : '14px 16px';
  }};

  border-top: ${({ error }) => {
    return error ? '2px solid #CB3D40' : '1px solid #d0cfcf';
  }};
  border-right: ${({ error }) => {
    return error ? '2px solid #CB3D40' : '1px solid #d0cfcf';
  }};
  border-bottom: ${({ error }) => {
    return error ? '2px solid #CB3D40' : '1px solid #d0cfcf';
  }};

  border-radius: 0 4px 4px 0;

  color: ${({ isFielChange }) => {
    return isFielChange ? 'rgba(0, 0, 0, 0.87)' : '#7e7e7e';
  }};
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
