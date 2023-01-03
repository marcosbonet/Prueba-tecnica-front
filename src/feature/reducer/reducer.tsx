import { createReducer } from '@reduxjs/toolkit';
import { CandidateType } from '../models/candidates.types';
import * as ac from './actionCreator';

const initialState: Array<CandidateType> = [];

export const Reducer = createReducer(initialState, (builder) => {
    builder.addCase(ac.loadActionCreator, (_state, action) => action.payload);
    builder.addCase(ac.createActionCreator, (state, action) => [
        ...state,
        action.payload,
    ]);

    builder.addDefaultCase((state) => state);
});
