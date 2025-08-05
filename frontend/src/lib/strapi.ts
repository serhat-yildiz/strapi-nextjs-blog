import axios from 'axios';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';

const strapiApi = axios.create({
  baseURL: `${STRAPI_URL}/api`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Category {
  id: number;
  documentId: string;
  name: string;
  description: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Author {
  id: number;
  documentId: string;
  name: string;
  email: string;
  bio: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface Article {
  id: number;
  documentId: string;
  title: string;
  content: string;
  excerpt: string;
  DateTime: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface StrapiResponse<T> {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

// API Functions
export const getCategories = async (): Promise<StrapiResponse<Category>> => {
  const response = await strapiApi.get('/categories');
  return response.data;
};

export const getAuthors = async (): Promise<StrapiResponse<Author>> => {
  const response = await strapiApi.get('/authors');
  return response.data;
};

export const getArticles = async (): Promise<StrapiResponse<Article>> => {
  const response = await strapiApi.get('/articles');
  return response.data;
};

export const getArticleById = async (documentId: string): Promise<{ data: Article }> => {
  const response = await strapiApi.get(`/articles/${documentId}`);
  return response.data;
};

export default strapiApi;