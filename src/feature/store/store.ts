import { configureStore } from '@reduxjs/toolkit';

import { Reducer } from '../reducer/reducer';

export const appStore = configureStore({
    reducer: {
        candidates: Reducer,
    },
});

export type AppDispatch = typeof appStore.dispatch;

export type rootStore = typeof appStore;

export type rootState = ReturnType<typeof appStore.getState>;
