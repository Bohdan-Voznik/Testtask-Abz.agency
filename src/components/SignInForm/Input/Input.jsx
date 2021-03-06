import { Item, Label, Field, Message } from './Input.styled';
import PropTypes from 'prop-types';

export const Input = ({
  label,
  error,
  message,
  onChange,
  type,
  name,
  value,
}) => {
  return (
    <Item>
      <Field
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        id={name}
        error={error}
      />
      <Label htmlFor={name} isTextInside={value} error={error}>
        {label}
      </Label>
      {message && <Message error={error}>{message}</Message>}
    </Item>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.bool.isRequired,
  message: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
