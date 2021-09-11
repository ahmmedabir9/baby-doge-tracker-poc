import React, { useState } from "react";
import trophy from "../Images/ico-rewards.png";

const Rewards = () => {
  const [totalEarned, settotalEarned] = useState(401.3);
  const [usdEarned, setUsdEarned] = useState(421.1);
  const [projWeekly, setProjWeekly] = useState(908);
  const [projWeeklyUSD, setProjWeeklyUSD] = useState(952.39);
  const [projMonthly, setProjMonthly] = useState(4.7);
  const [projMonthlyUSD, setProjMonthlyUSD] = useState(5);

  return (
    <div className="container d-flex justify-content-center">
      <div className="w-100 max-width-900">
        <div className="text-center rewards-header w-75 mx-auto">
          <img src={trophy} alt="" className="section-logo" />
          <h4>Rewards</h4>
          <p>
            BabyDoge token features a 5% fee that is redistributed as rewards to
            holders. That means that the more active is the Community, including
            you, the more rewards in Baby Doge coin you'll have!
          </p>
        </div>

        <div className="overview-card card shadow text-center mb-4 p-5">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="overview-stats">
                <p>Total BabyDoge Earned</p>
                <h4>{totalEarned.toFixed(1)}T</h4>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="overview-stats">
                <p>Total USD Value Earned</p>
                <h4>${usdEarned.toFixed(1)}K</h4>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="overview-stats">
                <p>Projected Weekly BabyDoge Rewards</p>
                <h4>{projWeekly.toFixed(0)}B</h4>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="overview-stats">
                <p>Projected Weekly USD Rewards</p>
                <h4>${projWeeklyUSD.toFixed(2)}</h4>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="overview-stats">
                <p>Projected Monthly BabyDoge Rewards</p>
                <h4>{projMonthly.toFixed(1)}T</h4>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="overview-stats">
                <p>Projected Monthly USD Rewards</p>
                <h4>${projMonthlyUSD.toFixed(1)}K</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
