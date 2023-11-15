import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage';
import Rooms from './pages/Rooms';

function App(props) {
  return (
    <BrowserRouter>
      <Layout background={'background-image'}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<Rooms />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
