import * as MatchActionTypes from './../actiontypes/MatchActionTypes';

export const addRuns_inn1 = runs => ({
    type: MatchActionTypes.ADD_RUNS_INN_1,
    runs
  }
);
export const addRuns_inn2 = runs => ({
    type: MatchActionTypes.ADD_RUNS_INN_2,
    runs
  }
);
export const wicket_inn1 = () => ({
    type: MatchActionTypes.WICKET_INN_1,
  }
);
export const wicket_inn2 = () => ({
    type: MatchActionTypes.WICKET_INN_2,
  }
);
export const wideBall_inn1 = () => ({
    type: MatchActionTypes.WIDEBALL_INN_1,
  }
);
export const wideBall_inn2 = () => ({
    type: MatchActionTypes.WIDEBALL_INN_2,
  }
);
export const noBall_inn1 = () => ({
    type: MatchActionTypes.NOBALL_INN_1,
  }
);
export const noBall_inn2 = () => ({
    type: MatchActionTypes.NOBALL_INN_2,
  }
);
export const setMatchConfig = (config) => ({
    type: MatchActionTypes.SET_MATCHCONFIG,
    matchconfig: config,
})

export const loadStorage = (payload) => ({
    type: MatchActionTypes.LOAD_STORAGE,
    payload: payload,
})


