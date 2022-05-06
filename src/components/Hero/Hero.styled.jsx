import styled from '@emotion/styled';
import { theme } from 'js/theme';

import bgImgMob from 'img/hero-bg-mobile.jpg';
import bgImgTab from 'img/hero-bg-tablet.jpg';
import bgImgDesk from 'img/hero-bg-decktop.jpg';
import bgImgUltra from 'img/hero-bg-ultra.jpg';

export const BackgroundImg = styled.div`
  margin: 0 auto;
  width: 360px;

  background-size: cover;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${bgImgMob});

  ${theme.breakpoint.tablet} {
    width: 768px;

    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${bgImgTab});
  }

  ${theme.breakpoint.desktop} {
    width: 1024px;

    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${bgImgDesk});
  }

  ${theme.breakpoint.ultra} {
    width: 1170px;

    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url(${bgImgUltra});
  }
`;

export const Wrapper = styled.div`
  padding-top: 40px;
  padding-bottom: 71px;

  ${theme.breakpoint.tablet} {
    padding: 89px 162px 88px 162px;
  }

  ${theme.breakpoint.desktop} {
    padding: 164px 262px 163px 262px;
  }

  ${theme.breakpoint.ultra} {
    padding: 164px 395px 163px 395px;
  }
`;
export const Title = styled.h1`
  margin-bottom: 21px;

  text-align: center;
  color: ${theme.textColor.secondary};
`;

export const Text = styled.p`
  margin-bottom: 32px;

  text-align: center;
  color: ${theme.textColor.secondary};
`;

export const Button = styled.a`
  display: block;
  width: 100px;
  padding: 4px 0;
  margin: 0 auto;
  border-radius: 80px;

  color: ${theme.textColor.primary};
  text-align: center;

  background-color: ${theme.buttonColor.primary};

  &:hover,
  &:focus {
    background-color: ${theme.buttonColor.hover};
  }
`;
