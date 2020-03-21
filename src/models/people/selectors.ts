import { createSelector } from 'reselect'

const peopleSelector = (state: any) => state.people;

export const peopleDataState = createSelector(
  peopleSelector,
  people => people.peopleData,
)

export const responseListState = createSelector(
  peopleSelector,
  people => people.response,
)
