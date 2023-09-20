import React from 'react';

const Jumbotron = () => {
  return(
  <div className="container-fluid bg-light text-dark pb-5 px-5">
    <div className="container">
      <h1 className="display-4 py-2">Welcome to my Website</h1>
      <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda id, esse sunt enim tenetur nulla repellat optio. Sint a dolorem quibusdam ea, tempora ut pariatur obcaecati odit quasi praesentium perferendis! </p>
      <a href="#" className="btn btn-primary py-2">Call to action!</a>
    </div>
  </div>
  )
};

export default Jumbotron;