import styled from '@emotion/styled';

import { ReactComponent as Svg } from 'img/Preloader.svg';

export const Loader = styled(Svg)`
  box-sizing: border-box;
  display: block;
  margin: 43px auto 0 auto;

  border-radius: 50%;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
