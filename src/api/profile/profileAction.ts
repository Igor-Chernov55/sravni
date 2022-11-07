import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "./../axiosConfigApi";

export const getUser = createAsyncThunk('user/getUser',
    async () => {
        const {data} = await axios.get('/user')
        return data
    })
