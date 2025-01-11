import{ThemeProvider,styled} from "styled-components";
import{lightTheme} from './utils/Themes';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import './App.css';
import Authentication from "./components/pages/Authentication";
import Navbar from "./components/Navbar";
import { useState } from "react";
import  Dashboard  from "./components/pages/Dashboard";
import Workouts from "./components/pages/Workouts";





const Container = styled.div`
width: 100%;
height: 100vh;
dispaly:flex;
background:${({theme})=>theme.bg};
color:${({theme})=>theme.text_primary};
overflow-x: hidden;
transition: all 0.2s ease;`



function App() {

  const [user, setUser] = useState(true);

  return (
    <ThemeProvider theme={lightTheme}>
      <BrowserRouter>
      { user ? (    
      <Container>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Dashboard />}/>
          <Route path='/workouts' exact element={<Workouts />}/>
          {/* <Route path='/tutorials' exact element={<Tutorials />}/>
          <Route path='/journals' exact element={<Journals />}/>
          <Route path='/contact' exact element={<Contact />}/> */}
        </Routes>
      </Container>
      ) : (
      <Container>
        <Authentication />
      </Container>
      )}
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;