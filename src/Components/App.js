import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import AssetsPage from "./Assets/AssetsPage";
import InvestHistoryPage from "./history/InvestHistoryPage";
import AssetBuyingManager from "./Assets/AssetBuyingManager";
import AssetSellingManager from "./Assets/AssetSellingManager";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/assets" component={AssetsPage} />
        <Route path="/history" component={InvestHistoryPage} />
        <Route path="/asset/buy/:id" component={AssetBuyingManager} />
        <Route path="/asset/sell/:id" component={AssetSellingManager} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={2000} hideProgressBar />
    </div>
  );
}
export default App;
