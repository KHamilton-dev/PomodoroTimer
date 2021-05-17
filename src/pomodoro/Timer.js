import React, {useState} from "react"
import {minutesToDuration, secondsToDuration} from "../utils/duration"

function Timer({session, focusDuration, breakDuration}) {
    let remaining = (session.label === "Focusing") ? focusDuration : breakDuration;
    const result = (session.timeRemaining / (remaining * 60)) * 100;

    if (session) {
      return (
          <div>
          {/* TODO: This area should show only when there is an active focus or break - i.e. the session is running or is paused */}
          <div className="row mb-2">
            <div className="col">
              {/* TODO: Update message below to include current session (Focusing or On Break) total duration */}
              <div data-testid="session-title">
              {session?.label} for {minutesToDuration((session?.label === "Focusing") ? focusDuration : breakDuration)} minutes
              </div>
              {/* TODO: Update message below correctly format the time remaining in the current session */}
              <p className="lead" data-testid="session-sub-title">
                {secondsToDuration(session?.timeRemaining)} remaining
              </p>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col">
              <div className="progress" style={{ height: "20px" }}>
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-valuenow={`${100 - result}`} // TODO: Increase aria-valuenow as elapsed time increases
                  style={{ width: `${100 - result}%` }} // TODO: Increase width % as elapsed time increases
                />
              </div>
            </div>
          </div>
        </div>
        )
      } 
      else 
      {
        return <></>
      }
  }

export default Timer;