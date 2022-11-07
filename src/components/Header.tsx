import React, {useLayoutEffect} from 'react';
import {Link, NavLink, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../features/hooks";
import {getArticles} from "../api/articles/articlesActions";
import {cleanToken} from "../store/slices/authSilce";
import {toast} from "react-toastify";

const Header = () => {
    const token = useAppSelector(state => state.auth.token)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()

    useLayoutEffect(() => {
        dispatch(getArticles({}))
    }, [dispatch])

    return (
        <div className='flex w-1/2 py-3 mx-auto px-2 justify-between items-center'>
            <div className='flex justify-center items-center'>
                <img width='70' src="https://i.pinimg.com/originals/14/c3/58/14c35844f91b687414c06c62a033c652.jpg" alt="Logo"/>
            </div>


            <div className='flex justify-end'>

                { token ? <nav className='px-3'>
                    <ul className="flex gap-8">
                        <li>
                            <NavLink
                                to={'/Main'}
                                className='text-sx text-blue-400 hover:text-green-300'
                                style={({isActive}) => ({color: isActive ? 'brown' : undefined})}
                            >
                                Main
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/MyPosts'}
                                className='text-sx text-blue-400 hover:text-green-300'
                                style={({isActive}) => ({color: isActive ? 'brown' : undefined})}
                            >
                                My posts
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={'/Profile'}
                                className='text-sx text-blue-400 hover:text-green-300'
                                style={({isActive}) => ({color: isActive ? 'brown' : undefined})}
                            >
                                Profile
                            </NavLink>
                        </li>
                        <li>

                            <NavLink
                                to={'/NewPost'}
                                className='text-sx text-blue-400 hover:text-green-300'
                                style={({isActive}) => ({color: isActive ? 'brown' : undefined})}
                            >
                                Create post
                            </NavLink>
                        </li>
                    </ul>
                </nav>: <div></div>}

                <div className="flex">

                    {token ?
                        <button
                            className='bg-blue-300 px-4 rounded hover:text-white'
                            onClick={() => {
                                dispatch(cleanToken())
                                navigate('/login')
                                toast('exit profile')
                            }
                            }
                        >exit
                        </button>
                        :
                        <Link to={'/login'}>
                            <button className='bg-blue-300 px-4  rounded hover:text-white'>login</button>
                        </Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;
