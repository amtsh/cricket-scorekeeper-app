import { connect } from 'react-redux';
import ThisOver from './../components/ThisOver';

const mapStateToProps = (state) => {
  const second_innings = state.second_innings.present;

  return {
    runs: second_innings.over_details.runs,
    balls_remaining: second_innings.over_details.balls_remaining,
  }
};

const ThisOver2Container = connect(
  mapStateToProps,
  null
)(ThisOver);

export default ThisOver2Container;
