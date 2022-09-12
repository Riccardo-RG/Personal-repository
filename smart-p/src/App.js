
import './App.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import io from './io.png';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './component/About';
import Contact from './component/Contact';
import Blog1 from './component/Blog1';
import BlogList from './Blist/BlogList';









    



function App() {


  return (
    <>

    <BrowserRouter>
    <div className="App">
    
      <Navbar bg="dark" variant="dark"
      sticky='top' expand="1g">
        
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={io.png}
              width="70"
              height="70"
              className="d-inline-block align-top"
            />{' '}
            Riccardo Grandinetti
          </Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse>
          <Container>
          <Navbar.Brand href="#home" style={{}}>Smart-P</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">Features</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            
          </Nav>
          <Link as={Link} to="/blogList">Blog list</Link> 
        </Container>
          </Navbar.Collapse>
        </Container>
     
      </Navbar>

      <div>
        <Routes>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/blogList' element={<BlogList/>}></Route>

        </Routes>
      </div>

      
    </div>

    </BrowserRouter> 

    <Blog1>
    
    </Blog1>
    
    </>

    
  );
}

export default App;
