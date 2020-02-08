import { createSelector } from "reselect";

const selectUser = state => state.user; // pull state and return a piece of the state

// now a memoized selector
export const selectCurrentUser = createSelector(  

  [selectUser], // can be an array of input selectors
  user => user.currentUser // return user reducer
);
