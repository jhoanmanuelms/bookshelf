import React, {PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const BookForm = ({ book, allGenres, onSave, onChange, loading, errors }) => {

  return (
    <form>
      <h1>Manage Book</h1>
      <TextInput
        name="title"
        label="Title"
        value={book.title}
        onChange={onChange}
        error={errors.title}/>
      <TextInput
        name="author"
        label="Author"
        value={book.author}
        onChange={onChange}
        error={errors.author}/>
      <SelectInput
        name="genre"
        label="Genre"
        value={book.genre}
        defaultOption="Select Genre"
        options={allGenres}
        onChange={onChange}
        error={errors.genre} />
      <input
        type="submit"
        disable={loading}
        value={loading ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave} />
    </form>
  );
};

BookForm.propTypes = {
  book: PropTypes.object.isRequired,
  allGenres: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  errors: PropTypes.object,
};

export default BookForm;
