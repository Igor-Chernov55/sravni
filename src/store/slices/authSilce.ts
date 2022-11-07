import {createSlice} from "@reduxjs/toolkit";
import {getArticles} from "../../api/articles/articlesActions";
import {authLogin, authRegistration} from "../../api/authAction/auth";
import {AuthSlice} from "../../types/api";

const initialState: AuthSlice = {
    user: null,
    token: null,
    isLoading: false,
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
    articlesCount: 0,

}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action) =>{
            state.token = action.payload
        },
        cleanToken: state => {
            state.token = null
            window.localStorage.clear()
        }
    },
    extraReducers: (builder) => {
        builder.addCase(authLogin.pending,(state) => {
            state.isLoading = true
        } )
           builder.addCase(authLogin.fulfilled,(state, action) => {
               state.isLoading = false
               state.user = action.payload.user.username
               state.token = action.payload.user.token
        } )
           builder.addCase(authLogin.rejected,(state) => {
               state.isLoading = false
        } )

        builder.addCase(authRegistration.pending,(state) => {
            state.isLoading = true
        } )

        builder.addCase(authRegistration.fulfilled,(state, action) => {
               state.isLoading = false
               state.user = action.payload.user.username
               state.token = action.payload.user.token
        } )

           builder.addCase(authRegistration.rejected,(state) => {
               state.isLoading = false
        } )

        builder.addCase(getArticles.fulfilled, (state, action) => {
            state.articles = action.payload.articles
            state.articlesCount = action.payload.articlesCount
        })

    }
})

export const {setToken, cleanToken } = authSlice.actions
