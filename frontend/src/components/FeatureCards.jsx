// import React from "react";
// import "./FeatureCards.css";

// const features = [
//   {
//     title: "Secure Data Sharing",
//     description: "End-to-end encrypted data exchange across institutions.",
//   },
//   {
//     title: "Global Collaboration",
//     description: "Connect with research centers worldwide.",
//   },
//   {
//     title: "Real-time Insights",
//     description: "Analyze clinical trial data in real-time.",
//   },
// ];

// const FeatureCards = () => {
//   return (
//     <section className="features" id="features">
//       {features.map((feature, index) => (
//         <div className="card" key={index}>
//           <h3>{feature.title}</h3>
//           <p>{feature.description}</p>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default FeatureCards;

// import React, { useState } from "react";
// import "./SearchBar.css";

// const SearchBar = () => {
//   const [query, setQuery] = useState("");

//   const handleSearch = () => {
//     if (query.trim()) {
//       alert(`Searching for "${query}"...`);
//     }
//   };

//   return (
//     <div className="search-bar-container">
//       <input
//         type="text"
//         placeholder="Search for trials..."
//         className="search-bar"
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//       />
//       <button className="search-button" onClick={handleSearch}>
//         Search
//       </button>
//     </div>
//   );
// };

// export default SearchBar;

import React from "react";
import "./FeatureCards.css";

const features = [
  {
    title: "Secure Data Sharing",
    description: "Encrypted and secure data exchange for clinical trials.",
  },
  {
    title: "Global Collaboration",
    description: "Connecting research institutions worldwide.",
  },
  {
    title: "Accelerated Discovery",
    description: "Faster treatment discovery with streamlined data access.",
  },
];

const FeatureCards = () => {
  return (
    <section className="features-section" id="features">
      <h2 className="features-title">Key Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureCards;
