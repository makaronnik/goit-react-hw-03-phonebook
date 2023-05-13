import styled from 'styled-components';

const FormGroup = styled.div.attrs({ className: 'FormGroup' })`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  & label {
    margin-bottom: 7px;

    font-size: 18px;
    font-weight: 500;
  }

  & input {
    outline: none;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:focus,
    &:hover,
    &:focus-visible {
      border-color: #2964d277;
      box-shadow: 0 0 6px 2px rgb(89, 149, 245);
    }
  }
`;

export default FormGroup;
