export const updateScoreValues = (state, new_runs) => {
  var balls_delivered = state.balls_delivered + 1;
  var balls_remaining = 6 - balls_delivered;
  var overs_delivered = state.overs_delivered;
  var this_over = state.over_details.this_over;
  var this_over_runs = state.over_details.runs;
  var total_runs = state.total_runs + new_runs;
  var run_rate = state.run_rate;
  var projected_score = state.projected_score;

  if (total_runs > 0 && (overs_delivered > 0 || balls_delivered > 0)) {
    run_rate = total_runs / (overs_delivered + (balls_delivered/6));
    run_rate = run_rate.toFixed(1);

    projected_score = run_rate * state.total_overs;
    projected_score = projected_score.toFixed();
  }

  switch(balls_delivered) {
    case 1:
      this_over_runs = 0;
      this_over = [];
      break;
    case 6:
      balls_delivered = 0;
      overs_delivered = state.overs_delivered + 1;
      break;
  }

  return {
    balls_delivered,
    balls_remaining,
    overs_delivered,
    this_over,
    this_over_runs,
    total_runs,
    run_rate,
    projected_score,
  }
}
