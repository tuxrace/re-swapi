export type Person = {
  id: number;
  name: string;
}

export type PeopleState = {
  response: any
}

export const initialState = {
  response: {},
}

export const reducers = {
    response: (state: any, payload: Array<Person>): any => ({ ...state, response: payload }),
}
