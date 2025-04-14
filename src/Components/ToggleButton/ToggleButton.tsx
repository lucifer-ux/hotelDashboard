import "./ToggleButton.css";

type ComponentAProps = {
  firstToggleText: string;
  secondToggleText: string;
  onClick: () => void;
  isToggleButtonActive : boolean;
};

const ToggleButton = ({
  firstToggleText,
  secondToggleText,
  onClick,
  isToggleButtonActive,
}: ComponentAProps) => {
  return (
    <>
      <div className="switch-container">
        <div className="switch-button">
          <div
            className={`switch-option ${!isToggleButtonActive ? "active" : ""}`}
            onClick={onClick}
          >
            {firstToggleText}
          </div>
          <div
            className={`switch-option ${isToggleButtonActive ? "active" : ""}`}
            onClick={onClick}
          >
            {secondToggleText}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleButton;
