import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Course from './Pages/Course/Course';
import Login from './Pages/Login/Login';
import Panel from './Pages/Panel/Panel';
import Article from './Pages/Article/Article'
import TopTitle from './components/TopTitles/TopTitles'
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        <Route path='/Article/*' element={<Article />}>
          <Route path='TopTitle' element={<PrivateRoute><TopTitle /></PrivateRoute>} />
        </Route>

        <Route path='course/:idnumber' element={<Course />} />
        <Route path='/panel' element={<Panel />} />
        <Route path='/login' element={<Login />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
