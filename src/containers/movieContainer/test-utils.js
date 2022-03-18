import React from 'react';
import { render as rtRenderer } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import reducer from '../../app/reducers';

function render(
    ui,
    {
        preloadedState,
        store = configureStore({reducer: reducer, preloadedState}),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{children}</Provider>
    }
    return rtRenderer(ui, {wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react';
export { render }