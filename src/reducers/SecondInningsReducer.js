import * as MatchActionTypes from './../actiontypes/MatchActionTypes';
import { updateScoreValues } from './../utilities/utilities';
import undoable, { distinctState } from 'redux-undo';

const initialstate = {
  team: "TEAM 2",
  total_runs: 0,
  wickets_down: 0,
  total_overs: 10,
  overs_delivered: 0,
  balls_delivered: 0,
  run_rate: 0,
  extras: {
    no_balls: 0,
    wide_balls: 0,
  },
  projected_score: 0,
  over_details: {
    runs: 0,
    ball_left: 6,
    this_over: [],
  },
  players: 11,
  runs_to_win: 0,
  total_remaining_balls: 60,
};

function secondInnReducer(state=initialstate, action) {

  switch(action.type) {
    case MatchActionTypes.ADD_RUNS_INN_2:
      const {
        balls_delivered,
        balls_remaining,
        overs_delivered,
        this_over,
        this_over_runs,
        total_runs,
        run_rate,
        projected_score,
      } = updateScoreValues({...state}, action.runs);

      return {
        ...state,
        total_runs,
        overs_delivered,
        balls_delivered,
        run_rate,
        projected_score,
        over_details: {
          runs: this_over_runs + action.runs,
          balls_remaining,
          this_over: [...this_over, action.runs],
        },
        runs_to_win: state.runs_to_win,
        total_remaining_balls: state.total_remaining_balls - 1,
      };

    case MatchActionTypes.WICKET_INN_2:

      return {
        ...state,
        wickets_down: state.wickets_down + 1
      }

    case MatchActionTypes.WIDEBALL_INN_2:

      return {
        ...state,
        extras: {
          ...state.extras,
          wide_balls: state.extras.wide_balls + 1,
        }
      }
    case MatchActionTypes.NOBALL_INN_2:

      return {
        ...state,
        extras: {
          ...state.extras,
          no_balls: state.extras.no_balls + 1,
        }
      }

    case MatchActionTypes.LOAD_STORAGE:
      return action.payload.second_innings;

    default:
      return state;
   };
}

const SecondInningReducer = undoable(secondInnReducer, {
  filter: distinctState()
});

export default SecondInningReducer;
