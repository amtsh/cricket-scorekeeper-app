import { connect } from 'react-redux';
import ThisOverHits from './../components/ThisOverHits';

const mapStateToProps = (state) => {
  const second_innings = state.second_innings.present;

  return {
    scores: second_innings.over_details.this_over,
  }
};

const ThisOverHits2Container = connect(
  mapStateToProps,
  null
)(ThisOverHits);

export default ThisOverHits2Container;
