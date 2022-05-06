import PropTypes from 'prop-types';

import { Avatar, Item } from './User.styled';

import { Text } from './Text/Text';

import defaultAvatar from 'img/Default-avatar.svg';

export const User = ({ email, name, phone, photo, position }) => {
  return (
    <Item>
      <Avatar
        src={photo}
        alt={`Photo of ${name}`}
        width="70px"
        height="70px"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = defaultAvatar;
        }}
      />
      <Text text={name} />
      <Text text={position} />
      <Text text={email} />
      <Text text={phone} />
    </Item>
  );
};

User.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
};
