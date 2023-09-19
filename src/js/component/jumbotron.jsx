import React from 'react';

const Jumbotron = () => {

  return(
  <div className='jumbotron bg-light pb-5 px-5'>
    <h1>Hello, world!</h1>
    <p>
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <p>
      <Button bsStyle="primary">Learn more</Button>
    </p>
  </div>
  )
};

export default Jumbotron;