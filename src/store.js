import { createStore } from "redux";
import localStorage from './utilities/storage'
import AllReducers from './reducers/AllReducers';
import { loadStorage } from './actions/MatchActions';

const matchStore = createStore(AllReducers);

(async () => {
 persistedState = await localStorage.get('match')

 matchStore.dispatch(loadStorage({
  first_innings: persistedState.first_innings,
  second_innings: persistedState.second_innings,
  matchconfig: persistedState.matchconfig
 }))

})();

matchStore.subscribe(() => {
  let currentState = matchStore.getState();

  localStorage.set('match', {
    first_innings: currentState.first_innings.present,
    second_innings: currentState.second_innings.present,
    matchconfig: currentState.matchconfig
  })

})

export default matchStore;