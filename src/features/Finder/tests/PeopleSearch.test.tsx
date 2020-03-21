import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import PeopleSearch from '../PeopleSearch';

test('renders PeopleSearch', () => {

  const { queryAllByText } = render(
    <Provider store={store}>
      <PeopleSearch />
    </Provider>
  );

  expect(queryAllByText(/Search People/i)).toBeDefined();
});
