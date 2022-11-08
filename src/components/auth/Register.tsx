import React, {useEffect} from 'react';
import {Formik} from "formik";
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../features/hooks";
import {authRegistration} from "../../api/auth/authAction";

const Register = () => {
    const token = useAppSelector(state => state.auth.token)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleSubmit = (username: string, email: string, password: string) => {
        dispatch(authRegistration({username, email, password}))
    }

    useEffect(() => {
        if (token) navigate('/Main')
    },[token])

    return (
        <div>
            <Formik
                initialValues={{username: '', email: '', password: ''}}
                onSubmit={(values, {resetForm}) => {
                    handleSubmit(values.username, values.email, values.password)
                    resetForm()
                }}
            >
                {({values, handleChange, handleSubmit}) => (
                    <div>

                        <Link to='/'>
                            <button className='rounded bg-black text-white m-3 py-1 px-2'>back</button>
                        </Link>

                        <form
                            onSubmit={handleSubmit}
                            className='flex flex-col w-1/3 h-60 mx-auto mt-40'
                        >

                            <h1 className='text-lg text-black text-center'>Registration</h1>
                            <label className='text-lm '>
                                username
                                <input
                                    type="text"
                                    placeholder='username'
                                    className='mt-1 text-sm w-full rounded outline-none border px-2 py-1'
                                    onChange={handleChange}
                                    name={'username'}
                                    id={'username'}
                                    value={values.username}
                                />
                            </label>
                            <label className='text-lm '>
                                email
                                <input
                                    type="email"
                                    placeholder='email'
                                    className='mt-1 text-sm w-full rounded outline-none border px-2 py-1'
                                    onChange={handleChange}
                                    name={'email'}
                                    id={'email'}
                                    value={values.email}
                                />
                            </label>
                            <label>
                                password
                                <input
                                    type="password"
                                    placeholder='password'
                                    className='mt-1 mb-2 text-sm w-full rounded outline-none border px-2 py-1 '
                                    onChange={handleChange}
                                    name={'password'}
                                    id={'password'}
                                    value={values.password}
                                />
                            </label>
                            <div className='flex justify-between items-center'>
                                <button
                                    type='submit'
                                    className='w-40 bg-green-200 text-black rounded px-2 py-1 text-sm
                        hover:bg-blue-300 hover:text-white'

                                >
                                    sign
                                </button>

                                <Link
                                    to='/login'
                                    className='text-sm text-blue-400 '
                                >
                                    login
                                </Link>
                            </div>
                        </form>
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default Register;
