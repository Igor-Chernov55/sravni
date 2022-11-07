import React from 'react';
import {Formik} from "formik";
import {useAppDispatch} from "../features/hooks";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {createArticles} from "../api/articles/articlesActions";
import {CreateArticleTS} from "../types/api";

const initialValue : CreateArticleTS = {
    title: '',
    description: '',
    body: '',
    tagList: ['']
}

const NewPost = () => {
    const dispatch = useAppDispatch()


    const handleSubmit = (values: CreateArticleTS) => {
        dispatch(createArticles(values))
    }

    return (
        <Formik
            initialValues={initialValue}
            onSubmit={(values, {resetForm}) => {
                handleSubmit(values)
                resetForm()
            }}
        >
            {({values, handleChange, handleSubmit}) => (
                <div>
                    <h2 className='text-center text-xl'>Create post</h2>
                    <form className='class="flex max-w-[900px] py-3 mx-auto px-2 items-center' onSubmit={handleSubmit}>
                        <input
                            type="text"
                            className='flex border rounded mb-2 w-full p-3 outline-none'
                            placeholder='Title'
                            onChange={handleChange}
                            name={'title'}
                            id={'title'}
                            value={values.title}
                        />
                        <input
                            type="text"
                            className='flex border rounded w-full mb-2 p-2 outline-none'
                            placeholder='Description'
                            onChange={handleChange}
                            name={'description'}
                            id={'description'}
                            value={values.description}
                        />
                        <textarea
                            className='flex border rounded h-36 mb-2 w-full p-3 outline-none align-top'
                            placeholder='Text your article'
                            onChange={handleChange}
                            name={'body'}
                            id={'body'}
                            value={values.body}
                        />


                        <input
                            type="text"
                            onChange={handleChange}
                            className='flex border rounded w-full mb-2  p-3 outline-none'
                            placeholder='Tags'
                            name={'tagList'}
                            id={'tagList'}
                            value={values.tagList}
                        />

                        <button className='flex px-2 py-1 bg-green-300 rounded ' type='submit'>submit</button>
                    </form>
                </div>
            )}
        </Formik>
    );
};

export default NewPost;
