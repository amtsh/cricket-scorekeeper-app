import { connect } from 'react-redux';
import SecondInningsTeam1 from './../components/SecondInningsTeam1';

const mapStateToProps = (state) => {
  const first_innings = state.first_innings.present;

  return {
    team1_total_runs: first_innings.total_runs,
    team1_wickets_down: first_innings.wickets_down,
  }
};

const SecondInningsTeam1Container = connect(
  mapStateToProps,
  null
)(SecondInningsTeam1);

export default SecondInningsTeam1Container;
