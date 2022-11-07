export interface CreateArticleTS {
    title: string,
    description: string,
    body: string,
    tagList: ['']
}

export interface UpdateArticlesTS {
    paramsSlug: string
    initialValue:{slug: string,
    title: string,
    description: string,
    body: string,}
}

export interface AuthSlice{
    user: null,
    token: null | string,
    isLoading: boolean,
    articles: Article[],
    articlesCount: number
}

export interface Article {
    slug: string
    title: string
    description: string
    body: string
    tagList: string[]
    createdAt: string
    updatedAt: string
    favorited: boolean
    favoritesCount: number
    author: Author
}

export interface Author {
    username: string
    bio: any
    image: string
    following: boolean
}
