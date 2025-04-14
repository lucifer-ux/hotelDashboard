import { useState } from "react";
import InputBlock from "../../Components/InputBlock/InputBlock";
import ToggleButton from "../../Components/ToggleButton/ToggleButton";
import "./LoginForm.css"

const LoginForm = () => {
  const [existingAgentToggle, setExistingAgentToggle] = useState(false)
  const handleToggleClick = () => {
    setExistingAgentToggle(!existingAgentToggle);
  }
  return (
    <>
    <div className='mainContainer'>
      <div className='leftContainer'>
        Welcome back
      </div>
      <div className="rightContainer">
     <ToggleButton firstToggleText="Existing User" secondToggleText="New User"
     isToggleButtonActive ={existingAgentToggle}
     onClick={handleToggleClick}/> 
    { !existingAgentToggle && <InputBlock hintText = "AgentKey"/>}
    { existingAgentToggle && <InputBlock hintText="Entter your Email"/>}
      </div>
    </div>
    </>
  )
}

export default LoginForm