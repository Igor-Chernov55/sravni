import {createSlice} from "@reduxjs/toolkit";
import {getArticle, getArticles, getMyArticles} from "../../api/articles/articlesActions";

interface AuthSlice {
    isLoading: boolean,
    article: Article,
}

export interface Article {
    slug: string
    title: string
    description: string
    body: string
    tagList: string[]
    createdAt: string
    updatedAt: string
    favorited: boolean
    favoritesCount: number
    author: Author
}

export interface Author {
    username: string
    bio: any
    image: string
    following: boolean
}


const initialState: AuthSlice = {
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
