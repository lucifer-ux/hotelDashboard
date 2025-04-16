import Button from "../Button/Button";
import "./InputBlock.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type InputBlockProps = {
  hintText: string
}

const InputBlock: React.FC<InputBlockProps> = ({hintText}) => {
    const navigate = useNavigate();
    const handleSubmit = () => {
        if (!value.trim()) return alert("Please enter your Agent Key");
        console.log(value)
        console.log("Submitted agentKey:", value);
        
        navigate('/success');

      };
    
      const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          handleSubmit(); // value will be correct
        }
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
          onKeyDown={handleKeyDown}
        />
        <label htmlFor="agentKey">{hintText}</label>
        <span className="underline" />
      </div>
      <Button text="Submit..." onClick={handleSubmit}/>
    </div>

    </>
  )
}

export default InputBlock