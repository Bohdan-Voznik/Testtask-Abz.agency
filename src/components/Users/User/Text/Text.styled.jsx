import styled from '@emotion/styled';
import ReactTooltip from 'react-tooltip';
import { theme } from 'js/theme';

export const P = styled.p`
  margin: 0 auto 20px auto;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  cursor: ${({ isEllipsis }) => (isEllipsis ? 'pointer' : 'auto')};
`;

export const Tooltip = styled(ReactTooltip)`
  max-width: 50vw !important;
  padding: 3px 16px !important;

  overflow-wrap: break-word !important;

  color: ${theme.textColor.secondary} !important;
  background-color: rgba(0, 0, 0, 0.87) !important;

  border-radius: 4px !important;

  &.place-top {
    &:after {
      display: none;
    }
  }

  &.place-bottom {
    &:after {
      display: none;
    }
  }

  &.place-left {
    &:after {
      display: none;
    }
  }

  &.place-right {
    &:after {
      display: none;
    }
  }
`;
