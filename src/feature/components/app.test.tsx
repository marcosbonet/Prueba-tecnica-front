import { act, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { configureStore } from '@reduxjs/toolkit';

import { App } from './app';
import { Reducer } from '../reducer/reducer';
import { rootState } from '../store/store';
import { CandidateType } from '../models/candidates.types';
import { Candidate } from './form';
export const mockCandidate: CandidateType = {
    id: 'string',
    name: 'Juan',
    surname: 'domingo',
    phone: 1234,
    email: 'juan@gmail.com',
    cv: 'Excelente muchacho',
};

export const preloadedState: Partial<rootState> = {
    candidates: [mockCandidate],
};
const mockStore = configureStore({
    reducer: {
        candidates: Reducer,
    },
    preloadedState,
});

describe('Given App component', () => {
    describe('When we render the component', () => {
        beforeEach(async () => {
            // eslint-disable-next-line testing-library/no-unnecessary-act
            await act(async () => {
                render(
                    <>
                        <Candidate />
                    </>
                );
            });
        });
        test('Then it should display the title', () => {
            const element = screen.getByText(/Juan/i);
            expect(element).toBeInTheDocument();
        });
    });
});
