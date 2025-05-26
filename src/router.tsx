import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layouts'
import Contact from './views/Contact';
import Home from './views/Home';
import Help from './views/Help';
import About from './views/About';


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={ <Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path='/ayuda' element={<Help/>}/>
          <Route path='/acerca' element={<About/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
