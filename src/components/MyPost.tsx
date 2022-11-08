import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../features/hooks";
import {getArticle, updateArticles} from "../api/articles/articlesActions";
import {Params, useNavigate, useParams} from "react-router-dom";

const MyPost = () => {
    const dispatch = useAppDispatch()
    let post = useAppSelector(state => state.articles.article)
    const [slug, setSlug] = useState(post.slug)
    const [title, setTitle] = useState(post.title)
    const [description, setDescription] = useState(post.description)
    const [body, setBody] = useState(post.body)
    const params = useParams()
    const paramsSlug = params.slug
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getArticle({slug: paramsSlug}))
    }, [params])

    useEffect(() => {
        setSlug(post.slug)
        setTitle(post.title)
        setDescription(post.description)
        setBody(post.body)
    }, [post])

   const initialValue = {
        slug: slug,
        title: title,
        description: description,
        body: body,
    }

    return (
        <form className='flex max-w-[900px] flex-col py-3 mx-auto px-2 items-center'>
            <label className='w-full'>
                slug
                <input
                    className='flex border rounded mb-2 w-full p-3 outline-none'
                    type="text"
                    onChange={(e) => {
                        setSlug(e.target.value)
                    }}
                    value={slug}
                    id={'slug'}
                    name={'slug'}
                />
            </label>
            <label className='w-full'>
                title
                <input className='flex border rounded mb-2 w-full p-3 outline-none'
                       type="text"
                       onChange={e => setTitle(e.target.value)}
                       value={title}
                       id={'title'}
                       name={'title'}
                />
            </label>
            <label className='w-full'>
                description
                <input className='flex border rounded mb-2 w-full p-3 outline-none'
                       type="text"
                       onChange={e => setDescription(e.target.value)}
                       value={description}
                       id={'description'}
                       name={'description'}
                />
            </label>
            <label className='w-full'>
                body
                <input className='flex border rounded mb-2 w-full p-3 outline-none'
                       type="text"
                       onChange={e => setBody(e.target.value)}
                       value={body}
                       id={'body'}
                       name={'body'}
                />
            </label>
            <p
                className='flex px-2 py-1 bg-green-300 rounded'
                onClick={() => dispatch(updateArticles({paramsSlug, initialValue}))}
            >Update slug</p>
        </form>
    )
}

export default MyPost;
