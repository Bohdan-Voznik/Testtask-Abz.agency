import { Element } from 'react-scroll';
import PropTypes from 'prop-types';

import { Section, Title, List, Button } from './Users.styled';
import { Container } from 'components/Container/Container';
import { User } from './User/User';
import { Preloader } from 'components/SignInForm/Preloader/Preloader';

export const Users = ({
  users,
  showMore,
  isShowSignInButton,
  isShowPreloader,
}) => {
  console.log(users);
  return (
    <Section>
      <Element name="users">
        <Container>
          <Title>Working with GET request</Title>
          <List>
            {users.map(({ email, id, name, phone, photo, position }) => {
              return (
                <User
                  key={id}
                  email={email}
                  name={name}
                  phone={phone}
                  photo={photo}
                  position={position}
                />
              );
            })}
          </List>
          {isShowSignInButton && (
            <Button type="button" onClick={showMore}>
              Show more
            </Button>
          )}
          {isShowPreloader && <Preloader />}
        </Container>
      </Element>
    </Section>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.exact({
      email: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      position_id: PropTypes.number.isRequired,
      registration_timestamp: PropTypes.number.isRequired,
    })
  ),
  showMore: PropTypes.func.isRequired,
  isShowSignInButton: PropTypes.bool.isRequired,
  isShowPreloader: PropTypes.bool.isRequired,
};
