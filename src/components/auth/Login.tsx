import {Formik} from 'formik';
import React, {useEffect} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../features/hooks";
import 'react-toastify/dist/ReactToastify.css';
import {authLogin} from "../../api/auth/authAction";

const Login = () => {
    const token = useAppSelector(state => state.auth.token)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleSubmit = (email: string, password: string) => {
        dispatch(authLogin({email, password}))

    }
    useEffect(() => {
        if (token) navigate('/Main')
    },[token])

    return (
        <div>
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={(values, {resetForm}) => {
                    handleSubmit(values.email, values.password)
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

                            <h1 className='text-lg text-black text-center'>Authorization</h1>
                            <label className='text-lm '>
                                Email
                                <input
                                    type="text"
                                    placeholder='email'
                                    className='mt-1 text-sm w-full rounded outline-none border px-2 py-1'
                                    onChange={handleChange}
                                    name={'email'}
                                    id={'email'}
                                    value={values.email}
                                />
                            </label>
                            <label>
                                Password
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
                                    to='/register'
                                    className='text-sm text-blue-400 '
                                >
                                    registration
                                </Link>
                            </div>
                        </form>
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default Login;
