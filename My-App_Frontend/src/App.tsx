import React, { useState } from 'react';
import { Login } from "./authenticated/Login";
import { Register } from "./authenticated/Register";
import { Dashboard } from "./authenticated/Dashboard";
import Blog from './home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RealEstateForRent from './home/RealEstateForRent';
import AboutUs from './home/AboutUs';
import Services from './home/Services';
import TechInsights from './home/TechInsights';
import LatestPosts from './home/LatestPosts';
import ContactUs from './home/ContactUs';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="/" element={<Blog />} />
        <Route path="/realEstateForRent" element={<RealEstateForRent />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/techInsights" element={<TechInsights />} />
        <Route path="/latestPosts" element={<LatestPosts />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
    </div>
  );
};

export default App;

// import React, { useEffect, useState } from 'react';
// import { Routes, Route, Link } from 'react-router-dom';

// const Home = () => {
//   const [data, setData] = useState<any[]>([]);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_API_URL}/posts?_limit=3`)
//       .then((res) => res.json())
//       .then(setData)
//       .catch((err) => setError(err.message));
//   }, []);

//   return (
//     <div>
//       <h2>Home</h2>
//       {error && <p style={{ color: 'red' }}>Fehler: {error}</p>}
//       <ul>
//         {data.map((post) => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const About = () => <h2>About Page</h2>;

// export default function App() {
//   return (
//     <div>
//       <h1>Vite Test App</h1>
//       <nav>
//         <Link to="/">Home</Link> | <Link to="/about">About</Link>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </div>
//   );
// }
