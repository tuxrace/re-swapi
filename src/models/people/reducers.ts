export type Person = {
  id: number;
  name: string;
};

export type PeopleState = {
  response: any;
};

export const initialState = {
  response: {},
  peopleData: [],
};

export const reducers = {
  response: (state: any, payload: any): any => ({
    ...state,
    response: payload
  }),
  peopleData: (state: any, payload: Array<Person>): any => ({
    ...state,
    peopleData: payload
  })
};
