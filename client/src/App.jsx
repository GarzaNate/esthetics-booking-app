// import { Route, Routes } from 'react-router-dom'
import './index.css'
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BookNow from './pages/BookNow';
import WorkPage from './pages/WorkPage';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <BookNow />
      <WorkPage />
      <Footer />
    </div>
    
  )
}

export default App
