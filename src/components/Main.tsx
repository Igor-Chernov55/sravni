import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../features/hooks";
import {getArticles} from "../api/articles/articlesActions";
import {Paginate} from "./features/pagination/Pagination";
import {Link} from "react-router-dom";


const Main = () => {
    const posts = useAppSelector(state => state.auth.articles)
    const token = useAppSelector(state => state.auth.token)
    const articlesCount = useAppSelector(state => state.auth.articlesCount)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getArticles({}))
    }, [dispatch])

    if (!token) return <p className='text-center text-lg'>Please register</p>
    return (
        <div className='w-[900px] mx-auto py-3  justify-between flex-column items-center'>
            {posts && posts.map((m, key) => (
               <Link key={key} to={`/Post:${m.slug}`}>
                        <div className='flex'>
                            <ul className='w-full border rounded m-5 p-5'>
                                <li className='flex mb-3 text-lg'>Slug :{m.slug}</li>
                                <li className='flex mb-3 text-lg'>Description :{m.description}</li>
                                <div className="flex items-center justify-end">tags: {m.tagList.map((m, key) => (
                                    <p key={key} className={'m-1'}>{m}</p>))}</div>

                                <div className="flex items-center justify-end">
                                    author: <p>{m.author.username}</p>
                                </div>
                                <p>Read more...</p>
                            </ul>

                        </div>
                    </Link>

            ))}
            <Paginate postPerPage={5} totalPosts={articlesCount}/>
        </div>
    );

};

export default Main;
