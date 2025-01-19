// import React from "react";
// import "../App.css";

// const Footer = () => {
//   return <footer>&copy; 2025 Rare Disease Trials. All Rights Reserved.</footer>;
// };

// export default Footer;
// import React from "react";
// import "../App.css";

// const Footer = () => {
//   return <footer>&copy; 2025 Rare Disease Trials | Designed with ❤️</footer>;
// };

// export default Footer;


// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer>
//       <p>&copy; 2025 RareTrials. All Rights Reserved.</p>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">RareTrials</div>
      <div className="footer-links">
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
        <a href="#contact">Contact Us</a>
      </div>
      <p className="footer-copy">© 2025 RareTrials. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
