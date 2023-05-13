import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button.attrs(({ small }) => ({
  className: small ? 'small' : '',
}))`
  padding: 2px 7px;

  background-color: #fff;

  border: 1px solid #ccc;
  border-radius: 5px;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: rgb(89, 149, 245);

    outline: none;
  }

  &.small {
    padding: 2px 7px 1px;

    font-size: 11px;
    block-size: 1.1rem;
  }
`;

Button.propTypes = {
  small: PropTypes.string,
};

export default Button;
