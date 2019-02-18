import { connect } from 'react-redux';
import Scoreboard from './../components/Scoreboard';

const mapStateToProps = (state) => {
  const first_innings = state.first_innings.present;

  return {
    ...first_innings,
    total_overs: state.matchconfig.overs,
    players: state.matchconfig.players_in_team,
    extras: {
      ...first_innings.extras,
      enabled: state.matchconfig.extras,
    }
  }
};

const FirstInningsContainer = connect(
  mapStateToProps,
  null
)(Scoreboard);

export default FirstInningsContainer;
