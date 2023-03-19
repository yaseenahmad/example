import './assets/scss/app.scss';
import { Routes, Route } from 'react-router';
import { Home, About, Contact } from './views';
import { LayoutFull } from './layouts';

function App() {
  return (
    <LayoutFull>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </LayoutFull>
  );
}

export default App;
