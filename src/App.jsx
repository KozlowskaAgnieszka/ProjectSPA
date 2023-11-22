import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import Rooms from './pages/Rooms';
import Treatments from './pages/Treatments';

function App() {
  return (
    <BrowserRouter>
      <Layout background={'background-image'}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/treatments" element={<Treatments />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
