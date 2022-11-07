import React, {useEffect, useLayoutEffect} from 'react';
import {Formik} from "formik";
import {useAppDispatch, useAppSelector} from "../features/hooks";
import {getUser} from "../api/profile/profileAction";
import {ProfileTS} from "../types/components";

const Profile = () => {
    const user = useAppSelector(state => state.profile.user)

    const initialState: ProfileTS = {
        email: user.email,
        username: user.username,
        image: user.image
    }

    return (
        <div>
            <h2 className='text-center text-xl'>Settings Profile</h2>
            <Formik
                initialValues={initialState}
                onSubmit={(values, {resetForm}) => {
                    resetForm()
                }}
            >
                {({values, handleChange, handleSubmit}) => (
                    <form className='class="flex max-w-[900px] py-3 mx-auto px-2 items-center' onSubmit={handleSubmit}>
                        <label>
                            Email
                            <input
                            type="text"
                            className='flex border rounded mb-2 w-full p-3 outline-none'
                            placeholder='Email'
                            name={'email'}
                            id={'email'}
                            onChange={handleChange}
                            value={values.email}
                        /></label>
                        <label>
                            Username
                            <input
                            type="text"
                            className='flex border rounded w-full mb-2 p-2 outline-none'
                            placeholder='UserName'
                            name={'username'}
                            id={'username'}
                            onChange={handleChange}
                            value={values.username}
                        />
                        </label>
                        <label>
                            Image
                            <textarea
                            className='flex border rounded h-36 mb-2 w-full p-3 outline-none align-top'
                            placeholder='Text your article'
                            name={'image'}
                            id={'image'}
                            onChange={handleChange}
                            value={values.image}
                        /></label>

                    </form>
                )}
            </Formik>
        </div>
    );
};

export default Profile;
