import {AsyncThunk, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "./../axiosConfigApi";
import {CreateArticleTS, UpdateArticlesTS} from "../../types/api";
import {Params} from "react-router-dom";
import {toast} from "react-toastify";

export const getArticles = createAsyncThunk('article/getArticles',
    async (arg: { offsetNum?: number }, {dispatch, rejectWithValue}) => {

        try {
            const {data} = await axios.get(`/articles?limit=5&offset=${arg.offsetNum}`)

            return data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)

export const getArticle = createAsyncThunk('article/getArticle',
    async (arg: {slug?: string | undefined
}, {dispatch, rejectWithValue}) => {

        try {

            const {data} = await axios.get(`/articles/${arg.slug?.replace(/:/, '')}`)
            return data
        }
        catch (e) {
            return rejectWithValue(e)
        }

    }
)

export const getMyArticles = createAsyncThunk('user/getMyArticles   ',
    async (username: string, {dispatch,rejectWithValue }) => {

        try {
            const {data} = await axios.get(`/articles?author=${username}`)
            return data
        }
        catch (e) {
            return rejectWithValue(e)
        }

    }
)
export const deleteArticles = createAsyncThunk('user/deleteMyArticles',
    async (article: string, {dispatch, rejectWithValue}) => {


        try {
            const {data} = await axios.delete(`/articles/${article}`)
            toast("deleted")
            return data
        }
        catch (e) {
            toast("failed")
            return rejectWithValue(e)
        }
    }
)

export const createArticles = createAsyncThunk('articles/create',
    async (values: CreateArticleTS, {dispatch, rejectWithValue}) => {

        try {
            const {data} = await axios.post('/articles', {
                article: {
                    title: values.title,
                    description: values.description,
                    body: values.body,
                    tagList: [values.tagList]
                }
            })

            toast('Created post')
            return data
        }

        catch (e) {
            toast('failed')
            return rejectWithValue(e)
        }

    }
)


export const updateArticles = createAsyncThunk('articles/update',
    async (arg: {paramsSlug: any, initialValue: {
                slug: string,
                title: string,
                description: string,
                body: string,
            }}, {dispatch, rejectWithValue}) => {

        try {
            const {data} = await axios.put(`/articles/${arg.paramsSlug}`, {
                    article: {
                        slug: arg.initialValue.slug,
                        title: arg.initialValue.title,
                        description: arg.initialValue.description,
                        body: arg.initialValue.body,
                    }
                },
                {headers: {'Content-Type': 'application/json'}}
            )

            toast('completely')
            return data
        }
        catch (e) {
            toast('error update')
            return rejectWithValue(e)
        }

    }
)


