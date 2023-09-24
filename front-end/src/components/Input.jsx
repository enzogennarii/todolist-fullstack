import PropTypes from 'prop-types';

function Input({
  onChange = () => {},
  placeholder = '',
  type = 'text',
  value = '',
}) {
  return (
    <input
      onChange={ onChange }
      placeholder={ placeholder }
      type={ type }
      value={ value }
    />
  );
}

Input.propTypes = {
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default Input;
