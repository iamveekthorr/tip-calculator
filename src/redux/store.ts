import { configureStore } from '@reduxjs/toolkit';

import tipReducer from './slices/tip.slice';
import pillReducer from './slices/pill.slice';

export const store = configureStore({
  reducer: { tip: tipReducer, pill: pillReducer },
});

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
