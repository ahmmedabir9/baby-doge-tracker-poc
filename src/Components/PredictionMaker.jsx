import React, { useState } from "react";
import predictions from "../Images/ico_predictions.png";

const PredictionMaker = () => {
  const [estimate1, setEstimate1] = useState(909);
  const [estimate2, setEstimate2] = useState(952.39);

  return (
    <div className="d-flex justify-content-center">
      <div className="w-100">
        <div className="text-center rewards-header w-75 mx-auto">
          <img src={predictions} alt="" className="section-logo" />
          <h4>Prediction Maker</h4>
          <p>
            Curious about the future? Use the Prediction Maker to enter
            different scenarios for your future BabyDoge rewards!
          </p>
        </div>

        <div className="overview-card card shadow text-center mb-4 p-5">
          <div className="overview-stats">
            <p>Total BabyDoge Earned</p>
            <input
              type="number"
              class="form-control custom-input"
              defaultValue={7}
            />
          </div>

          <div className="overview-stats">
            <p>Estimated BabyDoge Gained</p>
            <h4>{estimate1.toFixed(0)}B</h4>
          </div>

          <div className="mt-3 border-bottom"></div>

          <div className="overview-stats">
            <p>BabyDoge Volume Multiplier</p>
            <input
              type="number"
              class="form-control custom-input"
              defaultValue={1}
            />
          </div>

          <div className="overview-stats">
            <p>Estimated BabyDoge Gained</p>
            <h4>${estimate2.toFixed(1)}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionMaker;
