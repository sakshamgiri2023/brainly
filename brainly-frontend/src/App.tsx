import './App.css'
import './index.css'
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import SharedPage from './pages/sharedPage'


function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/HomePage' element={<HomePage/>}/>
      <Route path='/' element={<RegisterPage/>}/>
      <Route path='/share/:id' element={<SharedPage/>}/>
      <Route path='' element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
