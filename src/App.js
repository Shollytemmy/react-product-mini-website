import {Routes, Route} from 'react-router-dom'
import products from './products.json'
// pages
import { Navbar } from './components/Navbar';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Error404 } from './pages/Error404';
import { Home } from './pages/Home';
import { Product } from './pages/Products';
import './App.css';
import { SingleProducts } from './pages/SingleProducts';

function App() {

  return (
    <>
     <Navbar />
     <div className="container">
     
      <Routes>
        <Route path='/' element={<Home products={products} />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='products' element={<Product />} />
        <Route path='singleProduct/:prodID' element={<SingleProducts />} />
        <Route path='*' element={<Error404 />} />
      </Routes>

     

    </div>
    </>
    
  );
}

export default App;
