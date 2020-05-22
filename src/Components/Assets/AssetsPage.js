import React, { useState } from "react";
import { connect } from "react-redux";
import * as assetActions from "../../redux/actions/assetActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import Portfolio from "./Portfolio";

class AssetsPage extends React.Component {
  componentDidMount() {
    const { assets, actions, portfolioValue } = this.props;
    if (assets.length === 0) {
      actions.loadAssets().catch((error) => alert(error));
    }
  }

  render() {
    return (
      <>
        <h2>Assets</h2>
        <Portfolio
          assets={this.props.assets}
          portfolioValue={this.props.portfolioValue}
        />
      </>
    );
  }
}
AssetsPage.propTypes = {
  assets: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  portfolioValue: PropTypes.number.isRequired,
};

function mapStateToProps(state) {
  let portfolioValue = 0;
  if (state.assets.length !== 0) {
    state.assets.map((asset) => {
      portfolioValue = portfolioValue + asset.price;
    });
  }
  return {
    assets: state.assets,
    portfolioValue: portfolioValue,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(assetActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetsPage);
