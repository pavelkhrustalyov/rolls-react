import { createSelector } from 'reselect';

export const selectRolls = state => state.rolls;

export const selectRollItems = createSelector(
    [selectRolls],
    (rolls) => rolls.rollItems
)

export const selectLoading = createSelector(
    [selectRolls],
    (rolls) => rolls.loading
)