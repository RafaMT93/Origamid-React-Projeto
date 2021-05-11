import React from 'react';

const Error = ({ error }) => {
  if (!error) return null;
  return (
    <p style={{ color: '#f30', margin: '1rem 0', fontWeight: 'bold' }}>
      {error}
    </p>
  );
};

export default Error;
