import Desktop1 from './Components/Desktop1';
import Desktop2 from './Components/Desktop2';
import Desktop3 from './Components/Desktop3';
import Desktop4 from './Components/Desktop4';
import Desktop5 from './Components/Desktop5';
import {Route, Routes} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <>
    <Routes>
      <Route exact path='/' element={<Desktop1 />}/>
      <Route exact path='/desktop2' element={<Desktop2 />}/>
      <Route exact path='/desktop3' element={<Desktop3 />}/>
      <Route exact path='/desktop4' element={<Desktop4 />}/>
      <Route exact path='/desktop5' element={<Desktop5 />}/>
    </Routes>

    </>
  );
}

export default App;
