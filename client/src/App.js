import './App.css'
import { BrowserRouter as Router} from 'react-router-dom'
import Routes from './Routes'
import Navbar from './components/navbar/index';
import Footer from './components/footer';

function App() {
  return (
    <div className='app'>
      <Router>
        <Navbar />
        <Routes />
        <Footer />
      </Router>
    </div>
  )
}

export default App
