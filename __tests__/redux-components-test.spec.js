import React from 'react';

import { render, fireEvent, screen } from '../test-utils';
import Header from '../src/components/Header';
import App from '../src/components/App';

import '@testing-library/jest-dom';

import { initialState } from "../src/redux/reducer";

it(
    'Test #3: Render Header-component with reducer',
    () => {
        render(
            <Header/>,
            {
                initialState : {
                    count : 1,
                    countries : ["Ukraine"],
                    summary : {
                        death : null,
                        alive : null,
                        infected : null
                    }
                }
            }
        );
        expect(screen.getByText(/Summary Countries: 1/)).toBeInTheDocument();
    }
);

it(
    'Test #4: Render App-component with no-data',
    () => {
        render(
            <App/>,
            {
                initialState
            }
        );
        expect(screen.getByText(/\+/)).toBeInTheDocument();
    }
)

it(
    'Test #5: Render load and render summary data',
    () => {
        render(
            <Header/>,
            {
                initialState : {
                    count : 1,
                    countries : ["Ukraine"],
                    summary : {
                        death : 123,
                        alive : 431,
                        infected : 111
                    }
                }
            }
        );
        expect(screen.getByText(/Alive: 431/)).toBeInTheDocument();
    }
)