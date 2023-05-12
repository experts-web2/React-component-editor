const componentString = `import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { title, color = 'red', className, onClick } = props;

  return (
    <button className={className} style={{ color }} onClick={onClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  color: 'red',
};

export default Button;`

export default componentString;