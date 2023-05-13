import styled from 'styled-components';

const ContactFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  max-width: 320px;
  padding: 10px;

  border: 1px solid #000;

  & .FormGroup {
    &:not(:first-child) {
      margin-top: 20px;
    }
  }

  & button {
    margin-top: 25px;
  }
`;

export default ContactFormStyled;
