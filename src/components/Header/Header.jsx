
import { Wrapper, List, Item, Button } from './Header.styled';

import { scroller } from 'react-scroll';

import { Container } from 'components/Container/Container';

import { ReactComponent as Logo } from 'img/Logo.svg';

export const Header = () => {
  return (
    <header>
      <Container>
        <Wrapper>
          <Logo />
          <nav>
            <List>
              <Item>
                <Button
                  href="#"
                  onClick={() => {
                    scroller.scrollTo('users', {
                      duration: 800,
                      delay: 0,
                      smooth: 'easeInOutQuart',
                    });
                  }}
                >
                  Users
                </Button>
              </Item>
              <Item>
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
              </Item>
            </List>
          </nav>
        </Wrapper>
      </Container>
    </header>
  );
};
