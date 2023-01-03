import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { rootState } from '../store/store';
import * as ac from '../reducer/actionCreator';

import { Repository } from '../services/repository';
import { CandidateType } from '../models/candidates.types';

export const useCandidate = () => {
    const candidates = useSelector((state: rootState) => state.candidates);

    const dispatcher = useDispatch();
    const apiCandidate = useMemo(() => new Repository(), []);

    const handleLoad = useCallback(() => {
        apiCandidate.get().then((response: Array<CandidateType>) => {
            dispatcher(ac.loadActionCreator(response));
        });
    }, [apiCandidate, dispatcher]);

    const handleCreate = (newCandidate: CandidateType) => {
        apiCandidate
            .create(newCandidate)
            .then((candidates: CandidateType) =>
                dispatcher(ac.createActionCreator(candidates))
            );
    };

    return {
        candidates,
        handleLoad,
        handleCreate
    };
};
