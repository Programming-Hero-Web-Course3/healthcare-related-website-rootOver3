import { Routes,  Route } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Error404 from './pages/Error404'
import Navigation from './components/shared/Navigation';
import Contact from './pages/Contact';
import Footer from './components/shared/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import SingleService from './pages/services/[id]';
import { RequireAuth } from './hooks/useRouter';


function App() {
  return (
    <div className="App">
      {/* <Link to={`/`}>Home</Link>
      <Link to={`/about`}>About</Link>
      <Link to={`/services`}>Services</Link> */}
      <Navigation />

      <Routes>
        <Route exact path={`/`} element={<Home/>} />
        <Route exact path={`/about`} element={<About/>} />
        <Route exact path={`/services`} element={<Services/>} />
        <Route exact path={`/services/:id`} element={<RequireAuth><SingleService/></RequireAuth>} />
        {/* <PrivateRoute exact path={`/services`} element={<Services/>} /> */}
        <Route exact path={`/contact`} element={<Contact/>} />
        <Route path={`/*`} element={<Error404/>} />
        <Route exact path={`/login`} element={<Login/>} />
        <Route exact path={`/register`} element={<Register/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
