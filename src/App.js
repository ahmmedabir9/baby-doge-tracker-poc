import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuBar from "./Components/MenuBar";
import HeroSection from "./Components/HeroSection";
import OverviewCard from "./Components/OverviewCard";
import Rewards from "./Components/Rewards";
import PredictionMaker from "./Components/PredictionMaker";
import Activity from "./Components/Activity";

function App() {
  return (
    <div className="main h-100">
      <MenuBar />
      <HeroSection />
      <OverviewCard />
      <Rewards />
      <div className="container mt-4 mb-5">
        <div className="max-width-900 mx-auto">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <PredictionMaker />
            </div>
            <div className="col-xs-12 col-md-6">
              <Activity />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
