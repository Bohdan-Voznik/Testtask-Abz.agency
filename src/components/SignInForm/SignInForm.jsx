import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Element } from 'react-scroll';
import Validation from 'js/checkedError';

import {
  Section,
  Title,
  SelectTitle,
  RadioButtonLabel,
  RadioButton,
  SubmitButton,
  Wrapper,
  RadioButtonList,
  RadioButtonItem,
} from './SignInForm.styled';

import { Input } from './Input/Input';
import { File } from './File/File';
import { Preloader } from './Preloader/Preloader';
import { Container } from 'components/Container/Container';
import { Success } from './Success/Success';

import { fetchPositions, createUser } from 'js/fetchApi';

export const SignInForm = ({ onSuccess, notifi }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [positionId, setPositionId] = useState(null);
  const [file, setFile] = useState(null);

  const [validationError, setValidationError] = useState(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [positions, setPositions] = useState(null);

  useEffect(() => {
    fetchPositions().then(({ positions }) => {
      setPositions(positions);
    });
  }, []);

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setPositionId(null);
    setFile(null);
    setValidationError(null);
  };

  const handleInputChange = e => {
    const currentTarget = e.currentTarget.name;
    let value = null;

    if (currentTarget !== 'file') {
      value = e.currentTarget.value;
    } else {
      value = e.currentTarget.files[0];
    }

    switch (currentTarget) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'file':
        setFile(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setValidationError(null);
    const validation = new Validation();
    const error = await validation.checkedError({
      name,
      email,
      phone,
      file,
    });
    if (Object.keys(error).length !== 0) {
      setValidationError(error);
      setLoading(false);
      return;
    }
    createUser({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      positionId,
      file,
    })
      .then(data => {
        setSuccess(true);
        onSuccess();
        resetForm();
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      })
      .catch(error => {
        const message = error?.response?.data?.message
          ? error.response.data.message
          : error.message;
        notifi(message);
      })
      .finally(() => setLoading(false));
  };

  const isSignInDisabled = !(
    Boolean(name) &&
    Boolean(email) &&
    Boolean(phone) &&
    Boolean(file) &&
    Boolean(positionId)
  );

  return (
    <>
      {success ? (
        <Success />
      ) : (
        <Section>
          <Element name="signin">
            <Container>
              <Wrapper>
                <Title>Working with POST request</Title>
                <form onSubmit={handleSubmit}>
                  <div>
                    <Input
                      type="text"
                      name="name"
                      value={name}
                      onChange={handleInputChange}
                      label="Your name"
                      error={Boolean(validationError?.name)}
                      message={validationError?.name}
                    />
                    <Input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      label="Email"
                      error={Boolean(validationError?.email)}
                      message={validationError?.email}
                    />
                    <Input
                      type="tel"
                      name="phone"
                      value={phone}
                      onChange={handleInputChange}
                      label="Phone"
                      error={Boolean(validationError?.phone)}
                      message={
                        validationError?.phone
                          ? validationError.phone
                          : ['+38 (XXX) XXX - XX - XX']
                      }
                    />
                  </div>
                  <SelectTitle>Select your position</SelectTitle>
                  <RadioButtonList>
                    {positions &&
                      positions.map(({ id, name }) => {
                        return (
                          <RadioButtonItem key={id}>
                            <RadioButton
                              type="radio"
                              id={id}
                              value={id}
                              name="position"
                              onChange={() => setPositionId(id)}
                              checked={id === positionId}
                            />
                            <RadioButtonLabel htmlFor={id}>
                              {name}
                            </RadioButtonLabel>
                          </RadioButtonItem>
                        );
                      })}
                  </RadioButtonList>
                  <File
                    error={Boolean(validationError?.photo)}
                    message={validationError?.photo}
                    file={file}
                    onChange={handleInputChange}
                  />

                  {loading ? (
                    <Preloader />
                  ) : (
                    <SubmitButton type="submit" disabled={isSignInDisabled}>
                      Sign up
                    </SubmitButton>
                  )}
                </form>
              </Wrapper>
            </Container>
          </Element>
        </Section>
      )}
    </>
  );
};

SignInForm.propType = {
  onSuccess: PropTypes.func.isRequired,
  notifi: PropTypes.func.isRequired,
};
