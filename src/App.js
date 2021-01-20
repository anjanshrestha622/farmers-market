import React from 'react';
import { Route } from 'react-router-dom';
import{BrowserRouter} from 'react-router-dom';
import About from './container/About';
import Contact from './container/Contact';
import Home from './container/Home';
import Product from './container/Product';
import SignUp from './container/SignUp';
import Blog from './container/Blog'
import Vendor from './container/Product/Vendor'
import './App.css';
import Checkout from './container/Checkout';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Route path='/about' exact component={About}/>
      <Route path='/contact' exact component={Contact}/>
      <Route path='/' exact component={Home}/>
      <Route path='/product' exact component={Product}/>
      <Route path='/signIn' exact component={SignUp}/>
      <Route path='/blog' exact component={Blog}/>
      <Route path='/vendor' exact component={Vendor}/>
      <Route  path='/checkout' exact component={Checkout} />
      </BrowserRouter>
    
    </div>
  );
}

export default App;
