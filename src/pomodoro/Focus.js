import React from "react";
import { minutesToDuration } from "../utils/duration";

function Focus({ focusDuration, setFocusDuration, isTimerRunning }) {
  const increaseFocus = () => {
    setFocusDuration((prevDuration) => {
      return prevDuration < 60 ? prevDuration + 5 : prevDuration;
    });
  };
  const decreaseFocus = () => {
    setFocusDuration((prevDuration) => {
      return prevDuration > 5 ? prevDuration - 5 : prevDuration;
    });
  };

  return (
    <div className="col">
      <div className="input-group input-group-lg mb-2">
        <span className="input-group-text" data-testid="duration-focus">
          {/* TODO: Update this text to display the current focus session duration */}
          Focus Duration: {minutesToDuration(focusDuration)}
        </span>
        <div className="input-group-append">
          {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="decrease-focus"
            onClick={!isTimerRunning ? decreaseFocus : null}
          >
            <span className="oi oi-minus" />
          </button>
          {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
          <button
            type="button"
            className="btn btn-secondary"
            data-testid="increase-focus"
            onClick={!isTimerRunning ? increaseFocus : null}
          >
            <span className="oi oi-plus" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Focus;
