import {createSlice} from "@reduxjs/toolkit";
import {getUser} from "../../api/profile/profileAction";
import {deleteArticles, getMyArticles} from "../../api/articles/articlesActions";
import {Author} from "../../types/api";

export interface Root {
    user: User
    isLoading: boolean
    articles: Article[]
    getSlug: string
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

export interface User {
    email: string
    username: string
    bio: any
    image: string
}


const initialState: Root = {
    user: {
        email: '',
        username: '',
        bio: null,
        image: '',
    },
    articles: [{
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
    }],
    getSlug: '',
    isLoading: false
}

export const profileSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        deleteArticle: (state, action) => {
            state.getSlug = action.payload

           state.articles = state.articles.filter(f => {
                return  f.slug !== state.getSlug
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getUser.pending, state => {
            state.isLoading = true
        })
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = action.payload.user
        })
        builder.addCase(getUser.rejected, state => {
            state.isLoading = true
        })
        builder.addCase(getMyArticles.fulfilled, (state, action) => {
            state.articles = action.payload.articles
        })

    }
})
