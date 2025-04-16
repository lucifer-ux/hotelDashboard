import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import LoginForm from './Screens/LoginForm/LoginForm'
import ProfileUpdateDashboard from './Screens/ProfileUpdateDashboard/ProfileUpdateDashboard';
import ImageUploadScreen from './Screens/ImageUploadScreen/ImageUploadScreen';

function App() {
  return (
    <>
        <Router>
      <Routes>
      <Route path = "/success" element = {<ProfileUpdateDashboard/>} />
        <Route path="/" element={<LoginForm/>} />
        <Route path='/upload' element = {<ImageUploadScreen/>} />
        {/* <Route path="/success" element={<SuccessPage />} /> */}
      </Routes>
    </Router>
    </>
  )
}

export default App
