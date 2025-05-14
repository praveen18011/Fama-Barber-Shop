import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router , Routes , Route }  from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Main from './Main/Main';
import About from './Components/About';
import Services from './Components/Services';
import Appointment from './Components/Appointment';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Testimonials from './Components/Testimonials';
import Styles from './Components/Styles';

function App() {
  return (
    <div>
       <Router>
         <Routes>
           <Route path='/' element={<Main/>}/>
           <Route path='/header' element={<Header/>}/>
           <Route path='/home' element={<Home/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/services' element={<Services/>}/>
           <Route path='/styles' element={<Styles/>}/>
           <Route path='/testimonials' element={<Testimonials/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/appointment' element={<Appointment/>}/>
           <Route path='/footer' element={<Footer/>}/>
         </Routes>
       </Router>
    </div>
  );
}

export default App;
