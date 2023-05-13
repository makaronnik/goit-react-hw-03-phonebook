import PropTypes from 'prop-types';
import FormGroup from 'components/UI/FormGroup/FormGroup';

const Filter = ({ filter, filterContacts }) => {
  return (
    <FormGroup>
      <label htmlFor="filter">Find contacts by name</label>
      <input
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={({ target }) => filterContacts(target.value)}
      />
    </FormGroup>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterContacts: PropTypes.func.isRequired,
};

export default Filter;
