import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { Element } from 'react-scroll';

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
import {
  validationName,
  validationEmail,
  validationPhone,
  validationFIle,
} from 'js/checkedError';

const debounce = require('lodash.debounce');

export const SignInForm = ({ onSuccess, notifi }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [positionId, setPositionId] = useState(null);
  const [file, setFile] = useState(null);

  const [nameError, setNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [fileError, setFileError] = useState(null);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [positions, setPositions] = useState(null);

  // ----------REF to debounce function----------
  const debounceName = useRef(
    debounce(value => {
      const fail = validationName(value);
      console.log(fail);
      setNameError(fail);
    }, 1000)
  ).current;

  const debounceEmail = useRef(
    debounce(value => {
      const fail = validationEmail(value);
      console.log(fail);
      setEmailError(fail);
    }, 1000)
  ).current;

  const debouncePhone = useRef(
    debounce(value => {
      const fail = validationPhone(value);
      console.log(fail);
      setPhoneError(fail);
    }, 1000)
  ).current;
  // --------------------

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
  };

  const handleInputChange = async e => {
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
        console.log('first');
        debounceName(value.trim());
        break;
      case 'email':
        setEmail(value);
        debounceEmail(value.trim());
        break;
      case 'phone':
        setPhone(value);
        debouncePhone(value.trim());
        break;
      case 'file':
        setFile(value);
        const fail = await validationFIle(value);
        console.log(fail);
        setFileError(fail);
        break;

      default:
        break;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
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

  const isAllFieldsAreCompleted =
    Boolean(name) &&
    Boolean(email) &&
    Boolean(phone) &&
    Boolean(file) &&
    Boolean(positionId);

  const isNotValidationErrors = !(
    Boolean(nameError) &&
    Boolean(emailError) &&
    Boolean(phone) &&
    Boolean(fileError)
  );

  const isSignInDisabled = !(isAllFieldsAreCompleted && isNotValidationErrors);

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
                      error={Boolean(nameError)}
                      message={nameError}
                    />
                    <Input
                      type="email"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                      label="Email"
                      error={Boolean(emailError)}
                      message={emailError}
                    />
                    <Input
                      type="tel"
                      name="phone"
                      value={phone}
                      onChange={handleInputChange}
                      label="Phone"
                      error={Boolean(phoneError)}
                      message={
                        phoneError ? phoneError : '+38 (XXX) XXX - XX - XX'
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
                    error={Boolean(fileError)}
                    message={fileError}
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
