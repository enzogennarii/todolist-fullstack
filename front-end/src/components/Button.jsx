import PropTypes from 'prop-types';

function Button({
  className = '',
  name = '',
  onClick = () => {},
  type = 'button',
  text = 'Adicionar',
}) {
  return (
    <button
      className={ className }
      name={ name }
      onClick={ onClick }
      type={ type }
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
