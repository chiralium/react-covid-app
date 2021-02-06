import React from "react";
import { render as rtlRender } from '@testing-library/react';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';

import { reducer } from "./src/redux/reducer";
import thunk from "redux-thunk";

function render(
    ui,
    {
        initialState,
        store = createStore(reducer, initialState, applyMiddleware(thunk)),
        ...renderOptions
    } = {}
) {
    function Wrapper({ children }) {
        return <Provider store={store}>{ children }</Provider>
    }
    return rtlRender(
        ui,
        {
            wrapper : Wrapper,
            ...renderOptions
        }
    );
}

export * from '@testing-library/react';
export { render };