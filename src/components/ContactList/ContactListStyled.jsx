import styled from 'styled-components';

const ContactListStyled = styled.ul`
  & li {
    font-size: 18px;
    font-weight: 500;

    &:not(:last-child) {
      margin-bottom: 10px;
    }

    & div {
      display: flex;
      align-items: center;

      & button {
        margin-left: 15px;
      }
    }
  }
`;

export default ContactListStyled;
