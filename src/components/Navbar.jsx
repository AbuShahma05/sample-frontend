// import React from 'react'
// import { Link } from 'react-router-dom'

// const Navbar = () => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//   <a className="navbar-brand" href="#">Mern</a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>
//   <div className="collapse navbar-collapse" id="navbarNav">
//     <ul className="navbar-nav">
      
//       <li className="nav-item">
//         <Link to= '/' className="nav-link" >Create Post</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to='/read'>All Post</Link>
//       </li>
      
//     </ul>
//   </div>
// </nav>
//     </>
//   )
// }

// export default Navbar


import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/"><b>Home</b></Link> {/* ✅ Fixed navigation */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse" // ✅ Fixed Bootstrap 5 attributes
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Create Post
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/read">
                All Posts
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

