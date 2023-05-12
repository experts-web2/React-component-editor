import React from "react";
import PropTypes from "prop-types";

function MyComponent({ name, age }: any) {
  return (
    <div>
      <h2>My Component</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}

MyComponent.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
};

MyComponent.defaultProps = {
  name: "John Doe",
  age: 30,
};

export default MyComponent;
