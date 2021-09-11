import React, { useState } from "react";

const OverviewCard = () => {
  const [mainBalance, setMainBalance] = useState(446.1);
  const [usdBalance, setUsdBalance] = useState(467.9);
  const [price, setPrice] = useState(0.000000001049);
  const [marketCap, setMarketCap] = useState(285.8);
  const [dayVolume, setDayVolume] = useState(3.3);
  const [monthlyVolume, setMonthlyVolume] = useState(93.2);

  return (
    <div className="container d-flex justify-content-center">
      <div className="overview-card card shadow w-100 max-width-900 text-center mb-4 p-5">
        <div className="overview-balance-section mb-4">
          <p className="">Your BabyDoge Balance</p>
          <h2>{mainBalance}T</h2>
        </div>
        <div className="overview-balance-section">
          <p className="">Your BabyDoge USD Balance</p>
          <h2>${usdBalance}K</h2>
        </div>

        <div className="overview-divider mx-auto mt-5 text-center">
          <div className="divider-text mx-auto">
            <h4>BabyDoge Token Status</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <div className="overview-stats">
              <p>Price</p>
              <h4>{price.toFixed(14)}</h4>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="overview-stats">
              <p>Market Cap</p>
              <h4>${marketCap.toFixed(1)}M</h4>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="overview-stats">
              <p>24-hour Volume</p>
              <h4>${dayVolume.toFixed(1)}M</h4>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="overview-stats">
              <p>Monthly Volume</p>
              <h4>${monthlyVolume.toFixed(1)}M</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
