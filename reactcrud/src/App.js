import Insert from './components/Insert';
import Header from './components/Header';
import View from './components/View';
import Edit from './components/Edit';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Comment from './components/Comment';
import InsertComments from './components/InsertComents';



const App = () => {

  return (
  <div>
    <Header/>
    <Routes>
      <Route strict exact path="/" element={<Home/>}/>
      <Route path="/insert"  element={<Insert/>}/>
      <Route path="/view"  element={<View/>}/>
      <Route path="/edit/:id" element={<Edit/>} />
      <Route path="/viewpost/:id" element={<Comment/>} />
      <Route path="/insertcomments/:id" element={<InsertComments/>} />
   </Routes>
  </div>
  );
};

export default App;

