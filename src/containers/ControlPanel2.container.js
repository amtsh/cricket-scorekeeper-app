import { connect } from 'react-redux';
import { addRuns_inn2 } from './../actions/MatchActions';
import { wicket_inn2 } from './../actions/MatchActions';
import { noBall_inn2 } from './../actions/MatchActions';
import { wideBall_inn2 } from './../actions/MatchActions';
import ControlPanel from './../components/ControlPanel'

const mapDispatchToProps = {
  addRuns: addRuns_inn2,
  addWicket: wicket_inn2,
  addNoBall: noBall_inn2,
  addWideBall: wideBall_inn2,
};

const ControlPanelContainer = connect(
  null,
  mapDispatchToProps
)(ControlPanel);

export default ControlPanelContainer;