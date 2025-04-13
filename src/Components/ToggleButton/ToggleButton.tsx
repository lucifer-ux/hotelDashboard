import "./ToggleButton.css";
import { useState } from "react";

type ComponentAProps = {
  firstToggleText: string;
  secondToggleText: string;
};

const ToggleButton = ({
  firstToggleText,
  secondToggleText,
}: ComponentAProps) => {
  const [isExistingValue, setisExistingValue] = useState<boolean>(false);
  return (
    <>
      <div className="switch-container">
        <div className="switch-button">
          <div
            className={`switch-option ${!isExistingValue ? "active" : ""}`}
            onClick={() => setisExistingValue(false)}
          >
            {firstToggleText}
          </div>
          <div
            className={`switch-option ${isExistingValue ? "active" : ""}`}
            onClick={() => setisExistingValue(true)}
          >
            {secondToggleText}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleButton;
