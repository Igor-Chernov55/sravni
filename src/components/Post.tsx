import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../features/hooks";
import {getArticle} from "../api/articles/articlesActions";

export const Post = () => {
    const post = useAppSelector(state => state.articles.article)

    const dispatch = useAppDispatch()
    const params = useParams()

    useEffect(() => {
        dispatch(getArticle(params.slug))
    }, [])

    return (
        <div className='flex justify-center'>
            <ul className='w-[900px] border rounded m-5 p-5'>
                <li className='flex mb-3 text-lg'>Slug :{post.slug}</li>
                <li className='flex mb-3 text-lg'>Description :{post.description}</li>
                <li className='flex mb-3 text-lg'>Body :{post.body}</li>
                <div className="flex items-center justify-end">tags: {post.tagList.map((m, key) => (
                    <p key={key} className={'m-1'}>{m}</p>))}
                </div>
                <div className="flex items-center justify-end">author: <p>{post.author.username}</p></div>
            </ul>
        </div>
    )
}
