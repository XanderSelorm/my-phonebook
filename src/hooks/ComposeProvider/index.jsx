import React from 'react';

const Compose = ({ components = [], children }) => {
  return (
    <>
      {components.reduceRight((acc, Composer) => {
        return <Composer>{acc}</Composer>;
      }, children)}
    </>
  );
};
export default Compose;
