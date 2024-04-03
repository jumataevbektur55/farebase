import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import SignUp from './components/SignUp/SignUp';
import Home from './components/Home/Home';
import SignIn from './components/SingIn/SignIn';

function App() {
  return (
    <div className="App">
<Header/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/signUp' element={<SignUp/>}/>
  <Route path='/signIn' element={<SignIn/>}/>
</Routes>
    </div>
  );
}

export default App;
