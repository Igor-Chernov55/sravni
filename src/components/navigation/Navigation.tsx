import React, {useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../auth/Login";
import Register from "../auth/Register";
import Profile from "../Profile";
import Layout from "../Layout";
import Main from "../Main";
import {useAppDispatch, useAppSelector} from "../../features/hooks";
import {setToken} from "../../store/slices/authSilce";
import NewPost from "../NewPost";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Post} from "../Post";
import MyPosts from "../MyPosts";
import {getUser} from "../../api/profile/profileAction";
import {getMyArticles} from "../../api/articles/articlesActions";
import MyPost from "../MyPost";

const Navigation = () => {
    const token = useAppSelector(state => state.auth.token)
    const user = useAppSelector(state => state.profile.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(setToken(window.localStorage.getItem('token')))
    }, [])

    useEffect(() => {
        if (token){
            dispatch(getUser())
        }
    },[token])
    return (
        <div>
            <Layout>
                <Routes>
                    <Route path={'/'} element={<Main/>}/>
                    <Route path={'/Main'} element={<Main/>}/>
                    <Route path={'/Profile'} element={<Profile/>}/>
                    <Route path={'/MyPosts'} element={<MyPosts/>}/>
                    <Route path={'/NewPost'} element={<NewPost/>}/>
                    <Route path={'/MyPost/:slug'} element={<MyPost/>}/>
                    <Route path={'/Login'} element={<Login/>}/>
                    <Route path={'/Post:slug'} element={<Post/>}/>
                    <Route path={'/Register'} element={<Register/>}/>
                </Routes>
                <ToastContainer
                    position="top-center"
                />
            </Layout>
        </div>
    );
};

export default Navigation;
