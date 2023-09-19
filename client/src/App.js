import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import CustomerAccess from './containers/customerAccess'

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<CustomerAccess />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
