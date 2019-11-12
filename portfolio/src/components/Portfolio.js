import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
  <div>
    This is the Portfolio Page. Click any of these
    <ul>
      <li>
        <Link to='/portfolio/1'>ItemOne</Link>
      </li>
      <li>
        <Link to='/portfolio/2'>ItemTwo</Link>
      </li>
    </ul>
  </div>
);

export default Portfolio;
