import { connect } from 'react-redux';
import ToWin from './../components/ToWin';

const mapStateToProps = (state) => {
  const first_innings = state.first_innings.present;
  const second_innings = state.second_innings.present;
  return {
    runs_to_win: first_innings.total_runs - second_innings.total_runs,
    total_remaining_balls: second_innings.total_remaining_balls,
  }
};

const ToWinContainer = connect(
  mapStateToProps,
  null
)(ToWin);

export default ToWinContainer;
