import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import {
  Wrap,
  Wrapper,
  Input,
  FileLable,
  FileName,
  MessageWrapper,
  Message,
} from './File.styled';

export const File = ({ error, message, file, onChange }) => {
  return (
    <Wrap>
      <Wrapper>
        <Input
          type="file"
          id="file"
          name="file"
          accept="image/jpeg"
          error={error}
          onChange={onChange}
        />
        <FileLable htmlFor="file" error={error}>
          Upload
        </FileLable>
        <FileName error={error} isFielChange={Boolean(file?.name)}>
          {file?.name ? file.name : 'Upload your photo'}
        </FileName>
      </Wrapper>
      {message && (
        <MessageWrapper>
          {message.map(text => {
            return (
              <Message key={nanoid()} error={error}>
                {text}
              </Message>
            );
          })}
        </MessageWrapper>
      )}
    </Wrap>
  );
};

File.propTypes = {
  error: PropTypes.bool.isRequired,
  message: PropTypes.arrayOf(PropTypes.string),
  file: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};
