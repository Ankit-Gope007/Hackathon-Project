// import React from "react";
// import DarkModeToggle from "./DarkModeToggle";
// import "./Navbar.css";

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="logo">RareTrials</div>
//       <ul className="nav-links">
//         <li>
//           <a href="#features">Features</a>
//         </li>
//         <li>
//           <a href="#about">About</a>
//         </li>
//         <li>
//           <a href="#contact">Contact</a>
//         </li>
//       </ul>
//       <DarkModeToggle />
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">RareTrials</div>
      <div className="navbar-links">
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
