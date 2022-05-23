import TopLevelBoi from './practise/WelcomePrac/TopLevelBoi';
import { Navigate, Route, Routes } from 'react-router-dom';
import WindowBoi from './practise/windowboi/WindowBoi';
import CountyBoi from './practise/county/CountyBoi';
import FormyBoiTwo from './practise/FormyBoiTwo';
import Conditonal from './practise/Conditional';
import YeeeeNaaaa from './practise/YeeeeNaaaa';
import AddThings from './practise/AddThings';
import UseRefPrc from './practise/userefprc';
import NotFoundPage from './components/404';
import MemeBoi from './components/memeboi';
import FormyBoi from './practise/FormyBoi';
import StarBoi from './practise/StarBoi';
import Nav from './components/nav/nav';
import './styles.css';
import FormyRework from './practise/formyrework';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate replace to="/memeboi" />} />
        <Route path="/memeboi" element={<MemeBoi />} />
        <Route path="/starboi" element={<StarBoi />} />
        <Route path="/countyboi" element={<CountyBoi />} />
        <Route path="/yeeeenaaaa" element={<YeeeeNaaaa />} />
        <Route path="/addthings" element={<AddThings />} />
        <Route path="/toplevelboi" element={<TopLevelBoi />} />
        <Route path="/conditional" element={<Conditonal />} />
        <Route path="/windowboi" element={<WindowBoi />} />
        <Route path="/formyboi" element={<FormyBoi />} />
        <Route path="/formyrework" element={<FormyRework />} />
        <Route path="/anotherformyboi" element={<FormyBoiTwo />} />
        <Route path="/userefprac" element={<UseRefPrc />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App;