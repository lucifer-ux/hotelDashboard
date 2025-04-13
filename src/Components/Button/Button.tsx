import React from 'react';
import './Button.css';

type ButtonProps = {
  text: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <div className="submit-btn-container">
      <button className="submit-btn" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
