 import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/navbar';
import Product from './components/Products/Product';  
import AddUserFormNative from "../src/components/LabDay2/Form2"
import About from "../src/components/lecDay3/lecDay3"
// import ContactUs from "../src/components/contactUs/contactUs"
import Movies from './components/Movies/Movies';
import Details from './components/Details/Details';  
import AddFavourite from './components/Favourite/Favourits';
import { Provider } from 'react-redux';
import store from './components/store/Store/store';

function App() { 
  return (
    <Provider store={store}>
    <div className="App">
      <Navbar/>



<Routes>
  <Route path='/product' element={<Product/>}/>
  <Route path='/' element={<AddUserFormNative/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/favourite' element={<AddFavourite/>}/>
  <Route path='/movie' element={<Movies/>}>
  
  </Route>
  <Route path='/details/:id' element={<Details/>}/>
</Routes>
 
 
    </div>
    </Provider>
  );
}

export default App;
