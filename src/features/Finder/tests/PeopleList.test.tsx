import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import PeopleList from '../PeopleList';

test('renders PeopleList', () => {
  const props = {
    loadAllPeople: () => {},
    response: {},
    search: null,
    peopleData: [],
    savePeopleData: () => {}
  }
  const { queryAllByText } = render(
    <Provider store={store}>
      <PeopleList {...props}/>
    </Provider>
  );

  expect(queryAllByText(/Search People/i)).toBeDefined();
});
