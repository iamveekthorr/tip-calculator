import { configureStore } from '@reduxjs/toolkit';

import tipReducer from './slices/tip.slice';
import pillReducer from './slices/pill.slice';
import buttonReducer from './slices/button.slice';

export const store = configureStore({
  reducer: {
    tip: tipReducer,
    pill: pillReducer,
    button: buttonReducer,
  },
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
