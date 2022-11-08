import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "./../axiosConfigApi";
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";

export const authLogin = createAsyncThunk(
    'auth/login',
    async (arg: { email: string, password: string }, {dispatch, rejectWithValue}) => {
        let email = arg.email
        let password = arg.password

        const {data} = await axios.post('/users/login', {
                user: {
                    email, password
                }
            }
        )

        try {

            if (data) {
                window.localStorage.setItem('token', data.user.token)
            }
            toast('complete login')

            return data
        } catch (e) {
            toast('error auth')
            return rejectWithValue(e)
        }

    }
)

export const authRegistration = createAsyncThunk(
    'auth/register',
    async (arg: { username: string, email: string, password: string }, {dispatch, rejectWithValue}) => {

        let username = arg.username
        let email = arg.email
        let password = arg.password

        const {data} = await axios.post('/users', {
                user: {
                    username,
                    email,
                    password
                }
            }
        )
        try {

            if (data) window.localStorage.setItem('token', data.user.token)
            toast('complete registration')
            return data
        } catch (error) {
            toast('error registration')
            return rejectWithValue(error)
        }

    }
)
