import React, {FC, useEffect, useState} from 'react';
import {useAppDispatch} from "../../../features/hooks";
import {getArticles} from "../../../api/articles/articlesActions";
import {Pagination, Stack} from "@mui/material";

type PaginationType = {
    totalPosts: number,
    postPerPage: number
}

export const Paginate: FC<PaginationType> = ({totalPosts, postPerPage}) => {
    const dispatch = useAppDispatch()
    const [page, setPage] = useState(1)

    useEffect(() => {
        dispatch(getArticles({offsetNum: (page - 1) * 5 } )) }, [page])
    return (
        <div className='flex justify-center'>
            <Stack spacing={2}>
                <Pagination
                    count={Math.ceil(totalPosts / postPerPage)}
                    page={page}
                    variant="outlined"
                    color="primary"
                    showFirstButton
                    showLastButton
                    onChange={(_, num) =>  setPage(num)}
                />
            </Stack>
        </div>
    );
};


