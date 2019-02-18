import { connect } from 'react-redux';
import ThisOver from './../components/ThisOver';

const mapStateToProps = (state) => {
  const first_innings = state.first_innings.present;
  
  return {
    runs: first_innings.over_details.runs,
    balls_remaining: first_innings.over_details.balls_remaining,
  }
};

const ThisOver1Container = connect(
  mapStateToProps,
  null
)(ThisOver);

export default ThisOver1Container;
