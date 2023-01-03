import { createAction } from '@reduxjs/toolkit';
import { CandidateType } from '../models/candidates.types';

import { actionType } from './actionTypes';

export const createActionCreator = createAction<CandidateType>(
    actionType.create
);

export const loadActionCreator = createAction<Array<CandidateType>>(
    actionType.load
);
