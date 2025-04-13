import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginForm from './Screens/LoginForm/LoginForm'
import ProfileUpdateDashboard from './Screens/ProfileUpdateDashboard/ProfileUpdateDashboard';

function App() {
  return (
    <>
        <Router>
      <Routes>
      <Route path = "/success" element = {<ProfileUpdateDashboard/>} />
        <Route path="/" element={<LoginForm/>} />
        {/* <Route path="/success" element={<SuccessPage />} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
