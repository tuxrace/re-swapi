import { createSelector } from 'reselect'

const peopleSelector = (state: any) => state.people;

export const peopleListState = createSelector(
  peopleSelector,
  people => people.list,
)

export const responseListState = createSelector(
  peopleSelector,
  people => people.response,
)
