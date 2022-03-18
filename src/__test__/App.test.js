import React from 'react';
import { render as rtlRender, screen } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import store from '../app/store';

const render = component => rtlRender(
    <Provider store={store}>
        {component}
    </Provider>
)

describe('MovieApp', () => {
    test('MovieApp render', () => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
        expect(screen.getByText('Order Of Movies:')).toBeInTheDocument();
    })
})