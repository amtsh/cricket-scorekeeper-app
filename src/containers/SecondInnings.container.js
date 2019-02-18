import { connect } from 'react-redux';
import Scoreboard from './../components/Scoreboard';

const mapStateToProps = (state) => {
  const second_innings = state.second_innings.present;
  return {
    ...second_innings,
    total_overs: state.matchconfig.overs,
    players: state.matchconfig.players_in_team,
  }
};

const SecondInningsContainer = connect(
  mapStateToProps,
  null
)(Scoreboard);

export default SecondInningsContainer;
