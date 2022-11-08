import {createSlice} from "@reduxjs/toolkit";
import {getArticle, getArticles} from "../../api/articles/articlesActions";
import {OneAuthSlice} from "../../types/api";

const initialState: OneAuthSlice = {
    isLoading: false,
    article: {
        slug: '',
        title: '',
        description: '',
        body: '',
        tagList: [''],
        createdAt: '',
        updatedAt: '',
        favorited: false,
        favoritesCount: 0,
        author: {
            username: '',
            bio: null,
            image: '',
            following: false
        },
    },
}
export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getArticles.pending, state => {
            state.isLoading = true
        })
        builder.addCase(getArticles.fulfilled, state => {
            state.isLoading = false
        })
        builder.addCase(getArticles.rejected, state => {
            state.isLoading = false
        })

        builder.addCase(getArticle.fulfilled, (state, action) => {
            state.article = action.payload.article
        })
    },
})
