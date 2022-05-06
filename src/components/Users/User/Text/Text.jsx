import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';

import { P, Tooltip } from './Text.styled';

export const Text = ({ text }) => {
  const textRef = useRef(null);
  const [isEllipsis, setIsEllipsis] = useState(null);
  const [tooltip, showTooltip] = useState(true);

  useEffect(() => {
    setIsEllipsis(textRef.current.scrollWidth > textRef.current.clientWidth);
  }, []);

  const id = nanoid();

  return (
    <>
      <P
        ref={textRef}
        data-for={id}
        data-tip={text}
        isEllipsis={isEllipsis}
        onMouseEnter={() => showTooltip(true)}
        onMouseLeave={() => {
          showTooltip(false);
          setTimeout(() => showTooltip(true), 0);
        }}
      >
        {text}
      </P>
      {tooltip && isEllipsis && (
        <Tooltip id={id} place="bottom" multiline={true} />
      )}
    </>
  );
};

Text.propType = {
  text: PropTypes.string.isRequired,
};
