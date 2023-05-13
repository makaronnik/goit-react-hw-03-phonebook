import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ContactFormStyled from './ContactFormStyled';
import FormGroup from 'components/UI/FormGroup/FormGroup';
import Button from 'components/UI/Button/Button';

export class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { value, name } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.addContact(this.state);

    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <ContactFormStyled onSubmit={this.handleSubmit}>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </FormGroup>

        <FormGroup>
          <label htmlFor="number">Number</label>
          <input
            type="tel"
            id="number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </FormGroup>

        <Button type="submit">Add contact</Button>
      </ContactFormStyled>
    );
  }
}

export default ContactForm;
