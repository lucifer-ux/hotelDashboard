import Button from "../Button/Button";
import "./InputBlock.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const InputBlock = () => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        if (!value.trim()) return alert("Please enter your Agent Key");
        console.log("Submitted agentKey:", value);
        
        navigate('/success');

      };
    
    const [value, setValue] = useState('');
  return (
    <>
         <div className="form-container">
      <div className={`input-wrapper ${value ? 'filled' : ''}`}>
        <input
          type="text"
          id="agentKey"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
        />
        <label htmlFor="agentKey">Agent Key</label>
        <span className="underline" />
      </div>
      <Button text="Submit..." onClick={handleSubmit}/>
    </div>

    </>
  )
}

export default InputBlock