import './App.css';
import Unsubscribe from './Components/Unsubscribe';
// import ChatTemplate from './components/ChatTemplate';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Subscribe from './Components/Subscribe';
//import "./Components/ChatTemplate.css"
import Home from './Components/Home';
import ChatTemplate from './Components/ChatTemplate';
import SendMsg from './Components/SendMsg';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={ <Home />} />
      <Route path="/unsubscribe" element={<Unsubscribe />} />
      <Route path="/subscribe" element={<Subscribe />} />
      <Route path='/createtemplate' element={<ChatTemplate />} />
      <Route path='/sendmsg' element={<SendMsg />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

