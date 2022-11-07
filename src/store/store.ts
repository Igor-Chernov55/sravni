import {configureStore} from '@reduxjs/toolkit'
import {authSlice} from "./slices/authSilce";
import {articleSlice} from "./slices/articleSlice";
import {profileSlice} from "./slices/profileSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        articles: articleSlice.reducer,
        profile: profileSlice.reducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
