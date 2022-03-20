import { render as rtlRender, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../app/store';
import MovieApp from '../index';

const render = (component) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

describe('MovieApp', () => {
  test('MovieApp render', () => {
    render(
      <Provider store={store}>
        <MovieApp />
      </Provider>
    );
    expect(screen.getByText('Order Of Movies:')).toBeInTheDocument();
  });
});
