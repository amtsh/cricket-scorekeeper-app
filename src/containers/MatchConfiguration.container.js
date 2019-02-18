import { connect } from 'react-redux';
import { setMatchConfig } from './../actions/MatchActions';
import MatchConfiguration from './../components/MatchConfiguration'

const mapStateToProps = (state) => {
  return {
    ...state.matchconfig,
  }
};

const mapDispatchToProps = {
  setMatchConfig: setMatchConfig,
};

const MatchConfigurationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MatchConfiguration);

export default MatchConfigurationContainer;
