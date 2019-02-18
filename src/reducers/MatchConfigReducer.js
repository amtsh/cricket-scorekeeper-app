import * as MatchActionTypes from './../actiontypes/MatchActionTypes';

const initialstate = {
  players_in_team: 11,
  overs: 10,
  extras: true
};

export default function MatchConfigReducer(state=initialstate, action) {
  switch(action.type) {
    case MatchActionTypes.SET_MATCHCONFIG:
      return {
        ...action.matchconfig
      }
    default:
      return state;
   };
}
