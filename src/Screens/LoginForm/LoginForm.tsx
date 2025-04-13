import InputBlock from "../../Components/InputBlock/InputBlock";
import ToggleButton from "../../Components/ToggleButton/ToggleButton";
import "./LoginForm.css"

const LoginForm = () => {
  

  return (
    <>
    <div className='mainContainer'>
      <div className='leftContainer'>
        Welcome back
      </div>
      <div className="rightContainer">
     <ToggleButton firstToggleText="Existing User" secondToggleText="New User"/> 
    <InputBlock/>
      </div>
    </div>
    </>
  )
}

export default LoginForm