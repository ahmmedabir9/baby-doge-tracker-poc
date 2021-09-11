import React, { useState } from "react";
import wallet from "../Images/ico_wallet.png";

const Activity = () => {
  const [totalIn, settotalIn] = useState(401.3);
  const [totalOut, settotalOut] = useState(4.5);
  const [balance, setBalance] = useState(401.3);
  const [total, settotal] = useState(841.8);

  return (
    <div className="d-flex justify-content-center">
      <div className="w-100">
        <div className="text-center rewards-header w-75 mx-auto">
          <img src={wallet} alt="" className="section-logo" />
          <h4>Walet Activity</h4>
        </div>

        <div className="overview-card card shadow text-center mb-4 p-5">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="overview-stats">
                <p>Total BabyDoge In</p>
                <h4>{totalIn.toFixed(1)}T</h4>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="overview-stats">
                <p>Total BabyDoge Out</p>
                <h4>${totalOut.toFixed(1)}B</h4>
              </div>
            </div>
          </div>

          <div className="mt-3 border-bottom"></div>

          <div className="overview-stats">
            <p>BabyDoge Balance Without Rewards</p>
            <h4>{balance.toFixed(1)}T</h4>
          </div>

          <div className="overview-stats">
            <p>
              If you never sold any of your BabyDoge, now you would be worth
            </p>
            <h4>${total.toFixed(1)}K</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
