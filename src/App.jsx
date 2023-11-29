import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import Rooms from './pages/Rooms/Rooms';
import Treatments from './pages/Treatments/Treatments';
import Cart from './pages/Cart/Cart';
import RoomDetails from './pages/RoomDetails/RoomDetails';

function App() {

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path='/rooms/:roomId' element={<RoomDetails/>}/>
          <Route path="/treatments" element={<Treatments />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
