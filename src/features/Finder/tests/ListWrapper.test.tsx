import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store';
import ListWrapper from '../ListWrapper';

test('renders learn react link', () => {
  const props = {
    list: [
      {
        name: "Luke Skywalker",
        height: "172"
      }
    ]
  }
  const { queryByText } = render(
    <Provider store={store}>
      <ListWrapper {...props} />
    </Provider>
  );

  expect(queryByText(/Scroll down/i)).toBeDefined();
});
