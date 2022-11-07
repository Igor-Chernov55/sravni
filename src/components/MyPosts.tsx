import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../features/hooks";
import {deleteArticles, getArticle, getMyArticles} from "../api/articles/articlesActions";
import {Link, useNavigate} from "react-router-dom";

const MyPosts = () => {
    const dispatch = useAppDispatch()
    const user = useAppSelector(state => state.profile.user)
    const myPost = useAppSelector(state => state.profile.articles)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getMyArticles(user.username))
    },[dispatch])

    return (
        <div>
            {myPost && myPost.map((m, key) => (
                    <div key={key} className='flex justify-center'>
                        <ul className='w-[900px] border rounded m-5 p-5'>
                            <li className='flex mb-3 text-lg'>Slug :{m.slug}</li>
                            <li className='flex mb-3 text-lg'>Description :{m.description}</li>
                            <div className="flex items-center justify-end">tags: {m.tagList.map((m, key) => (
                                <p key={key} className={'m-1'}>{m}</p>))}</div>

                            <div className="flex items-center justify-end">
                                author: <p>{m.author.username}</p>
                            </div>

                            <div className='flex-col'>
                                <button className='flex px-2 py-1 bg-red-300 mb-2 rounded' onClick={() => {
                                    dispatch(deleteArticles(m.slug))
                                }}>delete post
                                </button>

                                <button className='flex px-2 py-1 bg-green-300 rounded' onClick={() => {
                                    navigate(`/MyPost/${m.slug}`)
                                }}>update post
                                </button>
                            </div>
                        </ul>
                    </div>
            ))}
        </div>
    );
};

export default MyPosts;
