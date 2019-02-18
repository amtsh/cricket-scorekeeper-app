import { connect } from 'react-redux';
import ThisOverHits from './../components/ThisOverHits';

const mapStateToProps = (state) => {
  const first_innings = state.first_innings.present;

  return {
    scores: first_innings.over_details.this_over,
  }
};

const ThisOverHitsContainer = connect(
  mapStateToProps,
  null
)(ThisOverHits);

export default ThisOverHitsContainer;
