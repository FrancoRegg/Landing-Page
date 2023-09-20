import React from "react";


const NavBar = () => {
  return (
  <nav className="navbar navbar-expand-lg bg-dark py-3 navbar-dark">
    <div className="container d-flex justify-content-between">

      <a className="navbar-brand fs-3 text-white" href="#">Start Bootstrap</a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent"> 
        <div className="navbar-nav fs-5">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
          <a className="nav-link active" aria-current="page" href="#">About</a>
          <a className="nav-link active" aria-current="page" href="#">Service</a>
          <a className="nav-link active" aria-current="page" href="#">Constact</a>
        </div>  
      </div>
    </div>
  </nav>
  );
}

export default NavBar;