import { BackgroundImg, Wrapper, Title, Text, Button } from './Hero.styled';

import { scroller } from 'react-scroll';

import { Container } from 'components/Container/Container';

export const Hero = () => {
  return (
    <section>
      <BackgroundImg>
        <Container>
          <Wrapper>
            <Title>Test assignment for front-end developer</Title>
            <Text>
              What defines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understanding of User
              design thinking as they'll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-End Development keeps evolving.
            </Text>
            <Button
              href="#"
              onClick={() => {
                scroller.scrollTo('signin', {
                  duration: 800,
                  delay: 0,
                  smooth: 'easeInOutQuart',
                });
              }}
            >
              Sign up
            </Button>
          </Wrapper>
        </Container>
      </BackgroundImg>
    </section>
  );
};
