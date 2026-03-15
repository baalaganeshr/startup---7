/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Philosophy from './pages/Philosophy';
import Craftsmanship from './pages/Craftsmanship';
import Specifications from './pages/Specifications';
import Collection from './pages/Collection';

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="philosophy" element={<Philosophy />} />
          <Route path="craftsmanship" element={<Craftsmanship />} />
          <Route path="specifications" element={<Specifications />} />
          <Route path="collection" element={<Collection />} />
        </Route>
      </Routes>
    </Router>
  );
}
