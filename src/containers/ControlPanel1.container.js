import { connect } from 'react-redux';
import { addRuns_inn1 } from './../actions/MatchActions';
import { wicket_inn1 } from './../actions/MatchActions';
import { noBall_inn1 } from './../actions/MatchActions';
import { wideBall_inn1 } from './../actions/MatchActions';
import ControlPanel from './../components/ControlPanel';

const mapDispatchToProps = {
  addRuns: addRuns_inn1,
  addWicket: wicket_inn1,
  addNoBall: noBall_inn1,
  addWideBall: wideBall_inn1,
};

const ControlPanelContainer = connect(
  null,
  mapDispatchToProps
)(ControlPanel);

export default ControlPanelContainer;
