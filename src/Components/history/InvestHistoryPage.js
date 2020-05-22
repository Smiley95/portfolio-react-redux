import React from "react";
import { connect } from "react-redux";
import * as historyActions from "../../redux/actions/historyActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import InvestHistory from "./InvestHistory";

class InvestHistoryPage extends React.Component {
  componentDidMount() {
    const { history, actions } = this.props;
    if (history.length === 0) {
      actions
        .loadHistory()
        .catch((error) => alert("the fuck is going on" + error));
    }
  }

  render() {
    return (
      <>
        <h2>Executed Investments</h2>
        <InvestHistory history={this.props.history} />
      </>
    );
  }
}
InvestHistoryPage.propTypes = {
  history: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    history: state.history,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(historyActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InvestHistoryPage);
